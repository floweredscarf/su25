// Modified from https://github.com/just-the-docs/just-the-docs/blob/7631aaa309dc2be8836d91dbcdd9b2dac8b3b6e8/assets/js/just-the-docs.js

(function () {
  "use strict";

  const PREVIEWS = 3;
  const PREVIEW_WORDS_BEFORE = 5;
  const PREVIEW_WORDS_AFTER = 10;

  function initSearch() {
    // TODO: possibly read from a pre-compiled file if it exists
    // so long pages can defer the JSON construction to Jekyll
    // A la https://github.com/just-the-docs/just-the-docs/blob/main/assets/js/zzzz-search-data.json

    let postContent = document.querySelector(".post-content");
    let curr = postContent.querySelector("h1, h2, h3, h4, h5, h6");
    let sections = [];
    while (curr != null) {
      if (
        curr.nodeType == Node.ELEMENT_NODE &&
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(
          curr.tagName.toLowerCase()
        )
      ) {
        let clean = curr.cloneNode(true);
        clean.querySelectorAll(".anchor_heading").forEach(n => n.remove());
        sections.push([clean]);
      } else {
        sections[sections.length - 1].push(curr);
      }
      curr = curr.nextSibling;
    }

    let searchContents = sections.map((s) => 
      {
        let h = s[0];
        return {
          title: h.textContent.trim(),
          content:
            s
              .map((e) => e.outerHTML)
              .join(" ")
              // JTD's replacements
              .replace("</h", " . </h")
              .replace("<hr", " . <hr")
              .replace("</p", " . </p")
              .replace("<ul", " . <ul")
              .replace("</ul", " . </ul")
              .replace("<ol", " . <ol")
              .replace("</ol", " . </ol")
              .replace("</tr", " . </tr")
              .replace("<li", " | <li")
              .replace("</li", " | </li")
              .replace("<td", " | <td")
              .replace("</td", " | </td")
              .replace("<th", " | <th")
              .replace("</th", " | </th")
              // strip_html
              .replace(/<script.*?<\/script>/gim, "")
              .replace(/<!--.*?-->/gim, "")
              .replace(/<style.*?<\/style>/gim, "")
              .replace(/<.*?>/gim, "")
              // normalize_whitespace
              .replace(/\s+/, " ")
              // More JTD replacements
              .replace(". . .", ".")
              .replace(". .", ".")
              .replace("| |", "|") + " ",
          url: window.location.origin + window.location.pathname + "#" + h.id,
        }
      });

    // Allow hyphenated search words
    lunr.tokenizer.separator = /[\s/]+/;
    let index = lunr(function () {
      this.ref("id");
      this.field("title", { boost: 200 });
      this.field("content", { boost: 2 });
      this.metadataWhitelist = ["position"];

      for (const [i, s] of searchContents.entries()) {
        this.add({
          id: i,
          title: s.title,
          content: s.content,
        });
      }
    });

    searchLoaded(index, searchContents);
  }

  function searchLoaded(index, searchContents) {
    var index = index;
    var searchContents = searchContents;
    var searchInput = document.getElementById("search-input");
    var searchResults = document.getElementById("search-results");
    var currentInput;
    var currentSearchIndex = 0;

    function showSearch() {
      document.documentElement.classList.add("search-active");
    }

    function hideSearch() {
      document.documentElement.classList.remove("search-active");
    }

    function update() {
      currentSearchIndex++;
      document.querySelector(".search").scrollIntoView();
      var input = searchInput.value;
      if (input === "") {
        hideSearch();
      } else {
        showSearch();
      }
      if (input === currentInput) {
        return;
      }
      currentInput = input;
      if (input === "") {
        return;
      }
      searchResults.innerHTML = "";

      var results = index.query(function (query) {
        var tokens = lunr.tokenizer(input);
        query.term(tokens, {
          boost: 10,
        });
        query.term(tokens, {
          wildcard: lunr.Query.wildcard.TRAILING,
        });
      });

      if (results.length == 0 && input.length > 2) {
        var tokens = lunr.tokenizer(input).filter(function (token, i) {
          return token.str.length < 20;
        });
        if (tokens.length > 0) {
          results = index.query(function (query) {
            query.term(tokens, {
              editDistance: Math.round(Math.sqrt(input.length / 2 - 1)),
            });
          });
        }
      }

      if (results.length == 0) {
        var noResultsDiv = document.createElement("div");
        noResultsDiv.classList.add("search-no-result");
        noResultsDiv.innerText = "No results found";
        searchResults.appendChild(noResultsDiv);
      } else {
        var resultsList = document.createElement("ul");
        resultsList.classList.add("search-results-list");
        searchResults.appendChild(resultsList);

        addResults(resultsList, results, 0, 10, 100, currentSearchIndex);
      }

      function addResults(
        resultsList,
        results,
        start,
        batchSize,
        batchMillis,
        searchIndex
      ) {
        if (searchIndex != currentSearchIndex) {
          return;
        }
        for (var i = start; i < start + batchSize; i++) {
          if (i == results.length) {
            return;
          }
          addResult(resultsList, results[i]);
        }
        setTimeout(function () {
          addResults(
            resultsList,
            results,
            start + batchSize,
            batchSize,
            batchMillis,
            searchIndex
          );
        }, batchMillis);
      }

      function addResult(resultsList, result) {
        var doc = searchContents[result.ref];

        var resultsListItem = document.createElement("li");
        resultsListItem.classList.add("search-results-list-item");
        resultsList.appendChild(resultsListItem);

        var resultLink = document.createElement("a");
        resultLink.classList.add("search-result");
        resultLink.setAttribute("href", doc.url);
        resultsListItem.appendChild(resultLink);

        var resultTitle = document.createElement("div");
        resultTitle.classList.add("search-result-title");
        resultLink.appendChild(resultTitle);

        var resultDocTitle = document.createElement("div");
        resultDocTitle.classList.add("search-result-doc-title");
        resultDocTitle.innerHTML = doc.title;
        resultTitle.appendChild(resultDocTitle);

        var metadata = result.matchData.metadata;
        var titlePositions = [];
        var contentPositions = [];
        for (var j in metadata) {
          var meta = metadata[j];
          if (meta.title) {
            var positions = meta.title.position;
            for (var k in positions) {
              titlePositions.push(positions[k]);
            }
          }
          if (meta.content) {
            var positions = meta.content.position;
            for (var k in positions) {
              var position = positions[k];
              var previewStart = position[0];
              var previewEnd = position[0] + position[1];
              var ellipsesBefore = true;
              var ellipsesAfter = true;
              for (var k = 0; k < PREVIEW_WORDS_BEFORE; k++) {
                var nextSpace = doc.content.lastIndexOf(" ", previewStart - 2);
                var nextDot = doc.content.lastIndexOf(". ", previewStart - 2);
                if (nextDot >= 0 && nextDot > nextSpace) {
                  previewStart = nextDot + 1;
                  ellipsesBefore = false;
                  break;
                }
                if (nextSpace < 0) {
                  previewStart = 0;
                  ellipsesBefore = false;
                  break;
                }
                previewStart = nextSpace + 1;
              }
              for (var k = 0; k < PREVIEW_WORDS_AFTER; k++) {
                var nextSpace = doc.content.indexOf(" ", previewEnd + 1);
                var nextDot = doc.content.indexOf(". ", previewEnd + 1);
                if (nextDot >= 0 && nextDot < nextSpace) {
                  previewEnd = nextDot;
                  ellipsesAfter = false;
                  break;
                }
                if (nextSpace < 0) {
                  previewEnd = doc.content.length;
                  ellipsesAfter = false;
                  break;
                }
                previewEnd = nextSpace;
              }
              contentPositions.push({
                highlight: position,
                previewStart: previewStart,
                previewEnd: previewEnd,
                ellipsesBefore: ellipsesBefore,
                ellipsesAfter: ellipsesAfter,
              });
            }
          }
        }

        if (titlePositions.length > 0) {
          titlePositions.sort(function (p1, p2) {
            return p1[0] - p2[0];
          });
          resultDocTitle.innerHTML = "";
          addHighlightedText(
            resultDocTitle,
            doc.title,
            0,
            doc.title.length,
            titlePositions
          );
        }

        if (contentPositions.length > 0) {
          contentPositions.sort(function (p1, p2) {
            return p1.highlight[0] - p2.highlight[0];
          });
          var contentPosition = contentPositions[0];
          var previewPosition = {
            highlight: [contentPosition.highlight],
            previewStart: contentPosition.previewStart,
            previewEnd: contentPosition.previewEnd,
            ellipsesBefore: contentPosition.ellipsesBefore,
            ellipsesAfter: contentPosition.ellipsesAfter,
          };
          var previewPositions = [previewPosition];
          for (var j = 1; j < contentPositions.length; j++) {
            contentPosition = contentPositions[j];
            if (previewPosition.previewEnd < contentPosition.previewStart) {
              previewPosition = {
                highlight: [contentPosition.highlight],
                previewStart: contentPosition.previewStart,
                previewEnd: contentPosition.previewEnd,
                ellipsesBefore: contentPosition.ellipsesBefore,
                ellipsesAfter: contentPosition.ellipsesAfter,
              };
              previewPositions.push(previewPosition);
            } else {
              previewPosition.highlight.push(contentPosition.highlight);
              previewPosition.previewEnd = contentPosition.previewEnd;
              previewPosition.ellipsesAfter = contentPosition.ellipsesAfter;
            }
          }

          var resultPreviews = document.createElement("div");
          resultPreviews.classList.add("search-result-previews");
          resultLink.appendChild(resultPreviews);

          var content = doc.content;
          for (
            var j = 0;
            j < Math.min(previewPositions.length, PREVIEWS);
            j++
          ) {
            var position = previewPositions[j];

            var resultPreview = document.createElement("div");
            resultPreview.classList.add("search-result-preview");
            resultPreviews.appendChild(resultPreview);

            if (position.ellipsesBefore) {
              resultPreview.appendChild(document.createTextNode("... "));
            }
            addHighlightedText(
              resultPreview,
              content,
              position.previewStart,
              position.previewEnd,
              position.highlight
            );
            if (position.ellipsesAfter) {
              resultPreview.appendChild(document.createTextNode(" ..."));
            }
          }
        }
      }

      function addHighlightedText(parent, text, start, end, positions) {
        var index = start;
        for (var i in positions) {
          var position = positions[i];
          var span = document.createElement("span");
          span.innerHTML = text.substring(index, position[0]);
          parent.appendChild(span);
          index = position[0] + position[1];
          var highlight = document.createElement("span");
          highlight.classList.add("search-result-highlight");
          highlight.innerHTML = text.substring(position[0], index);
          parent.appendChild(highlight);
        }
        var span = document.createElement("span");
        span.innerHTML = text.substring(index, end);
        parent.appendChild(span);
      }
    }

    searchInput.addEventListener("focus", function () {
      setTimeout(update, 0);
    });

    searchInput.addEventListener("keyup", function (e) {
      switch (e.code) {
        case "Escape": // Hide the results and clear the field
          searchInput.value = "";
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "Enter":
          e.preventDefault();
          return;
      }
      update();
    });

    searchInput.addEventListener("keydown", function (e) {
      switch (e.code) {
        case "ArrowUp":
          e.preventDefault();
          var active = document.querySelector(".search-result.active");
          if (active) {
            active.classList.remove("active");
            if (active.parentElement.previousSibling) {
              var previous =
                active.parentElement.previousSibling.querySelector(
                  ".search-result"
                );
              previous.classList.add("active");
            }
          }
          return;
        case "ArrowDown":
          e.preventDefault();
          var active = document.querySelector(".search-result.active");
          if (active) {
            if (active.parentElement.nextSibling) {
              var next =
                active.parentElement.nextSibling.querySelector(
                  ".search-result"
                );
              active.classList.remove("active");
              next.classList.add("active");
            }
          } else {
            var next = document.querySelector(".search-result");
            if (next) {
              next.classList.add("active");
            }
          }
          return;
        case "Enter":
          e.preventDefault();
          var active = document.querySelector(".search-result.active");
          if (active) {
            active.click();
          } else {
            var first = document.querySelector(".search-result");
            if (first) {
              first.click();
            }
          }
          return;
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target != searchInput) {
        hideSearch();
      }
    });
  }

  initSearch();
})();
