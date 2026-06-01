---
title: "2026 Cloud Solutions Report, #3: Security"
date: 2026-05-25
lang: en
summary: "Six platforms in a market reshaping itself — CrowdStrike, Palo Alto Networks, Wiz, Zscaler, Fortinet, SentinelOne."
tags: []
series: "chaesang-priv"
source: medium
externalUrl: https://chaesangjung.medium.com/2026-cloud-solutions-report-3-security-f364eaacf2bc
draft: false
---
# 2026 Cloud Solutions Report, #3: Security

[

![Chaesang Jung](/writing/2026-cloud-solutions-report-3-security/01.jpeg)

](/?source=post_page---byline--f364eaacf2bc---------------------------------------)

[Chaesang Jung](/?source=post_page---byline--f364eaacf2bc---------------------------------------)

22 min read

·

May 24, 2026

[

](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fvote%2Fp%2Ff364eaacf2bc&operation=register&redirect=https%3A%2F%2Fchaesangjung.medium.com%2F2026-cloud-solutions-report-3-security-f364eaacf2bc&user=Chaesang+Jung&userId=08a1a95ef732&source=---header_actions--f364eaacf2bc---------------------clap_footer------------------)

\--

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2Ff364eaacf2bc&operation=register&redirect=https%3A%2F%2Fchaesangjung.medium.com%2F2026-cloud-solutions-report-3-security-f364eaacf2bc&source=---header_actions--f364eaacf2bc---------------------bookmark_footer------------------)

[

](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2Fplans%3Fdimension%3Dpost_audio_button%26postId%3Df364eaacf2bc&operation=register&redirect=https%3A%2F%2Fchaesangjung.medium.com%2F2026-cloud-solutions-report-3-security-f364eaacf2bc&source=---header_actions--f364eaacf2bc---------------------post_audio_button------------------)

**Six platforms in a market reshaping itself — CrowdStrike, Palo Alto Networks, Wiz, Zscaler, Fortinet, SentinelOne.**

## **The attack surface stopped being servers and networks. It’s AI agents now — and they hold keys to everything.**

In early 2026, a massive security incident hit OpenClaw — the open-source AI agent framework that crossed 250,000 GitHub stars in 60 days, faster than React ever did. ClawHub, OpenClaw’s marketplace for external tool skills, was flooded with 340+ malicious packages. Internet-exposed instances numbered over 40,000 across 82 countries \[1\]. It was the first large-scale supply-chain attack on AI agent infrastructure. Around the same time, security researchers analyzed 7,000 MCP (Model Context Protocol) servers and found 36.7% carried SSRF (Server-Side Request Forgery) vulnerabilities \[2\]. MCP is the standard protocol AI agents use to connect to external databases, APIs, and file systems. The connectivity infrastructure itself had become the attack path. The target of security has expanded from servers and networks to AI agents and the infrastructure that links them.

The pace of attack has changed too. According to CrowdStrike’s 2026 Global Threat Report, the average time for attackers to complete lateral movement after initial breach is 29 minutes — 65% faster than the prior year. The fastest case observed was 27 seconds \[3\]. Attackers are already using generative AI to harvest credentials and generate malicious commands across 90+ organizations. The zero-click prompt injection (EchoLeak, CVE-2025–32711) targeting Microsoft 365 Copilot proved that enterprise data can be exfiltrated without a single user click \[4\]. In this era, defenders can’t win on speed without AI on their side. At the same time, non-human identities inside the enterprise — service accounts, API keys, AI agents — overwhelmingly outnumber human identities, and AI agent adoption is outpacing the security controls meant to govern them.

The market is restructuring. Google’s $32B acquisition of cloud security company Wiz, completed in March 2026, is the largest cybersecurity M&A in history and the largest acquisition in Google’s history \[5\]. CrowdStrike acquired a non-human identity security startup to prepare for the AI agent era. Palo Alto Networks is aggressively pursuing a platform consolidation strategy, bundling network, cloud, and SOC into one. The security solutions market sits in the middle of consolidation and reshape. Gartner projects global information security spend will reach $240B in 2026 \[6\]. Enterprises run an average of 50–70 security tools and still see no reduction in incidents. The question is no longer “what should we buy next?” It’s “starting from what we already have, how do we reduce and consolidate?”

The word “security” covers a wide territory. Endpoint security protects servers and PCs. Network security covers firewalls and VPNs. Physical security handles access control and surveillance. Data security and compliance cover personal information and regulatory frameworks. This report focuses on the cloud-infrastructure-and-workload domain, but extends into endpoint (CrowdStrike, SentinelOne) and network (Zscaler, Fortinet) where they intersect with cloud.

The structure: three macro issues shaping 2026 cloud security, a look at the built-in security CSPs (AWS, Azure, GCP) already provide and what gaps remain, and then a deep comparison of six specialist vendors — CrowdStrike, Palo Alto Networks, Wiz, Zscaler, Fortinet, SentinelOne — that fill those gaps. The intent isn’t to be a buying guide. It’s to provide the foundation for the architectural decisions security in the AI era now demands.

## **Three Forces Shaping 2026 Cloud Security**

Before going vendor by vendor, three macro trends frame the market. Where the old comparison was “which tool does X best?”, the 2026 comparison is “what structure do we want to consolidate around?” — and “what role does AI play, on offense and defense?”

### **CNAPP: The Grand Unification of Cloud Security**

Through the early 2020s, cloud security was fragmented by domain. CSPM (Cloud Security Posture Management) found cloud misconfigurations. CWPP (Cloud Workload Protection Platform) protected workloads. CIEM (Cloud Infrastructure Entitlement Management) governed identity permissions. IaC scanning checked infrastructure code. DSPM (Data Security Posture Management) handled data posture. SCA (Software Composition Analysis) tracked open-source vulnerabilities. Six consoles, six alert channels, six invoices. Security teams were so busy operating tools that they couldn’t actually do security. A paradox.

CNAPP (Cloud-Native Application Protection Platform) consolidates all of this into one platform, trying to answer a single question: **_is there a hole open in our cloud?_** Gartner warns that “60% of organizations will fail to achieve their Zero Trust goals without adopting an integrated CNAPP” \[7\].

The hottest debate inside the CNAPP market is the architecture question: agent versus agentless. The representative agentless vendor, Wiz, analyzes cloud APIs and disk snapshots to deliver full-environment visibility within 30 minutes. Nothing to install — no friction. But a snapshot is yesterday’s state. It can’t respond to runtime threats happening inside a container right now. On the other side, CrowdStrike deploys lightweight agents into servers and containers and detects and blocks runtime threats in real time. But in July 2024, a single Falcon sensor update from CrowdStrike caused blue-screens on 8.5 million Windows systems worldwide \[8\]. The security tool itself paralyzed the systems it was meant to protect — a paradox the entire world watched in real time. Palo Alto Networks takes a hybrid approach offering both, but the integration completeness of its many acquisitions remains an open question. The right framing isn’t “which approach is correct.” It’s the order: first achieve visibility (agentless), then add runtime protection (agent).

There’s a structural event reshaping the market too. Google’s Wiz acquisition (mentioned in the opening) is shaking the CNAPP landscape. It’s both Google Cloud’s declaration that it intends to internalize security as core competitive capability, and an unease for multi-cloud customers: **_will Wiz continue to support AWS and Azure as fairly as before?_**

### **AI SOC: The End of the “Human Watches Alerts” Era**

The reality of Security Operations Centers (SOCs) is grim. Over 4,000 alerts pour in per day on average, with a significant share burned on false positives \[9\]. The global cybersecurity workforce shortage is 3.4 million \[10\] — finding skilled analysts is hard, and the analysts you do find burn out drowning in alert volume. With attacker lateral movement times averaging 29 minutes and dropping to 27 seconds at the extreme, no human-reads-each-alert-and-decides structure can keep up.

In 2026, AI is restructuring this. SOCs that adopted AI report cutting false positives by 80% and reducing response time by 60%. When a breach happens, time-to-containment shrinks by 108 days \[11\]. The key isn’t simple pattern matching. It’s the transition from a structure where Tier 1 analysts performed alert triage, initial analysis, evidence collection, and correlation manually, to one where AI does all of that autonomously and human analysts focus only on the high-importance items AI surfaces. The analyst’s role shifts from “the person who watches alerts” to “the person who validates AI’s judgments.”

Each vendor’s AI SOC approach is distinct. CrowdStrike’s Charlotte AI focuses on autonomous investigation workflows. SentinelOne’s Purple AI takes an open approach by analyzing competitors’ data as well \[12\]. Palo Alto’s Cortex XSIAM reinvents SIEM itself with AI. Each vendor’s approach and results are covered in the vendor analysis below.

Expanded autonomy means new risk. As №1 (Observability) covered, AI hallucinations connected to automated response can wrongly quarantine healthy production servers or apply incorrect firewall policies, causing large-scale service outages. “Safer AI” matters as much as “smarter AI.” Which platform offers more automation matters less than which platform offers more **_trustworthy_** automation. That’s the line separating mature platforms from less mature ones in 2026 security.

### **Zero Trust and Non-Human Identity: A World Without Perimeters**

The premise that “you’re safe inside the corporate network” — the trusted-inside model — has been disproven. The 2024 Snowflake breach exposed data across many enterprise customers. The cause wasn’t sophisticated hacking. It was credentials stolen by infostealer malware combined with missing MFA (multi-factor authentication) — fundamentals failing the basic test \[14\]. The majority of compromised accounts didn’t have MFA enabled. In a structure where VPN access pretends “you’re inside” and the whole interior opens up, one breach means no way to stop lateral movement.

Zero Trust flips this. “Trust no one. Verify every time.” Every access is verified by identity, device, and context. In 2026 the question isn’t whether to adopt Zero Trust — it’s how maturely you’ve implemented it. SASE (Secure Access Service Edge) is the architecture that delivers network (SD-WAN) and security (SWG, ZTNA, CASB) together from the cloud. Gartner projects 60% of new SD-WAN purchases in 2026 will consolidate into single-vendor SASE \[15\]. Here too the debate continues: single vendor (Fortinet, Palo Alto) versus best-of-breed combination (Zscaler + SD-WAN partner).

The new 2026 challenge is the explosion of non-human identities. Zero Trust has historically focused on verifying **_human_** access. But AI agents, service accounts, and API keys now vastly outnumber human identities inside enterprises \[16\]. The situation has completely changed. 80.9% of technical teams are already testing or operating AI agents, but only 21.9% treat them as independent identity subjects. 45.6% still authenticate agents with shared API keys \[17\]. The equivalent of every employee in the company sharing one access badge.

That’s why CrowdStrike acquired non-human identity security startup SGNL for $740M in January 2026 \[18\]. SGNL’s technology dynamically grants and revokes AI agents’ and service accounts’ access permissions based on real-time context — making the judgment “is it OK for this AI agent to access this data **_right now_**?” on every request. Cloud Security Alliance (CSA) published the Agentic Trust Framework in February 2026, presenting a Zero Trust governance standard for AI agents \[19\]. Real-time control of what AI agents can access is the next frontier of Zero Trust.

## **Built-in Cloud Security: What You Already Have**

Before discussing specialist vendors, the right starting question is: **_what does the cloud we already use have built in?_** Most enterprises already run AWS, Azure, or GCP — often more than one. All three CSPs provide security capabilities natively. Naming differs; the role is the same. Before considering additional spend on specialist vendors, audit what you already have.

<figure class="qa qb qc qd qe qf px py paragraph-image"><div role="button" tabindex="0" class="qg qh fx qi be qj"><span class="gc gd ge aj gf gg gh fp gi speechify-ignore">Press enter or click to view image in full size</span><div class="px py pz"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*TXDjNCutbGaUnX_vgXgDXQ.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*TXDjNCutbGaUnX_vgXgDXQ.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*TXDjNCutbGaUnX_vgXgDXQ.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*TXDjNCutbGaUnX_vgXgDXQ.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*TXDjNCutbGaUnX_vgXgDXQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TXDjNCutbGaUnX_vgXgDXQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TXDjNCutbGaUnX_vgXgDXQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*TXDjNCutbGaUnX_vgXgDXQ.png 640w, https://miro.medium.com/v2/resize:fit:720/1*TXDjNCutbGaUnX_vgXgDXQ.png 720w, https://miro.medium.com/v2/resize:fit:750/1*TXDjNCutbGaUnX_vgXgDXQ.png 750w, https://miro.medium.com/v2/resize:fit:786/1*TXDjNCutbGaUnX_vgXgDXQ.png 786w, https://miro.medium.com/v2/resize:fit:828/1*TXDjNCutbGaUnX_vgXgDXQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*TXDjNCutbGaUnX_vgXgDXQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*TXDjNCutbGaUnX_vgXgDXQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="be mn qk i" width="700" height="271" loading="eager" role="presentation" src="/writing/2026-cloud-solutions-report-3-security/02.png"></picture></div></div><figcaption class="ql fk qm px py qn qo bc b bd v dz" data-selectable-paragraph=""><strong class="bc og">Table 1: Built-in security capabilities by CSP</strong></figcaption></figure>

The strengths of built-in CSP security are real. Basic security posture comes at zero or low additional cost. Deep visibility down to the API level is unmatched within each provider’s own cloud. Compliance framework mappings (SOC 2, ISO 27001, ISMS-P, etc.) come as standard, which is enough to be a compliance starting point.

But all three CSPs share common limits, and those limits are precisely why specialist vendors exist. First, no attack-path analysis. CSP posture tools find misconfigurations but can’t judge “does this vulnerability actually enable a real penetration path?” — which is why CNAPPs (Wiz, Prisma Cloud) exist. Second, endpoint and runtime protection is missing. The cloud infrastructure layer is observed, but processes inside containers and runtime threats on servers are handed off to EDR/CWPP vendors (CrowdStrike, SentinelOne). Third, multi-cloud visibility is structurally limited. Security Hub manages AWS only; Defender manages Azure only. For an enterprise running both, there’s no single pane of glass. Fourth, VPN replacement and end-to-end Zero Trust are outside the CSPs’ scope — that’s where SASE vendors like Zscaler and Fortinet operate. And fifth, AI-SPM (AI Security Posture Management) — the security posture for AI workloads — doesn’t yet exist natively in any CSP.

CSP built-in security is the “base layer.” Almost no enterprise can stop there. But ignoring it and adopting only specialist vendors is wasteful. Use built-in security as the foundation, then fill the five gaps above with specialists. That’s the realistic approach. The next section walks through those six specialists one at a time.

## **The Six Vendors: A Deep Look**

This section examines the six vendors leading the 2026 cloud security market. Rather than feature lists, the focus is on what security philosophy each vendor implements in the AI era, and the friction points the field reports repeatedly. Three evaluation axes matter in 2026: does the vendor use AI to strengthen security (AI for Security), does it protect AI workloads (Security for AI), and does it govern AI agent access (AI Agent Governance)? How each vendor positions on these three axes determines future competitive standing.

### **CrowdStrike: The Single-Agent King, and the Long Trust Rebuild**

CrowdStrike dominates the endpoint security market and is recovering trust after the unprecedented global outage of 2024. Its threat intelligence depth and agent-based platform breadth remain unmatched, and it’s opening a new frontier in non-human identity security for the AI agent era.

**Core strength: depth of threat intelligence.** CrowdStrike’s integrated platform Falcon is built on “one lightweight agent, one console.” It consolidates EDR (Endpoint Detection and Response), CWPP, CIEM, and DLP into a single agent — reducing operational complexity. But CrowdStrike’s real differentiation isn’t feature breadth. It’s threat intelligence depth. CrowdStrike tracks 170+ attack groups by name and motivation, collecting trillions of security events per week. That field-grounded detection rule base and data scale becomes the source for AI training — creating an entry barrier competitors struggle to match.

**The AI bet.** CrowdStrike’s AI strategy advances on three axes simultaneously. First, AI for security: Charlotte AI. Ask in natural language — **_”Have there been unusual admin-privilege logins in the last 48 hours?”_** — and threat hunting results return immediately. When an incident occurs, Charlotte automatically generates a timeline. Agentic Workflows, introduced in 2025, runs detection → investigation → response autonomously as AI. In practice, utility has been proven in threat hunting and incident summary; complex autonomous response is still early-stage. Second, security for AI: Falcon Cloud Security added AI workload visibility, monitoring permissions, data flows, and model access patterns in AI training and inference pipelines. Third, AI agent governance: SGNL acquisition (covered in the Zero Trust section) is the core of this strategy — dynamically managing non-human identity access rights based on real-time context.

**UX: Threat Graph.** CrowdStrike’s Threat Graph visualizes connections between endpoints, processes, networks, and identities in a real-time graph. Click on one suspicious process, and the graph unfolds: which networks it connected to, which files it generated, which identity it ran under — all as connecting lines. The attack chain can be traced at a glance. The interface is a powerful weapon for security analysts but, similar to Datadog’s service map covered in №1, can feel complex to non-technical executives.

**Where it hurts.** The July 2024 global outage (covered in the CNAPP section) remains CrowdStrike’s largest shadow. The incident etched the double-edged nature of the single-agent model into global awareness. CrowdStrike responded with staged rollouts, stronger content validation, and expanded kernel independence — but trust recovery is still in progress. The full-platform deployment cost — running into the hundreds of thousands of dollars annually — is a real entry barrier for smaller companies. Versus Wiz, agentless visibility and attack-path analysis depth are reportedly weaker. And smoothly integrating successive acquisitions (SGNL, Bionic, Flow Security) remains an open task.

### **Palo Alto Networks: The Widest Portfolio and the Platform Consolidation Bet**

Palo Alto Networks holds the widest portfolio in the security market. It’s the only vendor that covers network security, cloud security, and SOC entirely with its own products. “Everything you need for security from one vendor” — the platform consolidation strategy — is pursued more aggressively at Palo Alto than anywhere in the industry.

**Core strength: three pillars.** The portfolio splits into three independent platforms. Strata is the network security axis — #1 in next-generation firewall (NGFW) market share, including Prisma SASE. Prisma Cloud is the CNAPP axis, integrating CSPM, CWPP, CIEM, and DSPM. Cortex is the SOC axis, covering AI-based next-generation SIEM (XSIAM), XDR, and SOAR. No other vendor owns all three. The IBM QRadar SaaS customer absorption strengthened the SIEM market position further.

**The AI bet.** The most notable product in Palo Alto’s AI strategy is Cortex XSIAM. Traditional SIEM stored logs and triggered rule-based alerts. XSIAM reinvents SIEM itself with AI. The moment data enters, it’s automatically parsed, related alerts are grouped, AI performs autonomous investigation, and even response is automated. By Q2 FY2026, XSIAM had grown into a substantial ARR contributor with a customer base in the hundreds \[13\]. On AI workload security, Prisma Cloud added AI-SPM (AI Security Posture Management) — automatically evaluating the security posture of AI/ML models and pipelines. It detects training data exposure, model theft risk, and similar threats. Prisma AIRS, which handles this capability, grew its customer base sharply quarter-over-quarter \[13\]. On AI agent governance, Palo Alto applies Precision AI brand capabilities — anomaly detection on AI agents’ API call patterns, network segmentation extended to AI workloads.

**UX: Prisma Cloud dashboard.** The Prisma Cloud dashboard, fully redesigned in the 2024 “Darwin” release, significantly strengthened attack-path analysis visualization. Connections and vulnerabilities across cloud assets render as graphs, and internet-exposed attack paths are presented by priority. However, integrating 3–4 acquired products (Twistlock, Bridgecrew, Cider Security, etc.) into one console has left UX consistency as an open challenge.

**Where it hurts.** The most frequent criticism of Prisma Cloud is the UX feel — “as if 3–4 acquired products were jammed into one console.” CSPM alert noise also draws complaints. The system reports thousands of misconfigurations, but the distinction between truly dangerous and merely cosmetic isn’t intuitive. Q2 FY2026 results exposed margin pressure from the platform consolidation strategy and a short-term revenue guidance reduction \[13\]. And the connection between threats Cortex detects and assets Prisma Cloud manages — the integration across the three platforms — is “not intuitive,” a recurring complaint.

### **Wiz: The Agentless Innovator, Now Google’s Weapon**

Wiz, founded in 2020, has grown faster in cloud security than any company in the market. A clear technical philosophy (agentless architecture), intuitive UX, and the fastest growth in SaaS history (ARR $1B+) combined to make it Google’s largest-ever acquisition (covered in the opening).

**Core strength: Security Graph and the aesthetics of agentless.** Wiz’s core is its 100% agentless architecture. By analyzing cloud APIs and disk snapshots, full cloud environment visibility is delivered in under 30 minutes — without installing anything. No installation means no friction with operations teams and no risk of agent conflicts. Wiz’s killer feature, Security Graph, connects cloud resources, network paths, identity permissions, software vulnerabilities, and sensitive data locations into a single graph. It doesn’t simply tell you “this VM has a vulnerability.” It shows you the attack path: **“_This vulnerable VM is exposed to the internet, connected to an over-permissioned service account that can access sensitive data.”_** Instead of tens of thousands of individual alerts, the actually-attackable paths are prioritized.

**The AI bet.** Wiz’s AI strategy goes three directions. First, AskAI enables natural language queries on top of Security Graph. “**_How many internet-exposed assets are affected by Log4Shell?”_** — Wiz traverses the graph and answers immediately. Security staff who don’t know complex query languages can still explore the data. Second, AI-SPM automatically evaluates the security posture of AI/ML pipelines (SageMaker, Vertex AI, Azure ML) in an agentless manner. Where AI model training data is stored, who can access it, whether model inference endpoints are exposed to the internet — Wiz scans all of it automatically. Wiz productized this area first. Third, the Google acquisition payoff. When Google Cloud’s AI infrastructure (Vertex AI, TPUs) combines with Wiz’s security visibility, “build and secure AI” becomes a single platform offering. The strategic intent is clear: Google Cloud, perceived as weaker on security versus AWS and Azure, flips that perception in a single move via Wiz.

**UX: Security Graph.** Wiz’s Security Graph — connecting attack paths as a visual graph — is widely praised as “the cleanest UX in CNAPP.” It’s designed so non-technical executives can grasp risk immediately. A CISO presenting security status to the board can explain everything with a single graph — a factor that has accelerated adoption.

**Where it hurts.** The strength of agentless is also a structural limit. Snapshot-based analysis shows yesterday’s state. Against malicious processes executing inside containers right now or memory-resident attacks, Wiz is weaker than CrowdStrike or SentinelOne. Wiz also draws criticism as the most expensive CNAPP on the market. And post-Google-acquisition uncertainty weighs on multi-cloud customers. Wiz declared it will continue to support AWS and Azure environments, and preserve the brand and multi-cloud support post-acquisition, but the possibility that deeper integration and benefits will accrue to Google Cloud environments over the long term can’t be ruled out.

### **Zscaler: The Zero Trust Purist**

Zscaler was designed from day one for Zero Trust only. Not a firewall vendor that extended into cloud. Not a cloud company that added security. Zscaler built its entire architecture on a single principle: every traffic must be verified. That purism is both strength and limit.

## Get Chaesang Jung’s stories in your inbox

Join Medium for free to get updates from this writer.

Remember me for faster sign in

**Core strength: the world’s largest inline security cloud.** Zscaler’s Zero Trust Exchange processes 400 billion+ transactions per day — the world’s largest inline security cloud. ZIA (Zscaler Internet Access) protects internet access via Secure Web Gateway (SWG). ZPA (Zscaler Private Access) provides VPN-less access to internal apps via ZTNA (Zero Trust Network Access). ZDX (Zscaler Digital Experience) monitors the user’s digital experience. The three combined deliver the cleanest architecture for fully replacing VPN. Gartner’s SSE (Security Service Edge) Magic Quadrant named Zscaler a leader for four consecutive years \[20\], and Zscaler holds proven capability at inspecting SSL/TLS encrypted traffic at scale.

**The AI bet.** Zscaler’s AI strategy concentrates on network security. Copilot manages security policy in natural language. Breach Predictor predicts breaches before they happen. Auto-Classification automatically classifies data and applies DLP policy. The most unique positioning is the role as gatekeeper for AI agent traffic. AI agent-generated API calls are inspected inline, and 400 billion daily transactions become the training source for AI anomaly detection. Seeking Alpha called Zscaler “the tollbooth for AI agents” \[21\] — the checkpoint AI agents must pass through to communicate externally. That said, AI assistant innovation comparable to Charlotte AI or Purple AI is relatively understated. Zscaler focuses on applying AI to network security rather than building an AI SOC.

**UX: Risk360.** Risk360 scores enterprise-wide risk and presents it as a single view. Domain-level scores and trends — cyber risk, data protection, access security — let executives grasp posture at a glance. Useful for board reporting.

**Where it hurts.** Zscaler’s biggest weakness: no SD-WAN. That makes “true single-vendor SASE” hard to claim. SASE is the convergence of security (SSE) and network (SD-WAN), and Zscaler holds only the security half — meaning it needs SD-WAN partners. The architecture of proxying all traffic through Zscaler creates reported latency in certain regions and apps. Repeated complaints surface about certificate errors during SSL inspection in fintech and healthcare apps. CNAPP capability is limited versus Wiz and CrowdStrike, so Zscaler alone won’t solve cloud workload security.

### **Fortinet: The Hardware-Accelerated Value Champion**

Fortinet carries on-premises and network security DNA. The combination of hardware-driven price-performance with custom-designed chips, and the integrated Security Fabric covering firewall, SD-WAN, SASE, and OT (Operational Technology — the technology controlling industrial equipment like factories and power plants) security, is its strength. Weaker on cloud-native security, but in hybrid environments and manufacturing/energy sectors, it has irreplaceable presence.

**Core strength: chip-level price-performance.** Fortinet’s most distinct differentiation is the in-house designed FortiASIC chip. Hardware acceleration delivers up to 10x the throughput of software-based firewalls at substantially lower cost. Fortinet ships the most firewalls globally and serves 775,000+ customers — the largest customer base in the industry. FortiSASE integrates self-built SD-WAN + NGFW + SWG + CASB + ZTNA as “true single-vendor SASE” — directly contrasting with Zscaler, which needs an SD-WAN partner. On OT/IoT security, Fortinet holds an unmatched position in ICS/SCADA security for manufacturing and energy — practically no competitor can substitute for it in this space.

**The AI bet.** Fortinet’s AI strategy concentrates at the network layer. FortiAI analyzes network traffic with AI to detect zero-day threats. Security Fabric links firewall detection to automated endpoint isolation as a chained response. The combination of OT/IoT and AI is also notable. The era of AI inference running on industrial equipment in manufacturing and energy sites is opening, and Fortinet, as the OT security leader, positions itself to protect edge AI workloads at the network layer. However, AI-SPM capabilities for cloud-native AI workloads (SageMaker, Vertex AI, etc.) are weak.

**UX: FortiManager.** FortiManager is the interface for centrally managing, deploying, and monitoring policies across thousands of FortiGate firewalls. It demonstrates real strength in large-scale distributed network operations.

**Where it hurts.** Fortinet’s biggest weakness is repeated exposure of security vulnerabilities in the products themselves. FortiJump (CVE-2024–47575) is an unauthenticated remote code execution vulnerability in FortiManager. The vulnerability was actively exploited from mid-2024, with configuration data exfiltrated from affected FortiManager servers and their managed devices \[22\]. Government and critical infrastructure were primary targets. The security appliance itself becomes the attack surface — a real paradox. The CLI-centric configuration approach draws reviews that say “operating Fortinet without being a Fortinet expert is hard.” And cloud-native security capability lags CNAPP competitors. The strategic question for Fortinet over the long term is how its on-premises-and-network DNA evolves in a cloud-native era.

### **SentinelOne: AI-Native DNA and the Open Ecosystem**

SentinelOne embedded AI in its core architecture from founding. Where other vendors add AI to existing products, SentinelOne designed the AI-based autonomous detection-isolation-recovery structure from the start. In 2026, SentinelOne pursues philosophical differentiation through “open ecosystem” — positioning itself as the AI analysis layer in multi-vendor environments.

**Core strength: AI-autonomous endpoint and open XDR.** SentinelOne’s integrated platform Singularity is designed so the agent can independently judge and respond to threats on the endpoint without cloud connectivity. It records top-tier detection rates in MITRE ATT&CK evaluations, and price competitiveness versus CrowdStrike — industry shorthand: “90% of the features at 70% of the cost” — is a real strength. PingSafe acquisition (2024) brought CNAPP into the portfolio. Open XDR philosophy actively absorbs third-party data sources.

**The AI bet.** The most notable element in SentinelOne’s AI strategy is Purple AI’s evolution. Purple AI has expanded its analysis scope to cover data from Zscaler, Okta, Palo Alto Networks, Proofpoint, Fortinet, and Microsoft \[12\]. Where other vendors’ AI assistants analyze only their own data, Purple AI normalizes third-party data via OCSF (Open Cybersecurity Schema Framework) and queries it immediately. The “open AI SOC” positioning is distinctive. On AI workload security, AI workload scanning was added to PingSafe-based CNAPP, but it’s still early. SentinelOne’s most interesting differentiation is philosophical: **“_We won’t lock you into our platform.”_** The vendor acknowledges that no single vendor can cover all of security in the AI era, and takes the strategy of layering itself as an AI analysis tier on top of other vendors’ products. That’s the polar opposite of Palo Alto’s “everything inside us” strategy.

**UX: Singularity console.** The Singularity console visualizes events from endpoints, cloud, and identity as a single timeline. When a threat reaches an endpoint, what processes it spawned, what networks it tried to access — all traceable in time order.

**Where it hurts.** CNAPP entry is still early. Feature depth versus Wiz, CrowdStrike, and Palo Alto trails in the consensus view. The gap in attack-path analysis and AI-SPM is real. Enterprise brand recognition versus CrowdStrike and Palo Alto is weaker, and the absence of a self-built SIEM makes integration with Splunk or Microsoft Sentinel essentially required. Paradoxically, the absence of a self-built SIEM, combined with Purple AI’s open strategy, becomes a lower barrier for enterprises already using Splunk or other SIEMs.

## **A Closing Note for CIOs and CTOs**

Security strategy in 2026 isn’t a tool purchase. It’s an exercise in designing the organization’s security architecture. The more important question isn’t **_what should we adopt?_** It’s **_in what order, in what combination, to what degree of automation?_** Three recommendations follow.

### **1\. Respect the deployment order — close the holes, then watch, then change access.**

After laying the foundation with CSP built-in security, deploy specialist vendors in order. Start with CNAPP to surface misconfigurations and attack paths. Adding more tools while you don’t even know whether a hole is open in your cloud is inefficient. Once holes are closed, deploy EDR/XDR and AI SOC for runtime protection and automated operations. Last, deploy Zero Trust and SASE to replace VPN — extending the access model change all the way to non-human identities. The order rests on the principle of “most urgent risk first.”

### **2\. Choose vendors by what risk you most want to stop — there is no perfect single vendor.**

As the six vendor analyses confirmed, no single vendor perfectly covers every domain. The starting point isn’t **_which vendor is best?_** It’s **_what risk does our organization most need to stop?_**

<figure class="qa qb qc qd qe qf px py paragraph-image"><div role="button" tabindex="0" class="qg qh fx qi be qj"><span class="gc gd ge aj gf gg gh fp gi speechify-ignore">Press enter or click to view image in full size</span><div class="px py qp"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*2a9nNOR_l7utSpfK74sOkQ.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*2a9nNOR_l7utSpfK74sOkQ.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*2a9nNOR_l7utSpfK74sOkQ.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*2a9nNOR_l7utSpfK74sOkQ.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*2a9nNOR_l7utSpfK74sOkQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*2a9nNOR_l7utSpfK74sOkQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2a9nNOR_l7utSpfK74sOkQ.png 1400w" sizes="auto, (min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*2a9nNOR_l7utSpfK74sOkQ.png 640w, https://miro.medium.com/v2/resize:fit:720/1*2a9nNOR_l7utSpfK74sOkQ.png 720w, https://miro.medium.com/v2/resize:fit:750/1*2a9nNOR_l7utSpfK74sOkQ.png 750w, https://miro.medium.com/v2/resize:fit:786/1*2a9nNOR_l7utSpfK74sOkQ.png 786w, https://miro.medium.com/v2/resize:fit:828/1*2a9nNOR_l7utSpfK74sOkQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*2a9nNOR_l7utSpfK74sOkQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*2a9nNOR_l7utSpfK74sOkQ.png 1400w" sizes="auto, (min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="be mn qk i" width="700" height="268" loading="lazy" role="presentation" src="/writing/2026-cloud-solutions-report-3-security/03.png"></picture></div></div><figcaption class="ql fk qm px py qn qo bc b bd v dz" data-selectable-paragraph=""><strong class="bc og">Table 2: Security capabilities by risk type, and vendor guide</strong></figcaption></figure>

The realistic combination is CSP built-in security + 3 to 4 specialist vendors. The starting point is picking your top 2 to 3 risks from the table above and evaluating the matching vendors first. Trying to solve every risk at once just creates a different kind of complexity.

### **3\. Set explicit trust boundaries for AI.**

Vendors market AI as if it resolves security operations on its own. The 2026 reality is that 100% autonomous operations is still dangerous. As №1 (Observability) emphasized, let AI analyze and propose, but grant execution rights in graduated steps. Low-risk tasks like clearing a cache or restarting a specific pod — fine to delegate to AI. Database schema changes or firewall policy changes must go through human engineer approval, encoded into the workflow. Security incidents caused by AI hallucination can do irreversible damage.

The winner in 2026 isn’t the organization with the most security tools. It’s the organization that builds on CSP built-in security as foundation, consolidates around 3 to 5 core platforms, and still manages single-vendor dependency risk. Security complexity itself is risk — that’s the lesson from the 2024 CrowdStrike incident. A leader’s job isn’t to buy more tools. It’s to set the design principles and operational discipline that align tools with purpose.

## **\## References**

\[1\] Particula, “OpenClaw Hit 250K GitHub Stars — Then 20% of Its Skills Were Found Malicious.” [https://particula.tech/blog/openclaw-security-crisis-malicious-ai-agents](https://particula.tech/blog/openclaw-security-crisis-malicious-ai-agents)

\[2\] Dark Reading, “Microsoft & Anthropic MCP Servers at Risk of RCE, Cloud Takeovers.” [https://www.darkreading.com/application-security/microsoft-anthropic-mcp-servers-risk-takeovers](https://www.darkreading.com/application-security/microsoft-anthropic-mcp-servers-risk-takeovers)

\[3\] CrowdStrike, “2026 Global Threat Report.” [https://www.crowdstrike.com/en-us/press-releases/2026-crowdstrike-global-threat-report/](https://www.crowdstrike.com/en-us/press-releases/2026-crowdstrike-global-threat-report/)

\[4\] HackTheBox, “Inside CVE-2025–32711 (EchoLeak): Prompt injection meets AI exfiltration.” [https://www.hackthebox.com/blog/cve-2025-32711-echoleak-copilot-vulnerability](https://www.hackthebox.com/blog/cve-2025-32711-echoleak-copilot-vulnerability)

\[5\] TechCrunch, “Google wraps up $32B acquisition of cloud cybersecurity startup Wiz,” March 11, 2026. [https://techcrunch.com/2026/03/11/google-completes-32b-acquisition-of-wiz/](https://techcrunch.com/2026/03/11/google-completes-32b-acquisition-of-wiz/)

\[6\] Gartner, “Forecasts Worldwide End-User Spending on Information Security to Total $213 Billion in 2025.” [https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025](https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025)

\[7\] Gartner, “Market Guide for Cloud-Native Application Protection Platforms,” 2025. [https://www.gartner.com/en/documents/5605291](https://www.gartner.com/en/documents/5605291)

\[8\] CNN, “CrowdStrike outage: We finally know what caused it — and how much it cost.” [https://edition.cnn.com/2024/07/24/tech/crowdstrike-outage-cost-cause](https://edition.cnn.com/2024/07/24/tech/crowdstrike-outage-cost-cause)

\[9\] Help Net Security, “Why SOCs are moving toward autonomous security operations in 2026.” [https://www.helpnetsecurity.com/2026/02/24/socs-autonomous-security-operations-strategies/](https://www.helpnetsecurity.com/2026/02/24/socs-autonomous-security-operations-strategies/)

\[10\] ISC², “2024 Cybersecurity Workforce Study” — global cybersecurity workforce shortage of approximately 3.4 million.

\[11\] IBM, “Cost of a Data Breach Report 2025.”

\[12\] SentinelOne, “SentinelOne Brings the Power of Purple AI to Zscaler, Okta, Palo Alto Networks, Proofpoint, Fortinet and Microsoft Data,” January 2026. [https://www.sentinelone.com/press/sentinelone-brings-the-power-of-purple-ai-to-zscaler-okta-palo-alto-networks-proofpoint-fortinet-and-microsoft-data/](https://www.sentinelone.com/press/sentinelone-brings-the-power-of-purple-ai-to-zscaler-okta-palo-alto-networks-proofpoint-fortinet-and-microsoft-data/)

\[13\] Palo Alto Networks, “Fiscal Second Quarter 2026 Financial Results.” [https://www.prnewswire.com/news-releases/palo-alto-networks-reports-fiscal-second-quarter-2026-financial-results-302689871.html](https://www.prnewswire.com/news-releases/palo-alto-networks-reports-fiscal-second-quarter-2026-financial-results-302689871.html)

\[14\] Cloud Security Alliance, “Unpacking the 2024 Snowflake Data Breach.” [https://cloudsecurityalliance.org/blog/2025/05/07/unpacking-the-2024-snowflake-data-breach](https://cloudsecurityalliance.org/blog/2025/05/07/unpacking-the-2024-snowflake-data-breach)

\[15\] Gartner, “Best SASE Platforms Reviews 2026.” [https://www.gartner.com/reviews/market/single-vendor-sase](https://www.gartner.com/reviews/market/single-vendor-sase)

\[16\] The Hacker News, “The Future of Cybersecurity Includes Non-Human Employees,” January 2026. [https://thehackernews.com/2026/01/the-future-of-cybersecurity-includes.html](https://thehackernews.com/2026/01/the-future-of-cybersecurity-includes.html)

\[17\] Gravitee, “State of AI Agent Security 2026 Report.” [https://www.gravitee.io/blog/state-of-ai-agent-security-2026-report-when-adoption-outpaces-control](https://www.gravitee.io/blog/state-of-ai-agent-security-2026-report-when-adoption-outpaces-control)

\[18\] CNBC, “CrowdStrike buys identity security startup SGNL for $740 million,” January 8, 2026. [https://www.cnbc.com/2026/01/08/crowdstrike-ai-cybersecurity-sgnl-acquisition.html](https://www.cnbc.com/2026/01/08/crowdstrike-ai-cybersecurity-sgnl-acquisition.html)

\[19\] Cloud Security Alliance, “Agentic Trust Framework: Zero Trust Governance for AI Agents,” February 2026. [https://cloudsecurityalliance.org/blog/2026/02/02/the-agentic-trust-framework-zero-trust-governance-for-ai-agents](https://cloudsecurityalliance.org/blog/2026/02/02/the-agentic-trust-framework-zero-trust-governance-for-ai-agents)

\[20\] Gartner, “Magic Quadrant for Security Service Edge.” [https://www.zscaler.com/gartner-magic-quadrant-security-service-edge-sse](https://www.zscaler.com/gartner-magic-quadrant-security-service-edge-sse)

\[21\] Seeking Alpha, “Zscaler Stock: A Tollbooth for AI Agents.” [https://seekingalpha.com/article/4882615-zscaler-stock-tollbooth-for-ai-agents](https://seekingalpha.com/article/4882615-zscaler-stock-tollbooth-for-ai-agents)

\[22\] Bishop Fox, “A Deeper Look at FortiJump (CVE-2024–47575).” [https://bishopfox.com/blog/a-look-at-fortijump-cve-2024-47575](https://bishopfox.com/blog/a-look-at-fortijump-cve-2024-47575)

_Part of the_ **2026 Cloud Solutions Report** _— an ongoing series on the 2026 cloud tooling landscape._ [_See the full series →_](https://medium.com/@chaesangjung/list/2026-cloud-solutions-report-8f6ce78f6d5b)

**_\*Originally published in Korean by NIA Digital Service Issue Report, March 2026. Written as Distinguished Engineer at MegazoneCloud._**

**_Korean version on Brunch:_** [**_brunch.co.kr/@chaesang/163_**](https://brunch.co.kr/@chaesang/163)
