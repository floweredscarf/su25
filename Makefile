SITE = _site/
CLEAN = $(SITE) .sass-cache/ .jekyll-metadata
EXEC = JEKYLL_ENV=debug bundle exec

.PHONY: build all serve clean

default: build

build:
	$(EXEC) jekyll build

all:
	$(EXEC) jekyll serve --drafts --future --unpublished

serve:
	$(EXEC) jekyll serve


clean:
	@rm -rf $(CLEAN)
