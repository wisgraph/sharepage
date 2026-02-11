# Predictable Code – Foundations & Extensions

> This document provides the **theoretical foundations, adjacent knowledge, and extension rules** that justify and extend **Refactoring Guidelines 2.0**.
> It is **not** an operational rulebook. Its purpose is to explain *why* the rules exist and *how* to evolve them safely.

---

## 1. Scope & Positioning

* **Audience**: Senior engineers, tech leads, architects, AI agent designers
* **Non-goals**:

  * This document does **not** replace Refactoring Guidelines 2.0
  * This document is **not** a checklist or linter spec

**Relationship**:

* *Guidelines 2.0* → **What to do / What not to do**
* *This document* → **Why those rules work / Where they can be extended**

---

## 2. Core Thesis

> **Predictability is the reduction of interpretation space.**

Code is predictable when:

* The range of valid interpretations is small
* Incorrect interpretations fail fast
* Both humans and AI can infer intent from structure alone

CQS, naming rules, and SLAP are *mechanisms*.
This document describes the *constraints* that make those mechanisms reliable.

---

## 3. Foundational Principles

### 3.1 Immutability First

**Definition**: Data does not change after creation.

**Why it matters**:

* Collapses the state space AI must reason about
* Makes CQS violations mechanically harder
* Reduces temporal coupling ("what changed when?")

**Guiding rule**:

* Domain data is immutable by default
* State transitions create *new values*, not mutations

**Anti-pattern**:

```ts
user.setAge(20)
```

**Preferred**:

```ts
user = user.withAge(20)
```

---

### 3.2 Idempotency for Commands

**Definition**: Executing a command multiple times yields the same observable result as executing it once.

**Why it matters**:

* Safe retries in distributed systems
* Predictable AI refactoring (no hidden counters, toggles, accumulators)

**Guiding rule**:

* Commands must either:

  * Be naturally idempotent, or
  * Explicitly encode deduplication / version checks

**Heuristic**:

> If retrying this function can corrupt state, it is unsafe.

---

### 3.3 Honest Failures (Explicit Contracts)

**Problem**: Hidden failure paths are semantic lies.

**Principle**:

* A function signature is a **contract**, not just an API

**Rules**:

* If failure is possible, it must be visible via:

  * Result / Option types, or
  * Explicit, documented exceptions

**Anti-pattern**:

* Silent no-op on failure
* Unchecked runtime exceptions for expected conditions

**Rationale**:
AI and humans both over-trust signatures. Hidden failure modes break predictability.

---

### 3.4 Locality of Behavior (LoB)

**Definition**: Code that changes together should live together.

**Why it matters**:

* Excessive indirection increases cognitive load
* Over-application of SLAP leads to Ravioli Code

**Guiding rule**:

* Prefer *local clarity* over *global abstraction*
* Definitions and primary usage should fit within one screen when possible

**Heuristic**:

> If understanding a function requires jumping across many files, locality is broken.

---

## 4. System Dynamics Perspective

### 4.1 The Confusion Loop (Reinforcing)

Ambiguous Naming
→ Misinterpretation (Human & AI)
→ Incorrect Refactoring
→ Lower Trust in Codebase
→ More Defensive / Complex Code

This loop accelerates degradation.

---

### 4.2 Stabilizing Constraints (Balancing)

* Immutability
* Strong typing
* Explicit contracts

These reduce the interpretation space and slow degradation.

---

## 5. Relationship to Refactoring Guidelines 2.0

This document **does not add new mandatory rules**.

Instead, it:

* Explains why existing rules work
* Defines safe extension directions
* Prevents rule cargo-culting

**Mapping examples**:

* CQS → reinforced by Immutability
* SLAP → bounded by Locality of Behavior
* Naming honesty → extended to failure contracts

---

## 6. Usage Guidance

Use this document when:

* Designing or revising team-wide coding standards
* Resolving disagreements about refactoring boundaries
* Designing AI code reviewers or refactoring agents
* Evaluating whether a new rule should be added

Do **not** use this document as:

* A PR checklist
* A linter rule list
* A beginner tutorial

---

## 7. Final Note

> **Rules without theory decay into dogma.**
> **Theory without rules decays into philosophy.**

Refactoring Guidelines 2.0 define *discipline*.
This document defines *intent*.

Both are required for predictable systems.
