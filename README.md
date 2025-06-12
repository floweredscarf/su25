# CS 161 Template Website

New course website for SU23 developed by Peyrin.

## General Instructions

A majority of the information that needs to be updated semester-to-semester is
- `_data/` folder
   - `calendar.yml`: This requires the Google Calendar API in order to generate a color-coded course calendar (see `calendar.md`).
   - `exams.yml`: Target updates to `exam.md` depending on which exam is the current one.
   - `faqs.yml`: Depending on whether your course has FAQs regarding enrollment that are similar semester-to-semester, you can use this to update important dates.
   - `homeworks.yml`, `lectures.yml`, `projects.yml`: Each assignment or lecture has it's own attributes; the comments on each individual page provide information on how to update them.
   - `proj1_assignment.yml`: You can provide assignemnt specific attributes (see how these attributes are utilized in `proj1/index.md`). This allows you to re-use project pages (such as `proj1/index.md`) without worry that you're forgetting to update a link or date.
   - `syllabus.yml`: This houses all important dates, and is utilized to create the calendar on the front page.
- `_staffers` folder
   - Make one `.md` file per member of course staff, following the template provided. Note that if you set a staffer's role as `TA with role`, mark their `lead` (this could be `Head TA`, or a specific area of course staff that they manage).
   - You can also optionally add biographies for each member of staff.
   - Post each staff member's image in `assets/staff`.

## Updating assignments

- Instructions for uploading discussion worksheets are in `_data/discussions.yml`.
- Instructions for releasing homeworks are in `_data/homeworks.yml`.
- Instructions for releasing projects are in `_data/projects.yml`.


## Building website

To update the website, just push to this repo, and the website will automatically build and update in around a minute. To keep the repo clean, **please tag your commit messages** by adding an assignment tag at the beginning. Examples:
- `[disc02] release`
- `[hw02] add electronic hw`
- `[proj1] fix typo in spec`

To build the website locally, [install Jekyll](https://jekyllrb.com/docs/installation/) and run `bundle exec jekyll serve`.

## Scheduling assignment release
If you've made a PR for an assignment release, and would like to schedule that PR to merge, feel free to utilize the workflow here in `.github/workflows/merge-schedule.yml`.

This has a cron job set up, which runs each hour. If you set the comment on the PR in GitHub to be `/schedule YYYY-MM-DDT07:00:00.000Z`, this will release on `YYYY-MM-DD` at 7AM UTC, which is midnight in Pacific time. Feel free to customize as desired.

## [NEW] SU24: Beginning of semester setup
Refer to this [GitHub gist](https://gist.github.com/ashmchiu/797f80d9d4c1d674b9868c0a01b633c0) for information on setting up the website to deploy on inst.eecs.