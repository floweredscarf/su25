---
layout: page
title: Exam Policies
parent: Policies
nav_order: 1
hide_content: false
unreleased_warning: false
---

# Exam Policies

This course has a midterm exam and a final exam.

- The Midterm will be on **Friday, July 18th from 7-9 PM in Dwinelle 155**.
- The Final Exam will be on **Tuesday, August 12th from 3-6 PM in Dwinelle 155**.

We will offer **in-person exams only**.

Students with DSP accommodations that require alternate exam timing
will be accounted for, so long as you can make a time that overlaps the official
time. If you have a disability that prevents your ability to make such a time,
we will discuss alternate arrangements with you directly.

If you have a time conflict with the midterm exam, or if you
are unable to make the final exam, please email <cs61bl@berkeley.edu> as soon as possible explaining your needs.

## Final Exam Clobbering

We have a **partial clobber policy** for the midterm exam. If you do significantly better on the final exam than on the midterm, we will adjust your midterm score to reflect that improvement—but only **partially**. This is intended to account for situations where students improve over the course or have an off day on the midterm.
Specifically, if it helps your overall grade, we will **replace your midterm exam z-score** with the **average** of your midterm and final exam z-scores. Your final exam score will **never** be clobbered.

As an example, suppose you are in the following situation (all numbers are in terms of raw scores):
-   **Midterm Exam:** Your Score = 60, Mean Score = 70, Standard Deviation = 10
-   **Final Exam:** Your Score = 85, Mean Score = 75, Standard Deviation = 10

In this case, you will have the following z-scores:
-   **Midterm Exam**: (60 - 70) / 10 = -1
-   **Final Exam**: (85 - 75) / 10 = 1

Under the partial clobber policy, your adjusted midterm z-score will be (-1 + 1) / 2 = 0. Your new midterm score will correspond to the mean score, or 70. The final exam score remains unchanged.

Z-scores will be based on the grades before this policy is applied. In other words, we will not recalculate the statistics for the midterm for the purposes of implementing this policy.

The final exam z-score clobbering policy will only be applied if it helps your score. For example, if you score around the average on the midterm, but then have a bad day and do poorly on the final, we will not change your midterm scores.

While this mechanism introduces a bit of curving to the class, it does not turn the class into a competition. Our grading bins are still fixed, a vast majority of the points are not subject to this mechanism, and the impact tends to be relatively small for most students.

In theory, it would be nice to have a mechanism that avoids using any statistics, e.g., simply replacing your midterm score with the final grade if it’s higher. In practice, it is very difficult to get both the exam means (and variances) to line up. Therefore, we use a z-score partial clobbering policy as described above.
