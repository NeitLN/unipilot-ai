# UniPilot AI Requirements Checklist

Source of truth: `2474802010391_VoVietTien_Individual_Assignment_Structure_Preserved_Revised.docx` (SRS v1.0, submitted 14 July 2026). This checklist preserves the SRS intent; unresolved details are recorded in Section 9 rather than assumed.

## 1. Product Summary

UniPilot AI is a personal, AI-powered student-life management web application for Tien, a tech-savvy second-year university student managing six to seven courses. Its purpose is to replace disconnected assignment, calendar, GPA, and focus tools with one system that helps him organize academic work, plan study time, monitor progress, and recognize elevated academic workload risk. The main persona is **Tien – The Overwhelmed Student**, age 20, who works across a smartphone and laptop and needs an integrated, responsive experience.

### User Activities

| User Activity ID | User Activity |
|---|---|
| UA-01 | Manage Assignments & Deadlines: add, prioritize, track academic tasks, and receive deadline reminders. |
| UA-02 | Receive an AI-generated Study Plan: allow the AI assistant to analyze workload and generate a personalized weekly study plan. |
| UA-03 | View Class Schedule: view daily, weekly, and monthly class schedules in one place. |
| UA-04 | Run a Focus Study Session: use a built-in Pomodoro timer linked to academic tasks. |
| UA-05 | Track GPA & Academic Progress: record grades and monitor GPA trends across subjects and semesters. |
| UA-06 | Review Workload-Risk Warning: review an academic workload-risk alert, understand its contributing factors, and decide whether to adjust the plan. |

### Use Cases

| Use Case ID | Use Case |
|---|---|
| UC-01 | Manage Assignments: add, edit, track, and delete assignments with deadline reminders. |
| UC-02 | Generate Study Plan: request and customize an AI-generated weekly study plan. |
| UC-03 | View Class Schedule: view a class schedule synchronized from Google Calendar. |
| UC-04 | Run Focus Session: start a Pomodoro timer linked to a specific assignment. |
| UC-05 | Track GPA: input grades and monitor cumulative GPA and academic progress. |
| UC-06 | Review Workload-Risk Warning: review the score and contributing factors, then confirm or dismiss a suggested planning action. |

## 2. MVP Scope

- Assignment Management.
- AI Study Planning.
- Class Schedule.
- Focus Session.
- GPA Tracking.
- Workload-Risk Warning.

### Technical Constraints

| Constraint ID | Constraint | Verification |
|---|---|---|
| TC-01 | Build a responsive web application using a modern JavaScript framework (React or Vue); native mobile compilation is not required. | Architecture review and responsive browser testing. |
| TC-02 | Use Google Calendar API for schedule synchronization and OAuth 2.0 for authentication; handle API quotas with retry logic and user-facing errors. | Integration, quota-limit, retry, and error-state tests. |
| TC-03 | Use an approved large-language-model API through server-side REST calls; validate responses, send only necessary academic data after consent, and offer Retry after timeout or failure. | Architecture, consent/data-flow, response-validation, timeout, and failure tests. |
| TC-04 | Store persistent data in a cloud database; use local storage for cached reads and a durable write queue for offline assignment updates and focus logs. | Persistence, offline queue, reconnection, and synchronization tests. |
| TC-05 | Use Web Push API or an approved notification service; keep the in-app notification center authoritative when external delivery is unavailable. | Notification delivery and external-delivery failure tests. |

## 3. Functional Requirements Checklist

| Module | Requirement ID | Related User Activity | Related Use Case | Requirement | Testable Acceptance Criteria | Priority | Implementation Status | Verification Status |
|---|---|---|---|---|---|---|---|---|
| Assignment Management | FR-01 | UA-01 | UC-01 | The system shall allow the user to create an assignment with title, subject, due date, weight, and priority level. | Given valid values for all five required fields, Save persists one assignment and displays it with the entered values. If any required field is missing or invalid, the assignment is not saved and field-level feedback is shown. | High | Not Started | Not Tested |
| Assignment Management | FR-02 | UA-01 | UC-01 | The system shall display all assignments sorted by due date with overdue items automatically flagged in red. | The assignment list contains every stored assignment in ascending due-date order; each overdue item has a red overdue indicator that is distinguishable from the High Priority indicator. | High | Not Started | Not Tested |
| Assignment Management | FR-03 | UA-01 | UC-01 | The system shall send a push notification at a user-defined time before each assignment deadline. | For an assignment with a configured reminder and available notification delivery, one notification containing the assignment title and time remaining is delivered at the selected time and can open that assignment. | High | Not Started | Not Tested |
| AI Study Planning | FR-04 | UA-02 | UC-02 | The system shall use AI to generate a personalized day-by-day study-plan draft based on the user's workload, available hours, and GPA goals. | With positive weekly availability and at least one pending assignment, Analyze produces a reviewable day-by-day draft based on the specified inputs; it does not overlap classes or exceed declared daily availability. Failure or a 15-second timeout leaves the active plan unchanged and offers Retry. | High | Not Started | Not Tested |
| AI Study Planning | FR-05 | UA-02 | UC-02 | The system shall allow the user to edit individual sessions or regenerate the plan with new time constraints. | The user can edit an individual draft session and regenerate with changed constraints; every result is revalidated for class overlaps and daily capacity before display. | High | Not Started | Not Tested |
| AI Study Planning | FR-06 | UA-02 | UC-02 | The system shall save the finalized study plan and automatically create reminders for each scheduled study session. | Confirm Plan persists and activates exactly the reviewed draft and creates a reminder for each scheduled session. Cancel discards the draft and leaves the previous active plan unchanged. | High | Not Started | Not Tested |
| Class Schedule | FR-07 | UA-03 | UC-03 | The system shall synchronize the user's class schedule from Google Calendar and display it in Day, Week, and Month views. | After authorized synchronization, the same class data is available in Day, Week, and Month views. On synchronization failure, cached data, the last-sync time, and a warning remain visible. | High | Not Started | Not Tested |
| Class Schedule | FR-08 | UA-03 | UC-03 | The system shall display assignments linked to each class block within the schedule view. | Opening a class block displays its linked assignments, and each visible link resolves to the correct stored assignment. A class with no links displays an explicit empty state. | Medium | Not Started | Not Tested |
| Focus Session | FR-09 | UA-04 | UC-04 | The system shall run one standard 25-minute Pomodoro interval linked to a selected active assignment. | Start is blocked until one active assignment is selected. Once started, exactly one resilient 25-minute countdown runs and remains linked to that assignment. | Medium | Not Started | Not Tested |
| Focus Session | FR-10 | UA-04 | UC-04 | The system shall store a focus session as Completed at 25 minutes and Partial when stopped early, including actual duration and linked assignment. | Reaching 25 minutes stores one Completed log with a 25-minute duration and selected assignment. Confirming an early stop stores one Partial log with actual elapsed duration and the selected assignment. | Medium | Not Started | Not Tested |
| Focus Session | FR-11 | UA-04 | UC-04 | The system shall display weekly completed cycles, completed/partial minutes, course totals, assignment totals, and a streak based only on completed cycles. | The focus summary matches stored logs for each named metric; adding a Completed log increases applicable completed metrics and may affect the streak, while adding a Partial log changes partial minutes but never increases the streak. | Medium | Not Started | Not Tested |
| GPA Tracking | FR-12 | UA-05 | UC-05 | The system shall calculate and display semester and cumulative GPA after the user saves a valid final course grade point and credit hours. | Saving a grade point from 0.0 to 4.0 with positive credits recalculates semester and cumulative GPA as total quality points divided by total credits and displays each value rounded to two decimals. Invalid values are not saved. | High | Not Started | Not Tested |
| GPA Tracking | FR-13 | UA-05 | UC-05 | The system shall calculate the average grade point required across remaining credits to reach the target GPA. | Given a target GPA and positive remaining credits, the displayed required average matches the GPA formula using stored completed quality points and credits. | High | Not Started | Not Tested |
| GPA Tracking | FR-14 | UA-05 | UC-05 | The system shall display each course's final grade point, credit hours, quality points, and weighted contribution to GPA. | For every stored course, the breakdown shows its saved grade point and credits, quality points equal to grade point multiplied by credits, and a weighted contribution consistent with the cumulative GPA calculation. | High | Not Started | Not Tested |
| Workload-Risk Warning | FR-15 | UA-06 | UC-06 | The system shall calculate a daily academic workload-risk score from workload volume, overdue tasks, and focus-session patterns when sufficient data exists. | Once per day, when the required assignment, availability, and focus data is sufficient, the system records a score with its calculation time, component values, and source data. With insufficient data, it shows Not Enough Data and does not estimate a score. | Medium | Not Started | Not Tested |
| Workload-Risk Warning | FR-16 | UA-06 | UC-06 | The system shall create one warning when the workload-risk score reaches the defined threshold and retain an in-app warning if external delivery fails. | A daily score of 60 or higher creates one warning for that threshold event. The warning remains available in-app if push delivery is unavailable or fails, and the report states that the score is a planning aid, not a medical diagnosis. | Medium | Not Started | Not Tested |

## 4. Non-Functional Requirements Checklist

| NFR ID | Category | Requirement | Measurable Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| NFR-01 | Performance | The dashboard and cached main-tab content shall become usable within 2 seconds on a 10 Mbps connection under the defined test dataset. | In a network-throttled test at 10 Mbps using the defined dataset, time to usable is at most 2.0 seconds for the dashboard and each cached main tab. | Automated performance test with network throttling. | Not Tested |
| NFR-02 | Performance | The AI draft shall be displayed within 10 seconds under normal service conditions; after 15 seconds the request shall time out and offer Retry. | Under normal service conditions, a valid draft appears within 10.0 seconds; any request still incomplete at 15.0 seconds ends in a visible timeout state with Retry. | Timed integration and forced-timeout tests. | Not Tested |
| NFR-03 | Usability | At 375 × 667 CSS pixels, primary actions shall be reachable without horizontal scrolling and touch targets shall be at least 44 × 44 CSS pixels. | At the stated viewport, no screen has horizontal scrolling, every primary action is reachable, and every interactive touch target is at least 44 × 44 CSS pixels. | Responsive layout inspection and automated accessibility measurement. | Not Tested |
| NFR-04 | Usability | A new user must be able to add an assignment and start a focus session within 3 minutes of first opening the app, without a tutorial. | In a moderated test with first-time users and no tutorial, each participant completes both tasks within 3 minutes without facilitator assistance. | Timed usability test. | Not Tested |
| NFR-05 | Reliability | Cached assignments and schedule shall remain readable offline; assignment updates and focus logs shall be stored locally and synchronized after reconnection. | While offline, cached assignments and schedule remain readable and new assignment updates/focus logs enter a durable local queue; after reconnection, queued records synchronize and visible status reflects completion or failure. | Offline, restart, reconnection, and synchronization tests. | Not Tested |
| NFR-06 | Reliability | All user data (assignments, grades, focus logs) must be stored persistently and survive app restarts or device reboots. | Saved assignments, grades, and focus logs remain unchanged after app restart and device/browser restart. | Persistence and restart tests. | Not Tested |
| NFR-07 | Security | Authentication shall use secure token-based sessions and expire after 7 days of inactivity. | Authentication uses protected token-based sessions; after seven full days without user activity, the next protected request is rejected and reauthentication is required. | Security configuration review and inactivity-expiry test. | Not Tested |
| NFR-08 | Security | Academic data shall be encrypted in transit and at rest. Calendar, AI, and notification integrations shall receive only necessary data after explicit user consent. | All academic-data network traffic uses encrypted transport, stored academic data is encrypted, each integration is blocked before consent, and post-consent payload inspection finds only fields necessary for that integration. | Security/configuration review, consent tests, and payload inspection. | Not Tested |
| NFR-09 | Maintainability | Each feature (Assignments, GPA, Focus, AI Planner, Workload-Risk Warning) must be developed as an independent module to allow independent updates. | Architecture boundaries permit each named feature module to be changed and tested without requiring source changes in unrelated feature modules. | Architecture and dependency review; module-level test execution. | Not Tested |
| NFR-10 | Compatibility | The web app shall work on the latest two stable versions of Chrome, Edge, and Safari at 375 px mobile width and 1280 px desktop width without horizontal scrolling. | All primary flows pass on the latest two stable versions of each named browser at both widths, with no horizontal scrolling. | Cross-browser responsive test matrix. | Not Tested |

## 5. Business Rules

| Business Rule ID | Rule | Related User Activity | Related Use Case | Related Functional Requirements | Verification Method |
|---|---|---|---|---|---|
| BR-01 | Every assignment must have a title, subject, due date, weight, and priority before it can be saved. Overdue and High Priority must use different labels so the states are not confused. | UA-01 | UC-01 | FR-01, FR-02, FR-03 | Required-field validation, save-blocking, sorting, and visual-state distinction tests. |
| BR-02 | The AI planner can generate a draft only after the user sets positive weekly availability and at least one pending assignment exists. A plan cannot overlap a class, exceed daily availability, or become active before Confirm Plan. | UA-02 | UC-02 | FR-04, FR-05, FR-06 | Preconditions, overlap/capacity validation, confirmation, and cancellation tests. |
| BR-03 | Google Calendar is the primary schedule source. Cached data must show its last-sync time. Manual entries are allowed only when synchronization is unavailable and must be clearly marked. | UA-03 | UC-03 | FR-07, FR-08 | Source precedence, synchronization failure, cache timestamp, and manual-entry labeling tests. |
| BR-04 | A focus interval cannot start without one active assignment. A 25-minute interval is Completed and counts toward the streak. An early confirmed stop is Partial, stores actual duration, and does not increase the streak. | UA-04 | UC-04 | FR-09, FR-10, FR-11 | Start validation, completed-cycle, early-stop, duration, and streak tests. |
| BR-05 | GPA equals total quality points divided by total credits, where quality points equal grade point multiplied by credit hours. Grade point must be 0.0–4.0, credits must be positive, and displayed GPA is rounded to two decimals. | UA-05 | UC-05 | FR-12, FR-13, FR-14 | Boundary validation and formula tests using known grade/credit datasets. |
| BR-06 | The academic workload-risk score is calculated daily only when sufficient assignment, availability, and focus data exists. One warning is created when the score reaches 60. The score is a planning aid and not a medical diagnosis. | UA-06 | UC-06 | FR-15, FR-16 | Scheduled calculation, insufficient-data, threshold-boundary, warning deduplication, and disclaimer tests. |

## 6. Traceability Matrix

| Module | User Activity | Use Case | User Story | Functional Requirements | Business Rule |
|---|---|---|---|---|---|
| Assignment Management | UA-01 | UC-01 | US-01 – Add a new assignment with title, subject, due date, weight, and priority. | FR-01, FR-02 | BR-01 |
| Assignment Management | UA-01 | UC-01 | US-02 – Receive a push notification before an assignment deadline. | FR-03 | BR-01 |
| AI Study Planning | UA-02 | UC-02 | US-03 – Generate an AI weekly study-plan draft from current workload and availability. | FR-04 | BR-02 |
| AI Study Planning | UA-02 | UC-02 | US-04 – Edit, regenerate, and explicitly confirm the AI study plan. | FR-05, FR-06 | BR-02 |
| Class Schedule | UA-03 | UC-03 | US-05 – View class schedule in Day, Week, and Month modes with linked tasks. | FR-07, FR-08 | BR-03 |
| Focus Session | UA-04 | UC-04 | US-06 – Complete a 25-minute focus session linked to an assignment. | FR-09, FR-10, FR-11 | BR-04 |
| GPA Tracking | UA-05 | UC-05 | US-07 – Enter or update final course results and recalculate weighted GPA. | FR-12, FR-14 | BR-05 |
| GPA Tracking | UA-05 | UC-05 | US-08 – Set a GPA target and forecast whether it can be achieved. | FR-13 | BR-05 |
| Workload-Risk Warning | UA-06 | UC-06 | US-09 – Receive and review an academic workload-risk warning and decide whether to adjust the plan. | FR-15, FR-16 | BR-06 |

## 7. Global Completion Rules

- Every form must have validation.
- Every relevant asynchronous operation must provide loading, success, and error states.
- Every data-driven screen must provide an empty state.
- Confirm, Cancel, Dismiss, and Retry actions must lead to an explicit and stable state.
- AI suggestions must not be applied without explicit user confirmation.
- The interface must be responsive on mobile, tablet, and desktop.
- Workload-Risk Warning must not be presented as a medical or psychological diagnosis.
- Important user data must be stored persistently.
- Offline-capable features must display their synchronization status.
- Failed operations must not silently discard user input.
- The terminology used in the SRS must remain consistent throughout the project.

## 8. Out of Scope

- Social networking.
- Payments.
- Chat.
- Admin dashboard.
- Multiple user roles.
- Medical or psychological diagnosis.
- Any feature not defined in the SRS.

## 9. Open Questions

1. UC-01 includes editing and deleting assignments, but FR-01–FR-03 do not define the required edit/delete behavior, deletion confirmation, or reminder cleanup. What behavior is required for these operations?
2. FR-03 requires a push notification, while TC-05 makes the in-app notification center authoritative when external delivery is unavailable. What exact fallback and retry behavior is required when notification permission is denied, the device is offline, or delivery fails?
3. The SRS does not define how a class and an assignment are linked or unlinked for FR-08. Is linkage manual, inferred by subject, imported from Calendar metadata, or some defined combination?
4. BR-03 permits manual schedule entries only when synchronization is unavailable, but no functional requirement defines how they are created, updated, removed, or reconciled after synchronization resumes. What lifecycle is required?
5. US-08 names the forecast classifications Achievable, Hard, and Unreachable, but their numeric boundaries are not defined. What thresholds determine each classification?
6. BR-06 does not define the workload-risk formula, component weights, the minimum data considered “sufficient,” or the daily calculation time. What are those values?
7. FR-16/BR-06 says one warning is created when the score reaches 60, but does not define whether “one” means per day, per threshold crossing, or until the previous warning is handled. What is the deduplication/reset rule?
8. UA-06 refers to suggested planning actions, but the allowed actions and the exact plan changes each action may apply are not enumerated. Which actions must the MVP support?
9. NFR-01 refers to a “defined test dataset,” and NFR-02 refers to “normal service conditions,” but neither benchmark fixture is defined. What dataset size/device profile and service conditions should be used for acceptance testing?
10. NFR-05 requires offline synchronization but does not define conflict resolution when local changes and cloud records diverge. Which conflict policy must be used?
11. TC-03 requires an “approved” large-language-model API, but the approved provider/model list and approval authority are not specified. Which API choices are approved?
