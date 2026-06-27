# 🚀 AEOS — Autonomous Enterprise Operating System

> *"From automation to autonomy — where workflows think, recover, and evolve."*

AEOS is a **multi-agent AI system** that takes full ownership of enterprise workflows — from execution to error recovery — without human intervention. Instead of static automation, AEOS introduces autonomous decision-making, self-healing workflows, and explainable audit trails.

---

## 📋 Table of Contents

- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [How It Works](#how-it-works)
- [Agent System](#agent-system)
- [Key Capabilities](#key-capabilities)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Demo](#demo)
- [Getting Started](#getting-started)

---

## 🚨 The Problem

Enterprise workflows are fundamentally broken:

- **70%+** of workflows require manual intervention at some point
- **40%** of delays are caused by bottlenecks and approval gaps
- Failures are hard to detect, hard to debug, and impossible to explain

**Example — a procurement request fails because:**
- Vendor exceeds budget
- Approval step is missing
- System times out

| Traditional Systems | AEOS |
|---------------------|------|
| Fail silently | Detect → Analyze → Recover → Continue |
| Static pipelines | Dynamic agent collaboration |
| Opaque failures | Full reasoning audit trail |

---

## 💡 The Solution

AEOS replaces fixed automation code with **dynamic agent collaboration**:

```
Workflow ≠ Fixed Code
Workflow = Dynamic Agent Collaboration
```

Each agent has a specific responsibility, collaborates with others, and shares structured context — functioning like a team of AI employees working in real time.

---

## ⚙️ How It Works

```
User Input
   ↓
🧠 Parse Agent        →  Understands and structures the request
   ↓
📊 Data Agent         →  Fetches relevant context and vendor data
   ↓
🤖 Decision Agent     →  Chooses the optimal action
   ↓
✅ Verification Agent  →  Validates the decision
   ↓
🔁 Self-Healing Engine →  Detects failures, retries with alternatives
   ↓
📜 Audit Logger       →  Records every step with reasoning
```

---

## 🤝 Agent System

| Agent | Role |
|-------|------|
| 🧠 **ParseAgent** | Converts raw input into structured workflow data |
| 📊 **DataAgent** | Retrieves relevant context, vendor info, constraints |
| 🤖 **DecisionAgent** | Selects the optimal action given current context |
| ✅ **VerificationAgent** | Validates correctness of the decision |
| 🚨 **ExceptionHandler** | Detects failures and triggers recovery |
| 📈 **SLA Monitor** | Tracks workflow health and SLA compliance |

---

## 🔥 Key Capabilities

### ⚙️ 1. Dynamic Workflow Orchestration
Workflows are defined via JSON configs — no hardcoding, fully extensible:

```json
{
  "steps": ["parse", "data", "decision", "verification"]
}
```

### 🤖 2. Autonomous Execution
End-to-end workflow execution with minimal human involvement and real-time decision making at each step.

### 🔁 3. Self-Healing System
When a step fails, the system doesn't stop:
- Detects invalid decisions automatically
- Retries with alternative strategies
- Escalates to human only when all recovery paths are exhausted

> The system doesn't fail — it adapts.

### 📜 4. Full Audit Trail
Every step logs:
- **Input** — what the agent received
- **Output** — what the agent produced
- **Reasoning** — why the agent made that decision
- **Timestamp** — when it happened

Enables explainable AI for enterprise compliance and debugging.

### 🚨 5. Workflow Health Monitoring
- SLA tracking per workflow
- Bottleneck detection before failures occur
- Process drift alerts for unusual patterns

---

## 🏗️ Architecture

```
┌─────────────────────────────┐
│       User / API Input      │
└────────────┬────────────────┘
             ↓
┌─────────────────────────────┐
│     Multi-Agent Layer       │
│  Parse → Data → Decision    │
│      → Verification         │
└────────────┬────────────────┘
             ↓
┌─────────────────────────────┐
│   Workflow Engine           │
│   (JSON-driven, modular)    │
└────────────┬────────────────┘
             ↓
┌─────────────────────────────┐
│   Self-Healing Engine       │
│   Retry / Escalate          │
└────────────┬────────────────┘
             ↓
┌─────────────────────────────┐
│   Audit Layer               │
│   Input / Output / Reason   │
└────────────┬────────────────┘
             ↓
┌─────────────────────────────┐
│   Frontend Dashboard        │
│   Real-time monitoring      │
└─────────────────────────────┘
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js |
| AI / LLM | Gemini API |
| Agent Framework | Custom multi-agent orchestration |
| Workflow Engine | JSON-driven, modular |
| Frontend | HTML / CSS / JavaScript |
| Dashboard | Real-time simulation UI |

---

## 🖥️ Demo

AEOS ships with a real-time enterprise dashboard showing:

- 📊 Active workflows — procurement, onboarding, contracts
- 🤖 Live agent activity and step progression
- 🔁 Exception handling and recovery in action
- 📜 Audit logs with per-step reasoning
- 🚨 Workflow health metrics and SLA status

### 🧪 Example Flow

**Input:** `"Buy 3 laptops under ₹50,000"`

```
ParseAgent       →  item: laptop, quantity: 3, budget: ₹50,000
DataAgent        →  fetches vendor options within budget
DecisionAgent    →  selects best vendor (price + delivery)
VerificationAgent→  validates decision against constraints
  [if failure]   →  Self-Healing Engine retries with alternative vendor
Audit Logger     →  all steps recorded with reasoning
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Gemini API key

### Installation

```bash
git clone https://github.com/anshulmodi07/AEOS.git
cd AEOS
npm install
```

### Configuration

```bash
cp .env.example .env
# Add your GEMINI_API_KEY to .env
```

### Run

```bash
npm start
```

Open `http://localhost:3000` to view the dashboard.

---

## 🔮 Roadmap

- [x] Multi-agent orchestration (Parse → Data → Decision → Verification)
- [x] JSON-driven dynamic workflow engine
- [x] Self-healing with retry and escalation
- [x] Full audit trail with per-step reasoning
- [x] Real-time frontend dashboard
- [ ] Persistent workflow state (database-backed)
- [ ] Human-in-the-loop escalation UI
- [ ] Webhook triggers for external system integration
- [ ] Role-based access for enterprise teams
- [ ] Pluggable LLM support (OpenAI, Claude, Gemini)

---

*AEOS — because enterprise workflows shouldn't need babysitting.*
