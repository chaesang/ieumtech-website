---
title: "From Assistant to Agent: The Long Road for Agentic Commerce"
date: 2026-05-26
lang: en
summary: "Part 1. The Protocol Wars: The Language of Assistants vs. the Language of Agents"
tags: []
series: "chaesang-it-26"
source: medium
externalUrl: https://chaesangjung.medium.com/from-assistant-to-agent-the-long-road-for-agentic-commerce-8a3457cef23c
draft: false
---
# **From Assistant to Agent: The Long Road for Agentic Commerce**

[

![Chaesang Jung](/writing/from-assistant-to-agent-the-long-road-for-agentic-commerce/01.jpeg)

](/?source=post_page---byline--8a3457cef23c---------------------------------------)

[Chaesang Jung](/?source=post_page---byline--8a3457cef23c---------------------------------------)

20 min read

·

6 days ago

[

](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fvote%2Fp%2F8a3457cef23c&operation=register&redirect=https%3A%2F%2Fchaesangjung.medium.com%2Ffrom-assistant-to-agent-the-long-road-for-agentic-commerce-8a3457cef23c&user=Chaesang+Jung&userId=08a1a95ef732&source=---header_actions--8a3457cef23c---------------------clap_footer------------------)

\--

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F8a3457cef23c&operation=register&redirect=https%3A%2F%2Fchaesangjung.medium.com%2Ffrom-assistant-to-agent-the-long-road-for-agentic-commerce-8a3457cef23c&source=---header_actions--8a3457cef23c---------------------bookmark_footer------------------)

[

](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2Fplans%3Fdimension%3Dpost_audio_button%26postId%3D8a3457cef23c&operation=register&redirect=https%3A%2F%2Fchaesangjung.medium.com%2Ffrom-assistant-to-agent-the-long-road-for-agentic-commerce-8a3457cef23c&source=---header_actions--8a3457cef23c---------------------post_audio_button------------------)

## **Part 1. The Protocol Wars: The Language of Assistants vs. the Language of Agents**

For an AI agent to buy something from an online store, the agent and the store need a shared language. In the 1990s, web browsers could display pages from any server because of HTML — a standard language. AI agents need their own standard protocols.

### **ACP — The Language an Agent Uses to Talk to a Store**

In April 2025, OpenAI and Stripe jointly announced ACP (Agent Commerce Protocol) — a standard language that lets an agent say to an online store, _Do you have this product? What’s the price? I’d like to order._

The key point: **ACP can be used by both assistants and agents.** AI that looks up product info and shows it to the user (assistant) and AI that places orders directly (agent) both work on the same protocol.

But ACP’s real role has shifted. On March 24, 2026, OpenAI confirmed on its official blog that Instant Checkout was being retired and “ACP would be extended to product discovery.” Target, Sephora, Nordstrom, Wayfair, and other major retailers expose product data to ChatGPT via ACP — but payment happens in each retailer’s own checkout. **ACP’s role has officially been redefined from “payment protocol” to “product catalog infrastructure.” ACP is settling in as the language of the assistant.**

### **AP2 — A Tool to Set the Boundary for the Agent**

In May 2025, Google announced AP2 (Agent-to-Agent Payment Protocol). The name says it. This is an _inter-agent_ protocol — the language AI agents use to talk to financial institutions.

AP2’s most distinctive concept is the **mandate.** The user grants the AI agent a set of permissions: “_Up to ₩100,000 (≈$70) per month, in the household goods category, only at A-Mart and B-Mart.”_ Spending caps, categories, merchant restrictions, time windows — these parameters design the boundary between assistant and agent.

60+ companies (Mastercard, Visa, PayPal, Adyen, Coinbase, etc.) have signed on as AP2 partners. But no consumer-facing product is shipping yet — it’s still in developer exploration. **The mandate concept itself is the first real design attempt at “agent” semantics. But it’s still on paper.**

### **UCP — Putting Discovery and Payment in One Container**

In January 2026, Google went a step further and announced UCP (Universal Commerce Protocol). Where AP2 handles only the payment layer, UCP integrates the entire shopping flow — product search → cart → checkout — into a single protocol. Twenty-plus partners signed on, including Shopify, Walmart, Target, Etsy, and Wayfair.

In March, three capabilities were added: Cart (multi-item cart), Catalog (real-time inventory and price), and Identity Linking (linking retailer accounts so loyalty benefits carry over). Salesforce and Stripe confirmed UCP implementations. UCP-based checkout actually works on Etsy and Wayfair through Google AI Mode and the Gemini app.

Gap Inc.’s CTO Sven Gerjets framed the ACP vs. UCP difference clearly in an interview with CNBC: “_UCP is designed so merchants control the entire shopping experience. OpenAI’s ACP is designed for discovery.”_ \[4\]

**“Supports both assistant and agent” also means “neither is fully proven yet.”**

Google also separately launched _Buy for Me._ Inside Google Search’s AI Mode, the AI recommends products, then an agent visits the retail site and purchases on the user’s behalf. Before final payment, the user has to review price, address, and order details and approve. Not a full agent — an agent wearing the agent hat, but with a human nodding over its shoulder at every step.

<figure class="qa qb qc qd qe qf px py paragraph-image"><div role="button" tabindex="0" class="qg qh fx qi be qj"><span class="gc gd ge aj gf gg gh fp gi speechify-ignore">Press enter or click to view image in full size</span><div class="px py pz"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*ciC3uQwFNOYFdoT3XY5WvQ.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*ciC3uQwFNOYFdoT3XY5WvQ.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*ciC3uQwFNOYFdoT3XY5WvQ.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*ciC3uQwFNOYFdoT3XY5WvQ.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*ciC3uQwFNOYFdoT3XY5WvQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ciC3uQwFNOYFdoT3XY5WvQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ciC3uQwFNOYFdoT3XY5WvQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*ciC3uQwFNOYFdoT3XY5WvQ.png 640w, https://miro.medium.com/v2/resize:fit:720/1*ciC3uQwFNOYFdoT3XY5WvQ.png 720w, https://miro.medium.com/v2/resize:fit:750/1*ciC3uQwFNOYFdoT3XY5WvQ.png 750w, https://miro.medium.com/v2/resize:fit:786/1*ciC3uQwFNOYFdoT3XY5WvQ.png 786w, https://miro.medium.com/v2/resize:fit:828/1*ciC3uQwFNOYFdoT3XY5WvQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*ciC3uQwFNOYFdoT3XY5WvQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*ciC3uQwFNOYFdoT3XY5WvQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="be mn qk i" width="700" height="135" loading="eager" role="presentation" src="/writing/from-assistant-to-agent-the-long-road-for-agentic-commerce/02.png"></picture></div></div></figure>

### **PayPal — “Let Others Build the Protocols. We Want the PayPal Button Everywhere.”**

The most pragmatic strategy in the protocol wars belongs to PayPal. ACP, AP2, UCP — PayPal is the only player participating in all three. PayPal’s logic is clean. Whichever protocol becomes the standard, if there’s a PayPal button wherever AI pays, that’s enough.

The foundation: 400 million+ accounts and tens of millions of merchants. PayPal built an ACP server to expose this merchant catalog to ChatGPT, and the Agent Ready program lets existing merchants accept payments from AI platforms without additional development.

In January 2026, PayPal acquired Cymbio, a multichannel orchestration company, to strengthen Store Sync capability \[11\]. Same month: PayPal took over payment processing for Microsoft Copilot Checkout. PayPal isn’t trying to define the protocol — it wants to own the point where payment actually happens, whichever protocol runs underneath.

### **The Quiet Advance of the Card Networks**

While the protocol fight grabs headlines, the entities actually processing AI agent payments are the card networks.

Visa has been supporting bank trials of agent payments through its ‘Agentic Ready’ program. In March, Visa expanded the program to 21 European banks (Barclays, HSBC UK, Santander, and others) and completed pilot transactions with Santander across five Latin American countries \[9\].

Mastercard completed Europe’s first live AI agent transactions with Santander, then rolled Agent Pay pilot operations across the U.S., Australia, New Zealand, Singapore, Malaysia, India, and Korea \[10\]. Mastercard’s ‘Verifiable Intent’ framework applies cryptographic authentication to AI transactions, technically proving “yes, this transaction really did come from the user’s intent.”

**Whoever designs the road for agentic commerce, the card networks collect the tolls.**

Stripe has cemented itself as the infrastructure hub. Shared Payment Tokens (SPT) — tokens that let AI agents use a buyer’s payment method without exposing the card number — are linked to Visa and Mastercard tokens, and the integration extends to BNPL (Buy Now Pay Later) services like Affirm and Klarna.

Coinbase is also worth watching. Agentic Wallets, launched in February 2026, is a cryptocurrency wallet infrastructure built specifically for AI agents — an alternative path that doesn’t depend on traditional financial rails.

### **In Korea: Internalization and Openness, Side by Side**

When I was working in Korean fintech, super-apps like Toss, Kakao Pay, and Banksalad were rapidly bundling payment, identity verification, and asset queries inside a single app. A single mistaken transaction was hard to resolve in a meeting — the question of responsibility between parties stayed open. Payment, identity, and the responsibility line between them were so deeply woven into the super-app’s interior that there was little room — and little need — for external protocols.

Against that backdrop, Korean companies have begun moving anyway. Kakao Pay and Toss Payments are testing MCP (Model Context Protocol) in payment environments. NHN KCP, a Korean PG (payment gateway) company, announced plans to be the first Korean PG to support Google AP2. In March 2026, Kakao officially launched “Kanana in KakaoTalk” — its AI assistant inside Korea’s dominant messenger — and through “Kakao Tools” connected external partners like Olive Young (Korea’s largest beauty retailer), Musinsa (fashion), and Hyundai Department Store. It’s still exploratory, but a different shape of protocol adoption — distinct from the U.S. trajectory — has started.

## **Part 2. The Reality Check: Those Who Ran as Agents Stumbled**

In late 2025, Bain & Company surveyed U.S. consumers. 72% had tried AI in some form. But the share that said they were “comfortable” letting AI handle payment dropped to 24%, and the share that had actually bought something through AI was only 10% \[5\]. **72% → 24% → 10%.** A sharp drop at every step — from use to trust, from trust to action.

### **Instant Checkout — Failed to Stick Even as an Assistant**

In September 2025, OpenAI launched Instant Checkout with significant ambition. Discover products inside ChatGPT and pay right there. By March 24, 2026, OpenAI confirmed in an official blog post that Instant Checkout was being retired \[1\]. The stated reason: _”the initial version did not provide the level of flexibility we are aiming for.”_

The numbers tell a sharper story. Out of Shopify’s millions of stores, only about 30 actually onboarded, according to Forrester analyst Emily Pfeiffer in a CNBC interview \[2\]. Walmart exposed roughly 200,000 products on ChatGPT, but the conversion rate for products sold directly inside ChatGPT was about one-third of Walmart’s own website. Multi-item cart wasn’t implemented. Loyalty membership integration was missing. Inventory, price, and shipping data relied on scraping and were inaccurate. The basic infrastructure that makes a transaction possible wasn’t in place.

But the most fundamental cause wasn’t technical. **Consumers wanted to pay on sites where they already had accounts, in environments they already trusted.** Instant Checkout’s lesson is simple: ChatGPT was still finding its footing as an assistant — as a tool for finding and comparing products. And on top of that incomplete foundation, it suddenly tried to become an agent.

Now ChatGPT has repositioned as a _product discovery tool_. Visual product browsing, image-upload search, conversational filtering — discovery features rolled out to all users (Free, Go, Plus, Pro), and payment routed back to merchants’ own checkouts \[3\].

On the same day, Walmart integrated its own AI assistant ‘Sparky’ into ChatGPT as an in-app experience. Discovery starts in ChatGPT, but account linking, loyalty, and payment happen back in Walmart’s environment. Shopify also launched ‘Agentic Storefronts’ the same day \[8\], automatically exposing millions of Shopify merchants’ products to ChatGPT.

### **Perplexity — Big Announcements, Demo-Level Usage**

Perplexity shows a similar pattern. In November 2024, the company launched ‘Buy with Pro’ — one-click shopping for Pro subscribers. In November 2025, ‘Instant Buy’ added PayPal and Venmo payment integration.

The announcements were ambitious and headline-worthy, but the actual product was U.S.-only, worked only for a subset of products from a subset of merchants, and redirected to external sites for everything else. Transaction counts and GMV — neither Perplexity nor PayPal disclosed any numbers. User reviews barely mention the shopping feature at all.

Perplexity’s Comet browser attempted delegated buying on Amazon and met a more dramatic ending. Amazon sued Perplexity in November 2025, and on March 9, 2026, a federal judge issued a preliminary injunction blocking Comet from Amazon access \[12\]. The case may become the first major precedent on AI shopping agents’ platform access rights.

### **The Consumer Wall — Eyes Are Open, Wallets Are Not**

“AI has replaced the _eyes_ of shopping” is a phrase circulating in the industry. The 72→24→10 drop above shows the limit of that phrase.

Even when AI recommends, people want to verify themselves. AI says “_this is the good one,”_ but consumers want to open the product page, look at the photos, read reviews, compare prices on another site — and _then_ hit buy.

What those numbers tell you is two things. **AI-as-assistant — “it gathers and compares” — consumers are slowly opening up to. AI-as-agent — “it pays on my behalf” — many still reject.** This is not a technology problem. It’s a trust problem — and trust is hard to measure and harder to build.

**Search results and AI recommendations follow different rules.** Search was multiple choice — pick one of several results. Making the first page meant getting some chance at clicks, and the aggregate of clicks fed back into ranking. AI recommendations are different. “_I recommend these three”_ — short answer, with no easy feedback loop. The gap between multiple choice and short answer looks small but reshapes the entire structure of the advertising market.

What you buy also matters. Morgan Stanley reports that groceries and household essentials drove the largest share of AI-recommended purchases, and projects groceries will be the largest growth driver of agentic commerce over the next five years \[6\]. Detergent, bottled water, toilet paper — the everyday categories where comparison isn’t needed and a wrong choice is low-cost — show low resistance to AI-delegated purchases. In taste-driven categories like fashion, home interior, and luxury, consumers still want to choose themselves. **Agentic commerce won’t roll out uniformly. It’ll move at different speeds across categories.**

Google’s _Buy for Me_ requiring “user confirmation and approval before final payment” sits in that context. Technically, full automation is possible. But consumer trust hasn’t reached that level. A hybrid model — wearing the agent’s outer shell, operating as an assistant in practice — is the realistic compromise at this stage.

### **In Korea: The Assistant’s Real Opportunity Is in Discovery, Not Payment**

In Korea, the picture is different. The core value U.S. AI payment promises — “_make complex payments easy”_ — has already been delivered in Korea. Mobile payment penetration is 79%, with the annual market at ₩403 trillion (≈$290B). Naver Pay (51.5%), Kakao Pay (25.1%), Toss Pay (13.2%) — payment finishes without even a fingerprint. Contrast that with the U.S., where 55% of carts get abandoned because consumers have to re-enter card numbers. **The payment friction an agent would handle barely exists.**

But discovery friction is different. According to the 2026 buying behavior report from Challengers (a Korean consumer research platform), only 4.7% of Korean consumers buy directly when they discover a product on social media. 78.4% re-check on a shopping site before buying \[18\]. **Korean consumers pay easily but choose very carefully.**

**Not payment delegation but discovery assistance — that’s where AI assistants have real opportunity in Korea.** After Naver, Korea’s dominant search portal and e-commerce gateway, introduced its shopping AI agent, click-through rate on recommended products rose 4% and purchase conversion rose 1.6x \[16\]. AI recommendation block CTR runs roughly 50% higher than ordinary search, and GMV grows about 50% quarter-over-quarter. The real space for the AI assistant in Korea is discovery, not payment.

## **Part 3. Discovery and Payment: Two Different Wars**

### **The Trap of Bundling Everything Under “Agentic Commerce”**

The phrase “agentic commerce” packages discovery and payment as one. They’re not. They have different histories, different players, different regulations, different incentive structures.

In my 13 years at Google, one thing I kept seeing was different teams pushing their own agendas and colliding with each other. Google Shopping (product search), Google Pay (payment instrument), AP2 (agent payment protocol), UCP (unified commerce protocol), Buy for Me (AI-delegated purchase) — products that look like a single coherent picture from the outside were, from the inside, built by different teams at different times for different reasons. Even inside Big Tech, discovery and payment have always been separate worlds.

Big Tech has spent over a decade unable to close the gap between _discovery_ and _purchase conversion_. The pattern repeats. Google Shopping has been trying since the early 2010s to surface products directly inside search results, but consumers searched on Google and bought on Amazon. Facebook launched Shops in 2020 to close the loop inside social, but couldn’t pull traffic off the storefronts. Instagram Checkout, Pinterest Buyable Pins — same attempts, same limits. Consumers refused to merge “discovery” and “purchase” as a single habit.

AI agents are the most recent attempt at this old problem. Big Tech isn’t slowing down. Meta acquired agentic AI startup Manus for $2 billion and previewed “agentic shopping tools.” Microsoft is building Copilot Checkout to close purchase inside the conversation.

### **The Real Fight: Not the 3% Payment Cut. The 5–15% “Discovery Toll.”**

Card networks collect roughly 3% in tolls on transactions. But the real money isn’t the toll. It’s the billboard at the road’s entrance.

Storefronts today pay 5–15% of revenue in advertising to Naver and Google. Search ads, shopping ads, keyword bidding — the cost of getting consumers to _discover_ their products. **If AI takes over discovery, that cost converts into a fee paid to AI platforms. And the “discovery toll” is much bigger money than the 3% payment cut.**

For storefronts, the real scary scenario has three layers:

**First, brand exposure ends up in AI’s hands.** Unlike the era when ad spending got you to the top of search, when AI says “_I recommend these three,”_ brands not in the three effectively don’t exist.

**Second, automated price comparison crushes margins.** AI agents finding the lowest price in real time push price competition to the limit.

**Third, customer data leaves the storefront and accumulates at the AI platform.** Which products customers explored, what they compared, the criteria they used to choose — that data lands at the AI platform, not the storefront.

This isn’t a percentage-points-of-payment-fees problem. It’s the customer relationship itself being intermediated. Imagine a storefront that pays 10% of revenue on Naver keyword ads, now facing a future where it pays 15% on ChatGPT recommendation fees.

Data points in the same direction. According to a Visibility Labs analysis of 94 e-commerce brands, ChatGPT-referred traffic converted at 1.81% — 31% higher than non-branded organic search (1.39%) \[19\]. But the absolute volume is still tiny. ChatGPT’s contribution is only 1.48% of non-branded organic search revenue. High-quality discovery, but the scale hasn’t caught up.

## Get Chaesang Jung’s stories in your inbox

Join Medium for free to get updates from this writer.

Remember me for faster sign in

The business-model movements line up too. In early 2026, OpenAI started testing ads in ChatGPT. Free and Go users in the U.S. see responses with a “Sponsored” label, while paid plans (Plus, Pro, Business, Enterprise, Education) are ad-free. In March, the pilot expanded to Canada, Australia, and New Zealand \[14\]. **The signal after Instant Checkout’s failure: OpenAI’s revenue model moved from “commerce commissions” to “advertising.”** The agentic commerce business model is likely to settle as ads — collecting discovery-and-recommendation fees, the AI version of Google Search ads — rather than transaction commissions.

### **The Two Faces of Closed Ecosystems — Amazon, Coupang, and Naver**

Strategy splits at this point.

Opening discovery is a double-edged sword. Exposing products to AI platforms means more channels for revenue. But customer relationships and data leak out. Opening payment is technically possible but lacks incentive. If your own site’s conversion rate is already high, why hand payment over to AI agents?

**Amazon’s Strategy**

**Amazon is the most aggressive — inside its own closed ecosystem.** It doesn’t join ACP or UCP. It actively blocks external AI agent access to its site, responding to Perplexity Comet’s attempt at delegated buying with a court order. Yet inside Alexa+, Amazon runs the most aggressive agentic commerce around.

Alexa+’s ‘Automatic Buying’ feature automatically completes payment when a product reaches the user’s preset target price — no confirmation step. Wishlist and cart items are tracked for price too. Alexa+ extends through partnerships with Grubhub, Uber Eats for food, and Expedia for travel. Early data shows Alexa+ users tripling shopping activity versus existing Alexa users. Reject open protocols and lead inside the walled garden — that’s the paradox. (Alexa+ is still early-stage, and verification is ahead.)

Separately, Amazon announced a $50B investment in OpenAI in February 2026. Forrester analyzed it as the combination of “the most popular answer engine (ChatGPT) + the most popular marketplace (Amazon)” and framed it as a threat to Google Search \[13\]. After OpenAI abandoned payment and concentrated on discovery, it ended up partnering with the largest marketplace. That’s the picture.

**Coupang’s Strategy**

**Coupang is a different picture.** Coupang, Korea’s largest direct-procurement e-commerce platform (Korea’s closest analog to Amazon), doesn’t join ACP or UCP, and doesn’t permit external AI agent access. But unlike Amazon, Coupang doesn’t experiment with AI as the customer-facing agent. Through its ‘AI Factory’ built with NVIDIA, Coupang concentrates AI inside internal logistics optimization — fulfillment center scheduling, delivery route optimization, demand forecasting. In March at NVIDIA GTC, Coupang was named a launch partner for NVIDIA Dynamo 1.0, gaining up to 30x data processing throughput. The company has invested over $3 billion in AI and robotics over three years, and roughly 50% of initial new development code is written by AI. **For Coupang, AI is a back-office tool, not a customer touchpoint.**

**Naver’s Strategy**

**Naver runs a different playbook.** Naver Shopping is structurally different from Coupang. Not a direct-procurement model with its own inventory, but a 100% third-party-seller-based intermediary marketplace. Smart Store, Brand Store, and the price-comparison catalog make up an open marketplace where Naver’s role is to _help discover_.

So Naver’s AI strategy concentrates on discovery. The shopping AI agent, in beta as of February 2026, is built on Naver’s own commerce-specialized LLM “Shopping Intelligence.” Search for “sofa” and the agent presents a buying guide structured by material, function, and budget. Early results are promising — click-through rate up 4%, purchase conversion up 1.6x \[16\]. The plan: expand into beauty and food in the first half, and evolve toward a “full-care agent” that handles adding to cart.

In parallel, Naver terminated its independent AI services (ClovaX, Cue) on April 9, 2026, switching strategy toward integrating AI agents directly into existing services \[20\]. The “AI tab,” due in the first half, is a unified AI agent that runs from question to exploration to execution — connecting Naver services like shopping, places, and maps organically. CEO Choi Soo-yeon declared at the March 2026 shareholders’ meeting that “AI agents will be deployed across all our services this year.” \[21\] “_We won’t hand discovery to someone else’s AI”_ is the intent, alongside the judgment to use AI as competitiveness enhancement for the existing platform, not as a separate product.

“Open discovery, keep payment to ourselves” is the ideal picture, but in reality it’s the fallback, not the desired outcome. Open discovery, and pressure builds to open payment too. Close discovery, and you get marginalized from the AI era’s exposure. The right answer depends on your ecosystem’s size and bargaining power. Coupang (GMV ₩55 trillion, ≈$40B) and Naver (GMV ₩50.3 trillion, ≈$36B) make up about 43% of Korean e-commerce, while mid-tier players (11st, G-Market, SSG — major Korean e-commerce sites trailing the top two) declined 16–30% year-over-year. **In an era when AI takes over discovery, the crisis is sharper for platforms without the strength to build their own AI.**

### **Where Agents Open First, Where Assistants Stay**

The agentic commerce vision — AI choosing products and paying on its own — is appealing. But where agents can actually work and where they have to stay as assistants are clearly distinct.

**Where Agents Open First**

**First, B2B procurement.** Office supplies, raw materials, SaaS subscriptions — repetitive, standardized procurement is a natural fit for “_reorder under the same terms as last month.”_ The purchasing manager doesn’t need to compare each time. Approval processes are predefined. Corporate procurement has no emotion. As long as spec, price, and delivery match, that’s enough — the first seat agents take. That said, B2B in many markets relies on invoicing and bank transfer rather than card payment, so card-based protocols don’t transplant directly.

**Second, repeat purchases of household essentials and consumables.** “_Out of detergent — order the same one.”_ No comparison needed. Low price sensitivity. Trust already established. Amazon’s Subscribe & Save has been working this layer for years. AI agents add flexibility on top.

**Where Assistants Stay**

**Assistants stay in areas where comparison and exploration are the value.** Fashion, electronics, furniture — categories where you weigh taste, compare specs, read reviews, hunt prices. These are categories where the _process_ of shopping itself is the value. The fact that over half of consumers feel uncomfortable even sharing personal data with AI tells you the same thing. Storefronts don’t want to open this layer to AI either. Automated comparison means margin pressure.

**AP2’s mandate concept becomes sharper here.** The mandate is the design tool for the line between assistant and agent. Spending cap, category, merchant restriction — these parameters define “agent up to here, assistant beyond.” The future of agentic commerce isn’t every transaction being automated. It’s a clear split between what can be automated and what still requires human judgment.

### **In Korea: The U.S. Problem Is “Bind Them Together.” Korea’s Is “Should We Open Them?”**

The U.S. and Korea start from different places.

**The U.S. problem is how to bind discovery and payment.** In the U.S., discovery and payment were originally separate. You search on Google, buy on Amazon, pay with Visa. Each is a different company, a different system, a different experience. Protocols like ACP, AP2, UCP are trying to stitch this fragmented experience back together for AI agents.

**Korea’s problem is whether to open what’s already bound.** You discover on Coupang and buy on Coupang — that’s a genuinely closed ecosystem. You search on Naver Shopping and pay with Naver Pay — that’s an integrated experience on top of an open platform. You get a recommendation in KakaoTalk (Korea’s dominant messenger) and pay with Kakao Pay — that’s commerce entry from a messenger base. The shapes differ. The commonality: discovery and payment close out inside one ecosystem. And the AI approach across these two ecosystems splits cleanly.

Naver grows AI agents inside its own services. The shopping AI agent, the health agent, the AI tab — all “on-service AI” operating inside the Naver platform. Kakao’s strategy is the opposite: pull external partners into KakaoTalk to build an “AI agent portal.” Kakao Tools, built on its own MCP (Model Context Protocol), invokes external services — Olive Young (Korea’s largest beauty retailer), Musinsa (fashion), Hyundai Department Store, MyRealTrip (travel) — directly inside KakaoTalk conversations. **Not pure closing, not pure opening — a hybrid is Korea’s reality.**

## **Closing**

What six months of market data taught us is clear. **AI agents are still assistants.** The transition from assistant to agent is a much longer road than many expected.

That transition requires four things.

-   **Trust.** Tens, hundreds of accurate recommendations as an assistant before consumers consider delegating one payment. Trust accumulates in order.
-   **Authentication.** Technically proving that “yes, the user actually asked for this” when an AI agent claims so. Without this, agent payment becomes a haven for fraud.
-   **Delegation infrastructure.** Designing — institutionally and technically — the scope of agent behavior: “_up to ₩100,000 (≈$70) per month, household goods only, at these three merchants.”_
-   **Business model migration.** Reading the flow where the discovery toll of 5–15% — much bigger than the 3% card fee — migrates to AI platforms.

These four don’t open the agent era right now. They lay down the bridge to walk to the agent era _once trust as an assistant has been built up enough._

### **Five Questions**

If you’re making decisions in e-commerce or brand operations, ask yourself the questions below. For mid-tier platforms and brands without the strength to build their own AI, “_how do we mount ourselves on top of external AI?”_ is a survival question.

1.  **Is our catalog data structured in the form ACP/UCP requires?** Can AI show our products accurately, or is it showing scraped inaccurate information?
2.  **Are our product categories “everyday” or “taste”?** Are they where the agent opens first, or where the assistant stays longer? The answer changes investment timing and intensity.
3.  **Will we open discovery to external AI, or close it?** Close it and we’re marginalized in the AI era’s exposure. Open it and customer data and relationships leak out. Have we calculated the trade-off in numbers?
4.  **How sensitive is our revenue to being out of AI recommendations’ Top 3?** Dropping out of the AI Top 3 may be more lethal than dropping off the first page of search.
5.  **Can we run different rules abroad versus domestically?** Have we calculated the revenue loss if K-Beauty, K-Fashion, or K-Food don’t make it into recommendations on the U.S. ChatGPT or Gemini?

If any of these answers are blank, filling them is the agenda for the next meeting.

The distance from assistant to agent is long. But the assistant is already at work, and the first page of that road is being written right now.

## **References**

\[1\] OpenAI, “Powering Product Discovery in ChatGPT,” March 24, 2026. \[https://openai.com/index/powering-product-discovery-in-chatgpt/\](https://openai.com/index/powering-product-discovery-in-chatgpt/)

\[2\] Annie Palmer & Ashley Capoot, “OpenAI’s first crack at online shopping stumbled. It’s preparing for the next wave,” CNBC, March 20, 2026. \[https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html\](https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html)

\[3\] Ashley Capoot, “OpenAI revamps shopping experience in ChatGPT after struggling with Instant Checkout offering,” CNBC, March 24, 2026. \[https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html\](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html)

\[4\] Gabrielle Fonrouge, “Gap says it will launch checkout within Google’s Gemini, in an AI first from a major fashion company,” CNBC, March 24, 2026. \[https://www.cnbc.com/2026/03/24/gap-google-gemini-checkout-ai-platform.html\](https://www.cnbc.com/2026/03/24/gap-google-gemini-checkout-ai-platform.html)

\[5\] Bain & Company, “Agentic AI Commerce Hinges on Consumer Trust,” 2025. \[https://www.bain.com/insights/agentic-ai-commerce-hinges-on-consumer-trust/\](https://www.bain.com/insights/agentic-ai-commerce-hinges-on-consumer-trust/)

\[6\] Morgan Stanley Research, “Here Come the Shopping Bots,” December 8, 2025. \[https://www.morganstanley.com/insights/articles/agentic-commerce-market-impact-outlook\](https://www.morganstanley.com/insights/articles/agentic-commerce-market-impact-outlook)

\[7\] Google Blog, “AI shopping gets simpler with Universal Commerce Protocol updates,” March 19, 2026. \[https://blog.google/products-and-platforms/products/shopping/ucp-updates/\](https://blog.google/products-and-platforms/products/shopping/ucp-updates/)

\[8\] Shopify, “Millions of merchants can sell in AI chats,” March 24, 2026. \[https://www.shopify.com/news/agentic-commerce-momentum\](https://www.shopify.com/news/agentic-commerce-momentum)

\[9\] Visa UK Newsroom, “Visa launches Agentic Ready in Europe,” March 17, 2026. \[https://www.visa.co.uk/about-visa/newsroom/press-releases.3437886.html\](https://www.visa.co.uk/about-visa/newsroom/press-releases.3437886.html)

\[10\] Mastercard, “Mastercard completes Korea’s first live agentic transactions,” March 17, 2026. \[https://www.mastercard.com/news/ap/en/newsroom/press-releases/en/2026/mastercard-completes-korea-s-first-live-agentic-transactions-unlocking-trusted-ai-powered-commerce/\](https://www.mastercard.com/news/ap/en/newsroom/press-releases/en/2026/mastercard-completes-korea-s-first-live-agentic-transactions-unlocking-trusted-ai-powered-commerce/)

\[11\] PayPal Holdings, “PayPal to Acquire Cymbio, Accelerating Agentic Commerce Capabilities,” PR Newswire, January 22, 2026. \[https://www.prnewswire.com/news-releases/paypal-to-acquire-cymbio-accelerating-agentic-commerce-capabilities-302667597.html\](https://www.prnewswire.com/news-releases/paypal-to-acquire-cymbio-accelerating-agentic-commerce-capabilities-302667597.html)

\[12\] PYMNTS, “Perplexity Asks Federal Court to Lift Amazon Shopping Agent Ban,” April 2026. \[https://www.pymnts.com/legal/2026/perplexity-asks-federal-court-to-lift-amazon-shopping-agent-ban/\](https://www.pymnts.com/legal/2026/perplexity-asks-federal-court-to-lift-amazon-shopping-agent-ban/)

\[13\] Emily Pfeiffer, “Power Couple OpenAI + Amazon May Have Just Won Consumer Agentic Commerce,” Forrester, March 17, 2026. \[https://www.forrester.com/blogs/power-couple-openai-amazon-may-have-just-won-consumer-agentic-commerce/\](https://www.forrester.com/blogs/power-couple-openai-amazon-may-have-just-won-consumer-agentic-commerce/)

\[14\] OpenAI, “Testing ads in ChatGPT,” 2026 (updated March 26, 2026). \[https://openai.com/index/testing-ads-in-chatgpt/\](https://openai.com/index/testing-ads-in-chatgpt/)

\[15\] Seong A-in, “The Difference Between Naver and Kakao’s AI Agent Strategies,” Byline Network, March 26, 2026 (Korean). \[https://byline.network/2026/03/26\_1297744/\](https://byline.network/2026/03/26\_1297744/)

\[16\] Seong A-in, “Naver’s First Shopping Agent — What’s the Goal?” Byline Network, March 15, 2026 (Korean). \[https://byline.network/2026/03/15\_19298383/\](https://byline.network/2026/03/15\_19298383/)

\[17\] Ajunews, “Kakao Launches ‘Kanana in KakaoTalk’,” March 19, 2026 (Korean). \[https://www.ajunews.com/view/20260319133505213\](https://www.ajunews.com/view/20260319133505213)

\[18\] Challengers, “Online Shopping Buying Behavior Report 2026” (Korean). \[https://www.thesnstime.com/onrain-syoping-gumae-haengdong-ripoteu-2026-balpyo-caelrinjeoseu-sobija-gumae-yeojeong-bunseog/\](https://www.thesnstime.com/onrain-syoping-gumae-haengdong-ripoteu-2026-balpyo-caelrinjeoseu-sobija-gumae-yeojeong-bunseog/)

\[19\] Visibility Labs, “ChatGPT vs Organic Search Conversion Rates,” 2026. \[https://visibilitylabs.com/chatgpt-vs-organic-search-conversion-rates/\](https://visibilitylabs.com/chatgpt-vs-organic-search-conversion-rates/)

\[20\] ZDNet Korea, “Naver to End ClovaX and Cue in April — Pivoting to AI Briefing and AI Tab,” February 25, 2026 (Korean). \[https://zdnet.co.kr/view/?no=20260225180559\](https://zdnet.co.kr/view/?no=20260225180559)

\[21\] MoneyToday, “Naver to Deploy AI Agents Across All Services,” March 23, 2026 (Korean). \[https://www.mt.co.kr/tech/2026/03/23/2026032313474977024\](https://www.mt.co.kr/tech/2026/03/23/2026032313474977024)

— -

_\*Originally published in Korean by DBR (Dong-A Business Review), May 2026.\*_

_Korean version on Brunch:_ [https://brunch.co.kr/@chaesang/179](https://brunch.co.kr/@chaesang/179)
