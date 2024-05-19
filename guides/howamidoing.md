import { Assignment, range, Topic, HideIfZero, Uncapped } from "./elements.js";

const BINS = [300, 285, 270, 250, 225, 205, 190, 180, 175, 170, 165, 160, 0];
const GRADES = [
  "A+",
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "D-",
  "F",
];

export const COURSE_CODE = "61A";

export const WARNING = `Grades listed here do not guarantee that assignment grade or final grade; we reserve the right to change these grades in the event of any mitigating circumstances (e.g., cheating, another violation of course policy, etc.) or errors in grading. If your grade is incorrect for any assignment, submit a regrade request using Howamidoing. If you spot a bug in Howamidoing, please make a private post on Ed.`;

export const EXPLANATION = String.raw`https://cs61bl.org/su22/about#grading`;
export const EXPLANATION_IS_LINK = true;

export const ENABLE_PLANNING = true;

export const EXPORT_INSTRUCTIONS = "Make sure to sync grades with Grade Display before exporting!";

window.COURSE_CODE = COURSE_CODE;
window.createAssignments = createAssignments;
window.canDisplayFinalGrades = canDisplayFinalGrades;
window.computeNeededFinalScore = computeNeededFinalScore;
window.participationProvided = participationProvided;
window.WARNING = WARNING;
window.EXPLANATION = EXPLANATION;
window.ENABLE_PLANNING = ENABLE_PLANNING;
window.EXPLANATION_IS_LINK = true;

window.ENABLE_REGRADES = false;
window.ACCEPT_MESSAGE =
  "We have accepted your request, and have updated your score on Okpy. The changes will be reflected on Howamidoing within 12 hours.";
window.REJECT_MESSAGE = "No changes were made to your grade.";
window.NEEDS_FOLLOWUP_MESSAGE =
  "We need a followup from you to reach a conclusion.";
  
window.DISABLE_REGRADES_FOR = [
    ...range(0, 14).filter(i => ![].includes(i)).map(i => `Discussion ${i}`),
    ...range(0, 13).filter(i => ![].includes(i)).map(i => `Vitamin ${i} (Total)`),
    "Diagnostic Quiz (Raw)", "Midterm (Raw)", "Midterm (Recovery)", "Hog Contest", "Academic Dishonesty Penalty"
]
  
window.EXPORT_INSTRUCTIONS = EXPORT_INSTRUCTIONS;

function homeworkCalculator(scores) {
	if (scores.length === 0) {
		return 0;
	}
	return scores.reduce((a, b) => a + b);
}

function labCalculator(scores) {
	if (scores.length === 0) {
		return 0;
	}
	const sorted = scores.sort((a, b) => a - b);
    const sortedDropTwo = sorted.slice(2);
    const sortedDropOne = sorted.slice(1);
    if (scores.length <= 9) {
        return sorted.reduce((a, b) => a + b);
    }
    if (scores.length === 10) {
        return sortedDropOne.reduce((a, b) => a + b);
    }
    return sortedDropTwo.reduce((a, b) => a + b);
}

export function createAssignments() {
    return [
        Topic("Raw Score", [
            Topic("Exams", [
                Topic("Diagnostic Quiz", [
                    Assignment("Diagnostic Quiz (Raw)", 5),
                ]),
                Topic("Midterm", [
                    Assignment("Midterm (Raw)", 55),
                    Assignment("Midterm (Recovery)", 0),
                ]),
                Topic("Final Exam", [
                    Assignment("Final (Raw)", 80),
                ]
              ),
            ]),
            Topic("Homework", [
                ...range(1, 8).map(i => Assignment(`Homework ${i} (Total)`, 3)),
            ], 21, homeworkCalculator),
            Topic("Projects", [
                Topic("Hog Project", [
                    Uncapped(Assignment("Hog (Total)", 23)),
                    Assignment("Hog (Checkpoint 1)", 1),
                ]),
                Topic("Cats Project", [
                    Uncapped(Assignment("Cats (Total)", 19)),
                    Assignment("Cats (Checkpoint 1)", 1),
                ]),
                Topic("Ants Project", [
                    Uncapped(Assignment("Ants (Total)", 25)),
                    Assignment("Ants (Checkpoint 1)", 1),
                    Assignment("Ants (Checkpoint 2)", 1),
                ]),
                Topic("Scheme Project", [
                    Uncapped(Assignment("Scheme (Total)", 26)),
                    Assignment("Scheme (Checkpoint 1)", 1),
                    Assignment("Scheme (Checkpoint 2)", 1),
                ]),
            ]),
            Topic("Lab", [
                ...range(0, 14).filter(i => ![0, 6, 13].includes(i)).map(i => Assignment(`Lab ${i} (Total)`, 2)),
            ], 18, labCalculator),
            Topic("Discussion", [
                ...range(0, 14).filter(i => ![].includes(i)).map(i => Assignment(`Discussion ${i}`, 1)),
            ], 11),
            Topic("Vitamins", [
                ...range(0, 13).filter(i => ![].includes(i)).map(i => Assignment(`Vitamin ${i} (Total)`, 1)),
            ], 11),
            HideIfZero(Uncapped(Topic("Extra Credit", [
                  HideIfZero(Assignment("Hog Contest")),
            ], 0))),
            HideIfZero(Uncapped(Topic("Academic Dishonesty Penalty", [
                  HideIfZero(Assignment("Academic Dishonesty Penalty")),
            ], 0))),
            ]),
    ];
}

export function canDisplayFinalGrades(scores) {
    const {
        Homework, Projects, Lab, Discussion, "Diagnostic Quiz (Raw)": MT1, "Midterm (Raw)": MT2,
    } = scores;
    return !Number.isNaN(Homework + Projects + + Lab + Discussion + MT1 + MT2);
}

export function computeNeededFinalScore(scores) {
    const {
        Homework, Projects, Lab, Discussion, "Diagnostic Quiz": MT1, "Midterm (Raw)": MT2, Vitamins
    } = scores;

    const Clobber = [...range(0, 14).filter(i => ![].includes(i)).map(i => scores[`Discussion ${i}`])].reduce((a, b) => a + b);

    const totalNonFinal = Homework
                        + Projects
                        + Lab
                        + Discussion
                        + Vitamins
                        + MT1
                        + MT2
                        //+ examRecover(MT1, Clobber, 40)
                        + examRecover(MT2, Clobber, 55);

    const needed = [];
    const grades = [];

    for (const [bin, i] of BINS.map((val, index) => [val, index])) {
        const neededScore = Math.max(0, bin - totalNonFinal);
        if (neededScore <= 80) {
            needed.push(`${neededScore} / 80`);
            grades.push(GRADES[i]);
        }
        if (neededScore === 0) {
            break;
        }
    }

    return [grades, needed];
}

function examRecover(examScore, participation, maxExamScore, cap = 10) {
    const halfScore = maxExamScore / 2;
    const maxRecovery = Math.max(0, (halfScore - examScore) / 2);
    const recoveryRatio = Math.min(participation, cap) / cap;
    return maxRecovery * recoveryRatio;
}

export function participationProvided(scores) {
    const { Discussion } = scores;
    return !Number.isNaN(Discussion);
}