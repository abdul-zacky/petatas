# PETATAS \- CONTEXT PROMPT

## Platform Gamifikasi Adopsi QRIS untuk Papua dengan AI/Computer Vision

---

## 🎯 OVERVIEW

Petatas adalah platform gamifikasi yang mengubah adopsi QRIS di Papua menjadi pengalaman engaging melalui personalized challenges, AI storytelling, dan community-driven rewards. Platform dirancang untuk mengatasi rendahnya literasi digital dan resistensi terhadap pembayaran cashless dengan pendekatan dual-sided engagement untuk pengguna dan pelaku bisnis.

**Tujuan Utama:**

- Accelerate QRIS adoption di Papua Barat & Papua Barat Daya  
- Reduce merchant churn melalui continuous engagement  
- Build sustainable community-driven digital economy

---

## 👥 USER ROLES

### Role 1: PENGGUNA (General User)

Masyarakat umum yang menggunakan QRIS untuk bertransaksi.

**Sub-Personas:**

- Mahasiswa/Pelajar (18-25 tahun)  
- Guru/Dosen (25-50 tahun)  
- Pegawai Kantoran (25-45 tahun)  
- Ibu Rumah Tangga (25-50 tahun)  
- Pemuda Umum (18-30 tahun)

**Primary Actions:**

- Bayar dengan QRIS di merchant  
- Complete persona-specific challenges  
- Onboard merchant baru melalui referral  
- Review dan rate merchant  
- Create dan share content

---

### Role 2: PELAKU BISNIS (Business Owner)

UMKM/usaha yang menerima pembayaran QRIS.

**Sub-Personas:**

- Warung Makan/Kopi  
- Toko Retail/Sembako  
- Restoran/Rumah Makan  
- Jasa (Salon/Bengkel/dll)  
- Pedagang Pasar

**QRIS Status:**

- Non-QRIS: Belum punya QRIS  
- Baru Onboard: Sudah daftar tapi belum aktif  
- Active: Regularly use (3-20 tx/week)  
- Power User: Heavy user (\>20 tx/week)

**Primary Actions:**

- Onboard QRIS (jika belum punya)  
- Receive QRIS payments  
- Complete volume/growth challenges  
- Recruit merchant lain  
- Create business content

---

## 🔄 USER JOURNEY

### 1\. SIGN UP & REGISTRATION

- Input: Nomor HP (OTP), Nama, Email (optional), Lokasi (GPS auto-detect)  
- Quick registration untuk minimize friction

### 2\. PERSONA IDENTIFICATION QUESTIONNAIRE

**Branching Logic:**

**Main Question:**

- Apa peran Anda? → Pengguna / Pelaku Bisnis

**Branch A: PENGGUNA**

- Profesi/status (Mahasiswa/Guru/Pegawai/IRT/dll)  
- Frekuensi penggunaan digital payment  
- Motivasi menggunakan QRIS

**Branch B: PELAKU BISNIS**

- Jenis usaha  
- Status QRIS saat ini (Sudah/Belum/Jarang dipakai)  
- Rata-rata transaksi per hari  
- Tantangan dalam adopsi digital

**AI Classification:**

- Analyze response patterns  
- Assign primary persona \+ tags  
- Determine literacy level (Beginner/Intermediate/Advanced)  
- Map motivation profile (Rewards/Social/Impact/Convenience)  
- Identify pain points

---

### 3\. AI-GENERATED PERSONALIZED STORYBOOK

**Tujuan:** Create emotional connection & demonstrate QRIS value proposition melalui story yang relatable.

**Story Structure (2-3 menit, skippable setelah 30 detik):**

**Chapter 1: Relatable Character**

- Introduce protagonist yang mirror user persona  
- Contoh: "Reza, mahasiswa di Sorong yang sering beli kopi..."

**Chapter 2: The Problem**

- Highlight pain points (antri lama, ribet kembalian, cash hilang, dll)  
- Visual & emotional approach

**Chapter 3: The Discovery**

- Introduce QRIS sebagai solusi  
- "Suatu hari, lihat teman bayar dengan scan QR..."

**Chapter 4: The Transformation**

- Before-After comparison dengan data konkret  
- Pengguna: Lebih cepat, cashback, convenient  
- Bisnis: Omzet naik, lebih aman, efisien

**Chapter 5: The Invitation**

- Soft CTA untuk mulai journey  
- "Kamu juga bisa\! Yuk mulai..."

**AI Content Generation:**

- GPT-4 generate script based on persona  
- Dynamic character names, business types, pain points  
- Template-based illustration dengan Papua-inspired design  
- Optional voiceover \+ background music

---

### 4\. MAIN APPLICATION

**Tab Navigation:**

- 🏠 Home (Challenges)  
- 🏆 Leaderboard  
- 💰 Poin  
- 💬 Kaka AI  
- 👤 Profil

---

## 📱 MAIN FEATURES

### FEATURE 1: CHALLENGES (Home)

**Challenge Types:**

#### A. Onboarding Challenges (First-time, mandatory)

**Untuk Pengguna:**

1. Scan QR Pertama (demo mode available)  
2. Transaksi Pertama (min Rp5.000)  
3. Complete Profile  
4. Ajak 1 Teman

**Untuk Pelaku Bisnis (Non-QRIS):**

1. Daftar QRIS (AI-assisted verification: KTP \+ selfie \+ foto toko)  
2. Setup Display (upload foto QRIS display)  
3. Terima Transaksi Pertama  
4. Ajak Merchant Tetangga

**Untuk Pelaku Bisnis (Already QRIS):**

1. Link Existing QRIS  
2. Week 1 Warrior (10 transaksi dalam 7 hari)  
3. Content Creator (buat 1 business content)

#### B. Daily Challenges (Reset 00:00 WITA)

**Persona-Specific Examples:**

**Mahasiswa:**

- Campus Champion: Bayar 2x di area kampus  
- Budget Tracker: Total spending \<Rp50.000  
- Social Sharer: Post story ke Instagram

**Pelaku Bisnis (Warung):**

- Morning Rush: 5 transaksi sebelum jam 10  
- Consistency King: Payment di 3 time slots berbeda  
- Happy Customer: Get 1 five-star review

Reward: 50-200 poin each

#### C. Weekly Challenges (Reset Senin 00:00)

**Pengguna:**

- Diversity Explorer: Bayar di 5 kategori berbeda (300 poin)  
- Streak Master: 7-day consecutive usage (500 poin \+ Rp50K)  
- Community Builder: Ajak 3 teman (600 poin \+ Rp75K)

**Pelaku Bisnis:**

- Growth Hacker: 20% increase vs last week (500 poin \+ Rp100K)  
- Volume King: 50+ transactions (700 poin)  
- Recruiter Pro: Onboard 2 merchant (1000 poin \+ Rp200K)

#### D. Referral Challenges (Ongoing)

**Tiered System:**

- Level 1 (1 referral): 150 poin \+ Rp15K  
- Level 2 (5 referrals): 1000 poin \+ Rp100K \+ Bronze Badge  
- Level 3 (10 referrals): 2500 poin \+ Rp300K \+ Silver Badge  
- Level 4 (25 referrals): 7500 poin \+ Rp1juta \+ Gold Badge

**Chain Reaction:** Earn 10% dari referral's referral rewards (2nd level commission)

#### E. Special Event Challenges (Limited time)

- Flash Mob Events (onboard 3+ merchant dalam 3 jam)  
- Monthly Competitions (Top Onboarder)  
- Seasonal Campaigns (Ramadan, Independence Day, Year-End)

**Adaptive Difficulty:**

- AI monitors completion rate & activity level  
- Auto-adjust difficulty (Too easy \>80% → harder; Too hard \<20% → easier)  
- Persona-based challenge pools

---

### FEATURE 2: LEADERBOARD

**Structure:**

- Separate tabs: PENGGUNA | BISNIS  
- Time periods: Hari Ini / Minggu Ini / Bulan Ini / All Time

**Scoring:**

- Points from challenges, transactions, referrals, reviews, content  
- Sorted by total points in selected period

**Rewards:**

**Weekly Prizes:**

- Pengguna Top 1-3: Rp2juta / Rp1.5juta / Rp1juta  
- Pengguna Top 4-10: Rp500K  
- Bisnis Top 1-3: Rp3juta / Rp2juta / Rp1.5juta  
- Bisnis Top 4-10: Rp750K

**Monthly Grand Prize:**

- Pengguna Top 3: Rp5juta / Rp3juta / Rp2juta \+ Certificate \+ Media feature  
- Bisnis Top 3: Rp10juta / Rp7juta / Rp5juta \+ Branding package

**Anti-Gaming:**

- AI monitors fake transactions, coordinated farming, bot behavior  
- Flag → Investigation → Disqualification if confirmed

---

### FEATURE 3: POINTS & REWARDS

**Points Dashboard:**

- Display total points (lifetime \+ period)  
- Points history & breakdown  
- Point expiry notifications

**Redemption Options:**

**Digital Rewards:**

- E-wallet top-up (GoPay/OVO/Dana/ShopeePay)  
- Pulsa & Data packages  
- Merchant vouchers (partner merchants)

**Physical Rewards:**

- Merchandise (T-shirt, tumbler, tote bag)  
- Electronics (power bank, earphones)  
- Voucher fisik (Indomaret, Alfamart)

**Experiential Rewards:**

- Free attendance ke events  
- Business coaching sessions (for merchants)  
- Exclusive workshops

**Conversion Rate:**

- 100 points \= Rp10.000 value equivalent  
- Dynamic rates based on reward type

---

### FEATURE 4: KAKA AI \- CHATBOT ASSISTANT

**Core Capabilities:**

**Multimodal Support:**

- Voice input (bahasa Indonesia \+ bahasa daerah Papua)  
- Text chat  
- Image input (upload foto QR/struk untuk diagnosis)  
- Video call escalation untuk complex issues

**Use Cases:**

**Untuk Pengguna:**

- Troubleshooting QRIS scan issues  
- Tutorial step-by-step transaksi  
- Merchant recommendation nearby  
- Challenge guidance

**Untuk Pelaku Bisnis:**

- Onboarding support (daftar QRIS, verifikasi dokumen)  
- Technical help (link account, cek saldo, tarik dana)  
- Business tips (pricing, marketing, customer service)  
- Performance insights interpretation

**AI Features:**

- Context-aware responses (analyze user profile, location, history, time)  
- Sentiment analysis (detect frustration → escalate to human)  
- Personalized learning path (adaptive to user progress)  
- Proactive help (auto-detect issues before user asks)  
- 24/7 availability

**Training:**

- Fine-tuned GPT model dengan Papua-specific dataset  
- Common QRIS issues, local business contexts, bahasa daerah  
- Infrastructure challenges (koneksi internet lemot, dll)

---

### FEATURE 5: REFERRAL PROGRAM

**Mechanics:**

**Share Referral:**

- Unique referral code/link per user  
- Share via WhatsApp, social media, atau direct copy

**Referral Types:**

**User → User:**

- Referrer: 150 poin \+ Rp15K per successful signup  
- Referee: Rp10K welcome bonus

**User → Merchant:**

- Referrer: 300 poin \+ Rp50K per onboarded merchant  
- Referee: Rp20K welcome bonus

**Merchant → Merchant:**

- Referrer: 500 poin \+ Rp50K  
- Referee: Rp30K welcome bonus

**Tracking:**

- Real-time dashboard showing pending/completed referrals  
- Status: Signed Up → Onboarding → First Transaction → Success  
- Automatic reward credit setelah referee complete onboarding

**Bonus Tiers:**

- Unlock badges & multipliers at 5, 10, 25 referrals  
- Passive earning dari 2nd level referrals (10% commission)

---

### FEATURE 6: PROFILE

**Profile Sections:**

**Personal Info:**

- Avatar, Nama, Email, Phone, Lokasi  
- Edit profile  
- Verified badge (jika complete KYC)

**Statistics:**

- Level & XP progress bar  
- Total points (lifetime)  
- Transactions completed  
- Challenges completed  
- Referrals successful  
- Current rank (leaderboard position)

**Achievements:**

- Badges earned (display showcase)  
- Milestones reached  
- Certificates (dari courses/competitions)

**Activity History:**

- Recent transactions  
- Recent challenges completed  
- Points earned/redeemed log

**Settings:**

- Notifications (push, email, SMS)  
- Privacy (public/private profile)  
- Language preference  
- Help & Support  
- Terms & Conditions  
- Logout

**For Pelaku Bisnis (Additional):**

- Business profile (nama usaha, kategori, jam buka)  
- QRIS account info & status  
- Sales analytics dashboard  
- Customer reviews & ratings  
- Marketing tools (create promo, generate content)

---

## 🤖 AI/CV TECHNOLOGY STACK

### 1\. Smart QR Guardian (Computer Vision)

**Purpose:** Real-time fraud detection saat scan QR

**Process:**

- CV detect karakteristik fisik QR (resolusi, manipulasi, konsistensi)  
- AI validate merchant ID dengan database Bank Indonesia  
- Cross-check geolocation  
- Risk scoring 0-100 (Green=Safe, Yellow=Caution, Red=Block)

**Crowdsourced Protection:**

- User report suspicious QR → AI learn & improve  
- Gamification: \+500 poin untuk verified fraud report

**Tech:** YOLOv8 \+ Custom CNN, Edge computing (on-device, offline-capable)

---

### 2\. Kaka AI Assistant (NLP \+ Voice)

**Purpose:** 24/7 support & education

**Capabilities:**

- Multimodal (voice, text, image input)  
- Context-aware responses  
- Sentiment analysis  
- Personalized learning path  
- Auto-escalation ke human support

**Tech:** Fine-tuned GPT-4, Whisper API untuk voice, RAG dengan QRIS knowledge base

---

### 3\. Smart Merchant Verifier (CV \+ OCR)

**Purpose:** Instant onboarding dengan automated verification

**Process:**

- Upload KTP → OCR extract data → auto-fill form  
- Selfie → Face matching dengan KTP \+ liveness detection  
- Foto toko → CV detect nama toko, business type, location estimation  
- AI confidence score \>95% → auto-approve dalam 5 menit

**Impact:** Onboarding time 2-3 hari → 5-15 menit

---

### 4\. AI Content Generation Engine

**Purpose:** Turn merchant transformation stories into viral content

**Process:**

- Collect: Interview transcript, photos, transaction data, CV analysis  
- Generate multi-format content:  
  - Instagram carousel \+ caption \+ hashtags  
  - TikTok/Reels video (auto-edit dengan music, transitions, subtitles)  
  - Facebook/LinkedIn long-form post  
  - WhatsApp broadcast message  
- User review & customize → schedule/post  
- Track performance (views, engagement, conversions)

**Tech:** GPT-4 untuk script, template-based visual generation, trending music/effects database

---

### 5\. Predictive Analytics Engine

**Purpose:** Business intelligence & optimization

**For Merchants:**

- Sales forecasting (based on historical data, events, weather)  
- Customer insights (peak hours, popular items, repeat rate)  
- Pricing intelligence (competitor monitoring, price elasticity)

**For Champions/Users:**

- Target optimization (which merchants to approach)  
- Performance insights (conversion rate, best practices)

---

### 6\. Fraud Prevention System

**Purpose:** Multi-layer protection

**Detection:**

- Transaction behavior analysis (unusual volume, suspicious patterns, velocity anomaly)  
- Fake merchant detection (cross-check dengan public database)  
- Collusion detection (coordinated point farming)  
- Content moderation (inappropriate images, spam, fake reviews)

**Action:** Flag → Investigation → Ban \+ clawback rewards if confirmed

---

## 🎯 KEY DIFFERENTIATORS

1. **Dual-Sided Engagement:** Challenges untuk users DAN merchants → low churn  
2. **Persona-Based Personalization:** AI-generated storybook \+ adaptive challenges  
3. **Community-Driven:** Viral mechanics, peer referrals, social proof  
4. **AI-Powered:** Instant verification, 24/7 support, content generation  
5. **Papua-Specific:** Local context, bahasa daerah, offline-capable  
6. **Measurable Impact:** CV/AI verification ensures program integrity  
7. **Sustainable Model:** Rewards align incentives, self-perpetuating growth

---

## 📊 SUCCESS METRICS

**User Acquisition:**

- Month 1-2: 5,000 users, 1,000 merchants  
- Month 3-4: 15,000 users, 5,000 merchants  
- Month 5-6: 25,000 users, 15,000 merchants

**Engagement:**

- Daily active: 40%  
- Monthly retention: 70%  
- Avg session: 12 minutes  
- Challenge completion rate: 50-60%

**Economic Impact:**

- GMV generated: Rp50+ billion  
- Merchant revenue increase: \+75% average  
- QRIS adoption rate: 65%+ in pilot areas

---

**Platform yang mengubah adopsi QRIS dari tugas jadi permainan, dari individual effort jadi gerakan komunitas.** 🎮🚀  