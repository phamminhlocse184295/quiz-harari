# Quiz Harari - Context Handoff

## 1) Project Snapshot
- Project name: quiz-harari
- Purpose: 7-question Harari-inspired quiz app (based on "21 Lessons for the 21st Century") for academic showcase.
- Stack: Vanilla HTML/CSS/JS (no framework), Firebase Hosting.
- Live URL: https://quiz-harari.web.app
- Hosting project: quiz-harari

## 2) Current Product State
- Theme/UI: dark zinc style (shadcn-like), mobile-first.
- Intro: optional name input, keyword chips, estimated time, local resume banner, play counter.
- Quiz: back button supported, progress UI, answer lock to prevent double-click scoring.
- Loading: staged progress + quote text per step.
- Result: matched lesson card, gradient backgrounds, related lessons, share + download, confetti.
- Share/download:
  - Native share via Web Share API.
  - Image download via html2canvas loaded lazily only when needed.

## 3) Core Logic
- Scoring: 5-axis vector dot product.
- Questions: data/questions.js (7 questions).
- Lessons: data/lessons.js (21 lessons with axes + title + quote + advice + gradient).
- Result engine: quiz.js getResult(userScores).

## 4) Important Bug Fixes Already Done
- Fixed result ranking edge case by initializing highest score to -Infinity.
- Added zero-score fallback to lesson id 14 if needed.
- Prevented double-click option scoring.
- Restored per-lesson gradient rendering in result card.
- Added proper form submit handling on intro.

## 5) Firebase Integration Status
Already implemented in code:
- F1 Analytics events:
  - quiz_start
  - quiz_complete (with result_id, result_title)
  - share_click
  - download_click
- F2 Firestore write:
  - Save result to collection results with fields:
    - name
    - resultId
    - resultTitle
    - timestamp (serverTimestamp)
- F3 Counter source:
  - Intro play counter can read real count from Firestore results collection.
- F4 Stats page:
  - /stats.html exists and reads Firestore to render:
    - total plays
    - top result bars
    - hourly activity bars (today)

## 6) Files Added/Changed in Recent Work
- Added:
  - firebase-init.js
  - stats.html
  - confetti.js
  - manifest.json
- Updated:
  - index.html
  - app.js
  - share.js
  - style.css
  - quiz.js
  - 404.html
  - data/questions.js

## 7) Firebase Console Setup Expected
- Firestore database has been created in project quiz-harari.
- Recommended rules in use (or to apply):

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /results/{doc} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['name', 'resultId', 'resultTitle', 'timestamp']);
    }
  }
}
```

## 8) Deployment Status
- Latest deploy completed successfully to hosting target quiz-harari.
- Verified deploy command used:
  - firebase deploy

## 9) Quick Validation Checklist
1. Open https://quiz-harari.web.app and finish one quiz.
2. Open https://quiz-harari.web.app/stats.html and verify numbers/bars appear.
3. In Firebase Console -> Firestore -> Data, confirm collection results has new documents.
4. In Firebase Analytics, check events arriving (can be delayed).

## 10) Suggested Next Improvements
- Add simple anti-spam rate limit for writes (client-side throttle + optional Cloud Function later).
- Add admin-only stats page or protected stats rules if public read is not desired.
- Add event params for question-level analytics (question_index, option_index).
- Add export JSON/CSV for results if needed for event reporting.

## 11) Notes for Next AI Chat
- This is a plain static site; no build step required.
- Do not migrate to frameworks unless explicitly requested.
- Preserve existing visual language and current UX flow.
- Keep Firebase project as quiz-harari unless user asks to change.
