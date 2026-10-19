// ACADEX PPTFlow · Curriculum Data & Slide Decks for Class 11 & 12
// Maharashtra State Board & CBSE Smart Presentation Decks

export const PPT_CLASSES = [
  { id: '11th', label: 'Class 11th', badge: 'Junior College / HSC' },
  { id: '12th', label: 'Class 12th', badge: 'Board & Entrance Prep' }
];

export const PPT_SUBJECTS = [
  { id: 'chemistry', label: 'Chemistry', icon: 'FlaskConical', color: 'from-amber-500 to-orange-600', activeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30' },
  { id: 'physics', label: 'Physics', icon: 'Atom', color: 'from-blue-600 to-cyan-500', activeBg: 'bg-blue-500/10 text-blue-600 dark:text-sky-400 border-blue-500/30' },
  { id: 'mathematics', label: 'Mathematics', icon: 'Calculator', color: 'from-purple-600 to-indigo-500', activeBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30' },
  { id: 'biology', label: 'Biology', icon: 'Dna', color: 'from-emerald-600 to-teal-500', activeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' }
];

// ── Slide Decks ─────────────────────────────────────────────────────────────
export const IONIC_EQUILIBRIUM_SLIDES = [
  {
    slideNumber: 1,
    tag: 'CLASS 12 CHEMISTRY · CHAPTER STUDY',
    title: 'Ionic Equilibrium',
    subtitle: 'Ions, acids, bases, buffers, hydrolysis, and solubility.',
    extra: 'Maharashtra State Board preparation · Board + entrance-exam practice',
    type: 'hero',
    illustration: 'beaker-ions'
  },
  {
    slideNumber: 2,
    tag: 'CHAPTER MAP',
    title: 'Choose an equilibrium concept',
    type: 'grid',
    items: [
      { num: '01', title: 'Electrolytes', desc: 'Ions, ionisation, and degree of dissociation.' },
      { num: '02', title: 'Acid–base theories', desc: 'Arrhenius, Brønsted–Lowry, Lewis, and conjugate pairs.' },
      { num: '03', title: 'Ionisation constants', desc: "Ka, Kb, pKa, pKb, and Ostwald's dilution law." },
      { num: '04', title: 'Water and pH', desc: 'Kw, pH, pOH, and concentration scales.' },
      { num: '05', title: 'Buffers', desc: 'Common-ion effect and resistance to pH change.' },
      { num: '06', title: 'Salts and solubility', desc: 'Hydrolysis, Ksp, ionic product, and precipitation.' },
      { num: '07', title: 'Practice path', desc: 'Numericals, MCQs, board preparation, revision, and formula sheet.' }
    ]
  },
  {
    slideNumber: 3,
    tag: 'EXAM PRIORITY · GUIDE',
    title: 'Board and entrance-exam focus by subtopic',
    type: 'table',
    headers: ['Focus', 'What to practise'],
    rows: [
      { col1: 'Board', col2: 'Definitions, equilibrium expressions, pH calculations, buffer action, hydrolysis, Ksp, and numerical reasoning.' },
      { col1: 'Entrance', col2: 'Rapid pH, Ka/Kb, degree of dissociation, common-ion, buffer, and precipitation calculations.' },
      { col1: 'Use caution', col2: 'Do not treat any chapter-wise entrance-exam mark count as fixed unless an official blueprint confirms it.' }
    ]
  },
  {
    slideNumber: 4,
    tag: 'ORIENTATION',
    title: 'Electrolytes form ions in solution',
    type: 'concept',
    lead: 'Ionisation extent classifies electrolytes; aqueous ions conduct electricity.',
    body: 'Strong electrolytes ionise almost completely. Weak electrolytes ionise partially and establish dynamic equilibrium. Non-electrolytes do not produce ions in aqueous solution.',
    diagram: 'beaker'
  },
  {
    slideNumber: 5,
    tag: 'MEASURE THE EXTENT',
    title: 'Degree of dissociation measures ionisation',
    type: 'definition-split',
    defTitle: 'Definition',
    formula: 'α = ionised amount / initial amount',
    defNote: 'For a weak electrolyte, dilution usually increases α.',
    sideTitle: 'Keep terms separate',
    points: [
      'α describes the fraction ionised.',
      'Concentration describes amount per volume.',
      'Conductivity describes charge transport.'
    ]
  },
  {
    slideNumber: 6,
    tag: 'PRACTICE CHECK · UNSOURCED',
    title: 'Check yourself: electrolytes',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'MCQ 1. Classify a substance as strong, weak, or non-electrolyte.',
        hint: 'Use the extent of ion formation in aqueous solution.',
        ans: 'Strong: almost complete ionisation. Weak: partial ionisation. Non-electrolyte: no appreciable ions.'
      },
      {
        q: 'MCQ 2. Predict how dilution changes the degree of dissociation.',
        hint: 'Think about the equilibrium of a weak electrolyte.',
        ans: 'Dilution usually increases α for a weak electrolyte.'
      }
    ],
    footer: 'Practice questions, not verified past-paper questions.'
  },
  {
    slideNumber: 7,
    tag: 'THREE LENSES',
    title: 'Acid–base theories give different lenses',
    type: 'three-columns',
    lead: 'Each theory expands the range of reactions that can be described.',
    items: [
      { title: 'Arrhenius', desc: 'Acid produces H⁺ in water; base produces OH⁻.' },
      { title: 'Brønsted–Lowry', desc: 'Acid donates a proton; base accepts a proton.' },
      { title: 'Lewis', desc: 'Acid accepts an electron pair; base donates one.' }
    ]
  },
  {
    slideNumber: 8,
    tag: 'PROTON TRANSFER',
    title: 'Conjugate acid–base pairs',
    type: 'concept-diagram',
    lead: 'An acid and its conjugate base differ by one proton. A stronger acid has a weaker conjugate base.',
    highlight: 'Track the proton, not just the labels.',
    flow: ['NH₄⁺ → NH₃', 'H⁺ Transfer', 'H₂O → OH⁻']
  },
  {
    slideNumber: 9,
    tag: 'PRACTICE CHECK · UNSOURCED',
    title: 'Check yourself: acid–base theories',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'MCQ 3. Identify the Brønsted acid and base in a reaction.',
        hint: 'Find the proton donor and proton acceptor.',
        ans: 'The Brønsted acid donates H⁺; the Brønsted base accepts H⁺.'
      },
      {
        q: 'MCQ 4. Identify the Lewis acid and Lewis base in a coordination reaction.',
        hint: 'Look for electron-pair acceptance and donation.',
        ans: 'The Lewis acid accepts an electron pair; the Lewis base donates it.'
      }
    ]
  },
  {
    slideNumber: 10,
    tag: 'WEAK ELECTROLYTES',
    title: 'Ionisation constants measure weak-acid strength',
    type: 'split-formula',
    left: {
      lead: 'For HA ⇌ H⁺ + A⁻:',
      formula: 'Ka = [H⁺][A⁻] / [HA]',
      note: 'For a weak base, Kb uses the corresponding equilibrium concentrations.'
    },
    right: {
      badge: 'Read the logarithm',
      formula: 'pKa = −log Ka',
      note: 'Smaller pKa means a stronger acid.'
    }
  },
  {
    slideNumber: 11,
    tag: 'DILUTION RELATION',
    title: "Ostwald's dilution law",
    type: 'split-formula',
    left: {
      lead: 'For a weak electrolyte of concentration C and degree of dissociation α:',
      formula: 'K = Cα² / (1 − α)',
      note: 'For small α, K ≈ Cα².'
    },
    right: {
      badge: 'Interpretation',
      points: [
        'Dilution increases α.',
        'The equilibrium constant does not change at fixed temperature.',
        'The composition shifts; K remains characteristic of the equilibrium.'
      ]
    }
  },
  {
    slideNumber: 12,
    tag: 'PRACTICE · WORKED EXAMPLE 1',
    title: 'Weak-acid dissociation',
    type: 'worked-example',
    grid: [
      { label: 'Given', val: 'Weak-acid concentration C and Ka.' },
      { label: 'Find', val: 'α and approximate ion concentrations.' },
      { label: 'Formula', val: 'Ka ≈ Cα²' },
      { label: 'Substitution', val: 'Insert C and Ka with units.' },
      { label: 'Calculation', val: 'α ≈ √(Ka/C)' },
      { label: 'Answer', val: 'Report α and [H⁺] ≈ Cα.' }
    ],
    footer: 'Practice method, not a verified past-paper question. Check that α is small before using the approximation.'
  },
  {
    slideNumber: 13,
    tag: 'PRACTICE CHECK · UNSOURCED',
    title: 'Check yourself: Ka and Kb',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'MCQ 5. Compare acid strength from Ka or pKa values.',
        hint: 'A larger Ka means stronger acid; a smaller pKa means stronger acid.',
        ans: 'Choose the larger Ka, or the smaller pKa.'
      },
      {
        q: 'MCQ 6. Use Ka and concentration to estimate [H⁺] for a weak acid.',
        hint: 'Use the small-dissociation approximation only when justified.',
        ans: '[H⁺] ≈ √(KaC).'
      }
    ]
  },
  {
    slideNumber: 14,
    tag: 'AUTOIONISATION OF WATER',
    title: 'Water ionises to a very small extent',
    type: 'water-equilibrium',
    simplified: 'H₂O ⇌ H⁺ + OH⁻',
    accurate: '2H₂O ⇌ H₃O⁺ + OH⁻',
    constant: 'Kw = [H⁺][OH⁻]',
    condition: 'At 25 °C, neutral water has equal H⁺ and OH⁻ concentrations.'
  },
  {
    slideNumber: 15,
    tag: 'LOGARITHMIC SCALE',
    title: 'pH and pOH compress concentration scales',
    type: 'dual-scale',
    left: { title: 'pH = −log[H⁺]', desc: 'Acidic solutions have larger [H⁺].' },
    right: { title: 'pOH = −log[OH⁻]', desc: 'Basic solutions have larger [OH⁻].' },
    footer: 'At 25 °C: pH + pOH = 14. pH below 7 is acidic; pH above 7 is basic.'
  },
  {
    slideNumber: 16,
    tag: 'PRACTICE · WORKED EXAMPLE 2',
    title: 'pH of a strong acid',
    type: 'worked-example',
    grid: [
      { label: 'Given', val: 'Molar concentration C of a strong monoprotic acid.' },
      { label: 'Find', val: '[H⁺], pH, and pOH.' },
      { label: 'Formula', val: '[H⁺] = C' },
      { label: 'Substitution', val: 'Use C in mol L⁻¹.' },
      { label: 'Calculation', val: 'pH = −log C; then pOH = 14 − pH.' },
      { label: 'Answer', val: 'Report [H⁺], pH, and pOH.' }
    ],
    footer: 'At 25 °C, use pH + pOH = 14.'
  },
  {
    slideNumber: 17,
    tag: 'PRACTICE CHECK · UNSOURCED',
    title: 'Check yourself: water and pH',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'MCQ 7. Find pH from [H⁺] = 1 × 10⁻³ mol L⁻¹.',
        hint: 'Use pH = −log[H⁺].',
        ans: 'Answer: pH = 3.'
      },
      {
        q: 'MCQ 8. Find [OH⁻] from pH at 25 °C.',
        hint: 'First find pOH, then convert.',
        ans: 'Answer. First find pOH = 14 − pH, then [OH⁻] = 10^(−pOH) mol L⁻¹.'
      }
    ]
  },
  {
    slideNumber: 18,
    tag: 'APPROXIMATION TOOL',
    title: 'Weak-acid and weak-base pH',
    type: 'split-box',
    box1: { title: 'Weak acid', formula: '[H⁺] ≈ √(KaC)', step: 'Then calculate pH from [H⁺].' },
    box2: { title: 'Weak base', formula: '[OH⁻] ≈ √(KbC)', step: 'Then calculate pOH and pH.' },
    footer: 'Check that the estimated degree of dissociation is small before using either approximation.'
  },
  {
    slideNumber: 19,
    tag: 'EQUILIBRIUM SHIFT',
    title: 'Common-ion effect shifts equilibrium',
    type: 'bullet-focus',
    points: [
      'Adding an ion already present suppresses dissociation of a weak electrolyte.',
      "Use Le Châtelier's principle: the equilibrium shifts away from the added ion.",
      'Applications include buffers, selective precipitation, and qualitative analysis.'
    ]
  },
  {
    slideNumber: 20,
    tag: 'CONTROLLED PH',
    title: 'Buffer solutions resist pH change',
    type: 'split-box',
    box1: { title: 'Acidic buffer', desc: 'Weak acid plus its conjugate salt.', formula: 'pH = pKa + log([salt]/[acid])' },
    box2: { title: 'Basic buffer', desc: 'Weak base plus its conjugate salt.', formula: 'pOH = pKb + log([salt]/[base])' },
    footer: 'The conjugate pair consumes small added amounts of acid or base, limiting the pH change.'
  },
  {
    slideNumber: 21,
    tag: 'PRACTICE · WORKED EXAMPLE 3',
    title: 'Acidic buffer',
    type: 'worked-example',
    grid: [
      { label: 'Given', val: 'pKa and the salt-to-acid concentration ratio.' },
      { label: 'Find', val: 'pH of the buffer.' },
      { label: 'Formula', val: 'pH = pKa + log([salt]/[acid])' },
      { label: 'Substitution', val: 'Insert the ratio without changing its order.' },
      { label: 'Calculation', val: 'Evaluate the logarithm and add pKa.' },
      { label: 'Answer', val: 'Report pH with suitable precision.' }
    ]
  },
  {
    slideNumber: 22,
    tag: 'PRACTICE CHECK · UNSOURCED',
    title: 'Check yourself: buffers',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'MCQ 9. Which mixture forms an acidic buffer?',
        hint: 'Look for a weak acid and its conjugate salt.',
        ans: 'Answer. A weak acid plus the salt of its conjugate base forms an acidic buffer.'
      },
      {
        q: 'MCQ 10. Predict the pH change when a small amount of acid is added to a buffer.',
        hint: 'Compare the change with the same acid added to pure water.',
        ans: 'Answer. The pH decreases only slightly because the buffer consumes much of the added H⁺.'
      }
    ]
  },
  {
    slideNumber: 23,
    tag: 'SALT SOLUTIONS',
    title: 'Salt hydrolysis changes solution pH',
    type: 'cards-3',
    items: [
      { title: 'Strong acid + strong base', status: 'Approximately neutral (pH ≈ 7).' },
      { title: 'Weak acid + strong base', status: 'Basic solution (pH > 7).' },
      { title: 'Strong acid + weak base', status: 'Acidic solution (pH < 7).' }
    ]
  },
  {
    slideNumber: 24,
    tag: 'HYDROLYSIS RELATIONS',
    title: 'Hydrolysis constants and degree of hydrolysis',
    type: 'quad-grid',
    items: [
      { title: 'Connect constants', desc: 'Relate Kh to Ka, Kb, and Kw for the salt type.' },
      { title: 'Estimate extent', desc: 'Use concentration and Kh to estimate hydrolysis when the approximation is appropriate.' },
      { title: 'Check the model', desc: 'Separate hydrolysis from simple dilution.' },
      { title: 'Report clearly', desc: 'State whether the final solution is acidic, basic, or approximately neutral.' }
    ]
  },
  {
    slideNumber: 25,
    tag: 'SPARINGLY SOLUBLE SALTS',
    title: 'Solubility equilibrium and Ksp',
    type: 'concept',
    lead: 'A sparingly soluble salt establishes equilibrium between the solid and its ions.',
    body: 'Ksp is the product of equilibrium ion concentrations, each raised to its stoichiometric power. Use molar solubility s to build the expression.'
  },
  {
    slideNumber: 26,
    tag: 'PRACTICE · WORKED EXAMPLE 4',
    title: 'Ksp and precipitation',
    type: 'worked-example',
    grid: [
      { label: 'Given', val: 'Ksp and the salt stoichiometry.' },
      { label: 'Find', val: 'Molar solubility or precipitation tendency.' },
      { label: 'Formula', val: 'Build Ksp from the dissolution equation.' },
      { label: 'Substitution', val: 'Write each ion concentration in terms of s.' },
      { label: 'Calculation', val: 'Compare ionic product Q with Ksp.' },
      { label: 'Answer', val: 'Q > Ksp: precipitation is predicted.' }
    ]
  },
  {
    slideNumber: 27,
    tag: 'PRACTICE CHECK · UNSOURCED',
    title: 'Check yourself: Ksp',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'MCQ 11. Write the Ksp expression for a 1:2 salt.',
        hint: 'For MX₂(s) ⇌ M²⁺ + 2X⁻, include the squared anion concentration.',
        ans: 'Answer. Ksp = [M²⁺][X⁻]².'
      },
      {
        q: 'MCQ 12. Predict precipitation by comparing ionic product and Ksp.',
        hint: 'Compare Q with Ksp.',
        ans: 'Answer. Q > Ksp: precipitation; Q = Ksp: saturation; Q < Ksp: no precipitation predicted.'
      }
    ]
  },
  {
    slideNumber: 28,
    tag: 'QUICK REVISION',
    title: 'Formula sheet: Ionic Equilibrium',
    type: 'table',
    headers: ['Topic', 'Formula'],
    rows: [
      { col1: 'Weak acid/base', col2: 'Ka = [H⁺][A⁻]/[HA]; Kb = [BH⁺][OH⁻]/[B]' },
      { col1: 'Water and pH', col2: 'Kw = [H⁺][OH⁻]; pH = −log[H⁺]; pOH = −log[OH⁻]' },
      { col1: 'At 25 °C', col2: 'pH + pOH = 14' },
      { col1: 'Approximation', col2: '[H⁺] ≈ √(KaC); [OH⁻] ≈ √(KbC)' },
      { col1: 'Buffer', col2: 'pH = pKa + log([salt]/[acid])' },
      { col1: 'Solubility', col2: 'Ksp is the ionic concentration product at saturation.' }
    ]
  },
  {
    slideNumber: 29,
    tag: 'ERROR CHECK',
    title: 'Revision notes and common mistakes',
    type: 'cards-grid',
    items: [
      { title: 'Equilibrium values', desc: 'Use equilibrium concentrations, not initial concentrations, in Ka, Kb, and Ksp.' },
      { title: 'Notation', desc: 'Do not confuse pKa with Ka or pH with [H⁺].' },
      { title: 'Stoichiometry', desc: 'Check stoichiometric powers in Ksp expressions.' },
      { title: 'Temperature', desc: 'Use 25 °C only when applying pH + pOH = 14.' },
      { title: 'Buffer identity', desc: 'Confirm the acid/base pair before choosing a buffer formula.' }
    ]
  },
  {
    slideNumber: 30,
    tag: 'EXAM PREPARATION',
    title: 'Board exam preparation',
    type: 'split-boxes-numbered',
    left: {
      num: '01',
      items: [
        { label: 'Define', val: 'Electrolytes, acids, bases, equilibrium constants, buffers, hydrolysis, and Ksp.' },
        { label: 'Explain', val: 'Ionisation, acid–base theories, conjugate pairs, common-ion effect, buffer action, and precipitation conditions.' },
        { label: 'Derive', val: "Ostwald's dilution law, pH derivations and relations, and hydrolysis expressions." }
      ]
    },
    right: {
      num: '02',
      items: [
        { label: 'Calculate', val: 'Ka/Kb, pH, buffer, hydrolysis, solubility, and ionic-product numericals.' },
        { label: 'Check', val: 'Finish with units, logarithms, approximations, and stoichiometric powers.' }
      ]
    }
  },
  {
    slideNumber: 31,
    tag: 'LAST-MINUTE CHECK',
    title: 'Last-minute revision checklist',
    type: 'checklist-grid',
    items: [
      'Write the equilibrium equation before the constant expression.',
      'Track stoichiometric powers and units.',
      'Use logarithms carefully and keep concentrations in mol L⁻¹.',
      'Check whether the solution is strong, weak, buffered, hydrolysed, or saturated.',
      'Finish with one pH, one buffer, one hydrolysis, and one Ksp problem.'
    ]
  },
  {
    slideNumber: 32,
    tag: 'REFERENCES AND SOURCE NOTE',
    title: 'References and source note',
    type: 'reference-note',
    points: [
      'Use the current Maharashtra State Board / Balbharati Standard XII Chemistry textbook for final terminology and scope.',
      'Do not claim previous-year status for unsourced questions.',
      'Optional videos, if added later, are supplementary and not official.',
      'Check final exam wording and prescribed scope against your current textbook.'
    ]
  }
];

// ── ROTATIONAL DYNAMICS (Class 12 / 11 Physics) ──────────────────────────────
export const ROTATIONAL_DYNAMICS_SLIDES = [
  {
    slideNumber: 1,
    tag: 'CLASS 12 PHYSICS · CHAPTER STUDY',
    title: 'Rotational Dynamics',
    subtitle: 'How forces turn objects, how rotation stores motion, and how conservation laws help us predict what happens next.',
    extra: 'Maharashtra State Board preparation',
    type: 'hero',
    illustration: 'bicycle-wheel'
  },
  {
    slideNumber: 2,
    tag: 'EXAM PRIORITY · GUIDE',
    title: 'Board and MHT-CET focus by subtopic',
    type: 'table-3col',
    headers: ['Subtopic', 'Board focus', 'MHT-CET practice focus'],
    rows: [
      { col1: 'Angular motion and kinematics', col2: 'ω, α, θ; ω = ω₀ + αt', col3: 'High: equation selection' },
      { col1: 'Torque and equilibrium', col2: 'τ = rF sinθ; ΣF = 0, Στ = 0', col3: 'High: angle and arm errors' },
      { col1: 'Moment of inertia and theorems', col2: 'I = Σmr²; parallel and perpendicular axis', col3: 'High: standard bodies' },
      { col1: 'Angular momentum and conservation', col2: 'L = Iω; zero external torque', col3: 'High: ratio questions' },
      { col1: 'Rolling motion', col2: 'v = Rω; K = ½Mv² + ½Iω²', col3: 'High: combined energy' },
      { col1: 'Rotational kinetic energy', col2: '½Iω²', col3: 'Medium: short numericals' },
      { col1: 'Linear–angular link', col2: 'v = rω; a_t = rα', col3: 'Medium' }
    ],
    note: 'Maharashtra HSC 2026 reports list this chapter as 5 marks, or 7 marks with options.'
  },
  {
    slideNumber: 3,
    tag: 'ORIENTATION',
    title: 'What changes when an object spins?',
    type: 'orientation-arc',
    lead: 'A spin continuously changes orientation: points on one connected body can travel different distances.',
    summary: 'By the end: describe angular motion; calculate torque and moment of inertia; apply conservation laws; solve board-style numericals; test your understanding.',
    steps: [
      { name: 'Notice', desc: 'See the motion.' },
      { name: 'Name', desc: 'Choose the quantity.' },
      { name: 'Calculate', desc: 'Use the condition.' },
      { name: 'Check', desc: 'Test units and direction.' }
    ]
  },
  {
    slideNumber: 4,
    tag: 'TWO VIEWS OF MOTION',
    title: 'Translation and rotation are two views of motion',
    type: 'split-box',
    box1: { title: 'Translation', desc: 'Every point moves through the same displacement.', eg: 'Example: a lift moving upward.' },
    box2: { title: 'Rotation', desc: 'Points move through different distances about a fixed axis.', eg: 'Examples: bicycle wheel, ceiling fan, spinning top, car wheel.' }
  },
  {
    slideNumber: 5,
    tag: 'ANGULAR DISPLACEMENT',
    title: 'Angle is the natural language of rotation',
    type: 'formula-card',
    lead: 'Angular displacement θ is measured in radians.',
    stat: '2π rad = one complete revolution',
    formula: 's = rθ',
    subtext: 'arc length relation'
  },
  {
    slideNumber: 6,
    tag: 'RATE OF ROTATION',
    title: 'Angular velocity and angular acceleration',
    type: 'split-box',
    box1: { title: 'ω = Δθ / Δt', desc: 'Angular velocity · rad s⁻¹' },
    box2: { title: 'α = Δω / Δt', desc: 'Angular acceleration · rad s⁻²' },
    footer: 'Velocity is the rate of change of angle; acceleration is the rate of change of angular velocity.'
  },
  {
    slideNumber: 7,
    tag: 'PRACTICE CHECK',
    title: 'Check yourself: angular quantities',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'Q1. A wheel turns through 4π rad in 2 s. Find its average angular velocity.',
        ans: 'Answer: 2π rad s⁻¹ ≈ 6.28 rad s⁻¹. Given Δθ = 4π rad, Δt = 2 s. Formula ω = Δθ/Δt. Calculation gives 2π rad s⁻¹.'
      },
      {
        q: 'Q2. Can α be zero while ω is large and non-zero?',
        ans: 'Answer: Yes. α = Δω/Δt is zero when ω stays constant, for example a steadily spinning wheel.'
      }
    ]
  },
  {
    slideNumber: 8,
    tag: 'FROM ANGULAR TO LINEAR',
    title: 'Linear quantities follow from angular quantities',
    type: 'split-formula',
    left: {
      lead: 'At radius r, angular motion becomes linear motion along the tangent.',
      formulas: ['v = rω  (Tangential speed)', 'aₜ = rα  (Tangential acceleration)']
    },
    right: {
      badge: 'Position & Speed',
      points: [
        'Near axis: small r, low linear speed',
        'Midway: larger r, moderate linear speed',
        'Rim: largest v (points farther move faster)'
      ]
    }
  },
  {
    slideNumber: 9,
    tag: 'PRACTICE · WORKED EXAMPLE 1',
    title: 'From revolutions to speed',
    type: 'worked-example',
    grid: [
      { label: 'Given', val: 'n = 5 revolutions, t = 10 s, r = 0.20 m' },
      { label: 'Find', val: 'ω and rim speed v' },
      { label: 'Formula', val: 'θ = 2πn; ω = θ/t; v = rω' },
      { label: 'Substitution', val: 'θ = 2π(5) = 10π rad; ω = 10π / 10' },
      { label: 'Calculation', val: 'ω = π ≈ 3.14 rad s⁻¹; v = 0.20 × π ≈ 0.63 m s⁻¹' },
      { label: 'Answer', val: 'v ≈ 0.63 m s⁻¹' }
    ]
  },
  {
    slideNumber: 10,
    tag: 'CIRCULAR MOTION',
    title: 'Uniform circular motion needs inward acceleration',
    type: 'split-box',
    box1: { title: 'a_c = v² / r = rω²', desc: 'Centripetal acceleration pointing toward centre.' },
    box2: { title: 'a_t = rα', desc: 'Tangential acceleration changing speed.' },
    footer: 'At constant speed, velocity continuously changes direction. Acceleration points toward the centre.'
  },
  {
    slideNumber: 11,
    tag: 'PRACTICE CHECK',
    title: 'Check yourself: circular motion',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'Q3. A car moves at 10 m s⁻¹ on a circular track of radius 50 m. Find its centripetal acceleration.',
        ans: 'Answer: 2 m s⁻², toward the centre. Given v = 10, r = 50. Formula a_c = v²/r = 100/50 = 2 m s⁻².'
      },
      {
        q: 'Q4. A point 0.5 m from the axis has ω = 4 rad s⁻¹. Find its centripetal acceleration.',
        ans: 'Answer: 8 m s⁻². Formula a_c = rω² = 0.5 × 16 = 8 m s⁻².'
      }
    ]
  },
  {
    slideNumber: 12,
    tag: 'MCQ PRACTICE',
    title: 'MCQ practice: circular motion',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'Q3. At fixed ω, doubling the radius makes v:',
        hint: 'A half · B same · C double · D zero',
        ans: 'Answer: C double. v = rω is proportional to r.'
      }
    ]
  },
  {
    slideNumber: 13,
    tag: 'KINEMATICS',
    title: 'Rotational kinematics mirrors linear kinematics',
    type: 'formula-row',
    formulas: [
      { eq: 'ω = ω₀ + αt', label: '1st Equation' },
      { eq: 'θ = ω₀t + ½αt²', label: '2nd Equation' },
      { eq: 'ω² = ω₀² + 2αθ', label: '3rd Equation' },
      { eq: 'θ = ½(ω₀ + ω)t', label: 'Average Velocity' }
    ]
  },
  {
    slideNumber: 14,
    tag: 'ANALOGY',
    title: 'Linear and rotational equations side by side',
    type: 'table',
    headers: ['Linear', 'Rotational', 'Meaning', 'SI unit'],
    rows: [
      { col1: 's', col2: 'θ', col3: 'Displacement', col4: 'm / rad' },
      { col1: 'v', col2: 'ω', col3: 'Rate of change', col4: 'm s⁻¹ / rad s⁻¹' },
      { col1: 'a', col2: 'α', col3: 'Change of rate', col4: 'm s⁻² / rad s⁻²' },
      { col1: 'm', col2: 'I', col3: 'Inertia', col4: 'kg / kg m²' },
      { col1: 'F', col2: 'τ', col3: 'Cause of change', col4: 'N / N m' }
    ]
  },
  {
    slideNumber: 17,
    tag: 'TURNING EFFECT',
    title: 'Torque measures turning effectiveness',
    type: 'formula-card',
    lead: 'Torque is the turning effect of a force about an axis. Its size depends on force, distance, and angle.',
    formula: 'τ = rF sin θ',
    stat: 'SI unit: N · m (clockwise or anticlockwise)'
  },
  {
    slideNumber: 18,
    tag: 'MOMENT ARM',
    title: 'Why the perpendicular distance matters',
    type: 'split-box',
    box1: { title: 'Short handle', desc: 'Small perpendicular distance → smaller torque.' },
    box2: { title: 'Long handle', desc: 'Large perpendicular distance → larger torque (Door handle far from hinge, spanner with long arm).' }
  },
  {
    slideNumber: 22,
    tag: 'A COUPLE',
    title: 'A couple turns without translating',
    type: 'split-box',
    box1: { title: 'ΣF = 0', desc: 'No translation (forces cancel).' },
    box2: { title: 'τ ≠ 0', desc: 'Rotation remains (Moment of couple = force × perpendicular separation).' }
  },
  {
    slideNumber: 24,
    tag: 'EQUILIBRIUM',
    title: 'Equilibrium needs two balances',
    type: 'split-box',
    box1: { title: 'ΣF = 0', desc: 'Translational equilibrium (no net acceleration).' },
    box2: { title: 'Στ = 0', desc: 'Rotational equilibrium (no angular acceleration).' },
    footer: 'An object is fully in equilibrium only when it neither translates nor rotates.'
  },
  {
    slideNumber: 28,
    tag: 'ROTATIONAL INERTIA',
    title: 'Moment of inertia is rotational inertia',
    type: 'formula-card',
    lead: 'Moment of inertia measures how strongly a body resists angular acceleration about a chosen axis.',
    formula: 'I = Σ mᵢ rᵢ²',
    stat: 'SI unit: kg m² · Dimensions: [M L²]'
  },
  {
    slideNumber: 29,
    tag: 'RADIUS OF GYRATION',
    title: 'Radius of gyration gives one useful distance',
    type: 'formula-card',
    formula: 'I = M k²  ⇒  k² = I / M',
    subtext: 'Compact mass: small k → small I. Spread-out mass: large k → large I.'
  },
  {
    slideNumber: 30,
    tag: 'STANDARD BODIES',
    title: 'Moment of Inertia of Standard Bodies',
    type: 'table',
    headers: ['Body', 'Axis', 'Moment of inertia', 'Visual cue'],
    rows: [
      { col1: 'Thin ring', col2: 'Centre, perpendicular', col3: 'MR²', col4: 'Mass at rim' },
      { col1: 'Disc', col2: 'Centre, perpendicular', col3: '½ MR²', col4: 'Mass spread inward' },
      { col1: 'Rod', col2: 'Centre, perpendicular', col3: '1/12 ML²', col4: 'Axis through centre' },
      { col1: 'Solid sphere', col2: 'Diameter', col3: '2/5 MR²', col4: 'Mass throughout' }
    ]
  },
  {
    slideNumber: 32,
    tag: 'SHIFTED AXES',
    title: 'Parallel-axis theorem',
    type: 'split-box',
    box1: { title: 'I = I_cm + M h²', desc: 'Moving the axis away from the centre of mass increases rotational inertia.' },
    box2: { title: 'Parameters', desc: 'I_cm: moment of inertia about COM axis; h: separation between parallel axes.' }
  },
  {
    slideNumber: 33,
    tag: 'PLANE LAMINA',
    title: 'Perpendicular-axis theorem',
    type: 'split-box',
    box1: { title: 'I_z = I_x + I_y', desc: 'For a plane lamina, x and y lie in its plane; z is perpendicular. The three axes meet at one origin.' },
    box2: { title: 'Derivation clue', desc: 'r² = x² + y², so Σ r² dm = Σ x² dm + Σ y² dm = I_y + I_x.' }
  },
  {
    slideNumber: 38,
    tag: 'ANGULAR MOMENTUM',
    title: 'Angular momentum belongs to rotation',
    type: 'formula-card',
    lead: 'Angular momentum describes the rotational state of a body. Its direction follows the right-hand rule.',
    formula: 'L = Iω',
    stat: 'SI unit: kg m² s⁻¹ · Dimensions: [M L² T⁻¹]'
  },
  {
    slideNumber: 41,
    tag: 'CONSERVATION',
    title: 'Conservation of angular momentum',
    type: 'split-box',
    box1: { title: 'I₁ω₁ = I₂ω₂', desc: 'If external torque is zero, total angular momentum remains constant.' },
    box2: { title: 'Dynamic relationship', desc: 'When I decreases, ω increases (e.g. skater pulling arms inward).' }
  },
  {
    slideNumber: 45,
    tag: 'ENERGY',
    title: 'Rotational kinetic energy',
    type: 'split-box',
    box1: { title: 'K_r = ½ I ω²', desc: 'Rotational kinetic energy stored in spinning mass.' },
    box2: { title: 'K_t = ½ M v²', desc: 'Translational kinetic energy of centre of mass.' }
  },
  {
    slideNumber: 46,
    tag: 'ROLLING',
    title: 'Pure rolling combines two motions',
    type: 'formula-card',
    lead: 'Translation at the centre; rotation about it. No slipping condition links the motions.',
    formula: 'v = Rω  (Rolling without slipping)',
    stat: 'Total Kinetic Energy: K = ½ M v² + ½ I ω² = ½ M v² [1 + k²/R²]'
  },
  {
    slideNumber: 55,
    tag: 'BOARD EXAM PREPARATION',
    title: 'HSC Board Exam Revision & Derivations',
    type: 'bullet-focus',
    points: [
      'Definitions: Torque (τ = r F sinθ); couple; moment of inertia (I = Σmr²); radius of gyration (k = √(I/M)); angular momentum (L = Iω); pure rolling (v = Rω).',
      'Derivations: ω = ω₀ + αt and θ = ω₀t + ½αt²; I of a solid disc (½MR²); parallel-axis theorem (I = I_cm + Md²); L = Iω and τ = dL/dt; rolling kinetic energy ½Mv²(1 + k²/R²).',
      'Full-mark answer tip: write given data with units, name the principle, substitute and compute, then state final answer with unit and direction.'
    ]
  },
  {
    slideNumber: 57,
    tag: 'MOMENT OF INERTIA',
    title: 'Solved questions: moment of inertia',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'Q1. Verified previous-board question (2024, Maharashtra HSC Physics): Find the moment of inertia of a uniform disc of mass M and radius R about its central axis.',
        ans: 'Answer: I = ½ MR². For a uniform disc, mass is distributed from axis to rim. Derived using ring element dm = σ·2πr dr, integrating from 0 to R.'
      }
    ]
  },
  {
    slideNumber: 58,
    tag: 'TORQUE AND POWER',
    title: 'Solved questions: torque and power',
    type: 'mcq-interactive',
    questions: [
      {
        q: 'Q1. Verified previous-board question (2025, Maharashtra HSC Physics): A ceiling fan rotates with a constant torque of 2 N m and angular speed of 2π rad/s. Find the power.',
        ans: 'Answer: P = 4π W. Using P = τω = (2 N m)(2π rad/s) = 4π W ≈ 12.57 Watts.'
      }
    ]
  },
  {
    slideNumber: 66,
    tag: 'QUICK REVISION',
    title: 'Formula map for quick revision',
    type: 'table',
    headers: ['Topic', 'Formula', 'Use when', 'Unit / check'],
    rows: [
      { col1: 'Angular motion', col2: 'ω = Δθ/Δt; α = Δω/Δt', col3: 'Rates are needed', col4: 'rad s⁻¹, rad s⁻²' },
      { col1: 'Torque', col2: 'τ = rF sinθ', col3: 'Turning effect', col4: 'N m; angle matters' },
      { col1: 'Inertia', col2: 'I = Σmr²; I = Mk²', col3: 'Mass distribution', col4: 'kg m²; axis matters' },
      { col1: 'Momentum', col2: 'L = Iω; τ = dL/dt', col3: 'Rotational dynamics', col4: 'kg m² s⁻¹' },
      { col1: 'Rolling', col2: 'v = Rω; K = ½Mv² + ½Iω²', col3: 'No slipping condition', col4: 'Joules (J)' }
    ]
  },
  {
    slideNumber: 70,
    tag: 'REFERENCES AND SOURCE NOTE',
    title: 'References and source note',
    type: 'reference-note',
    points: [
      'Prescribed source: Maharashtra State Board / Balbharati Standard XII Physics textbook.',
      'This deck uses the official Maharashtra syllabus specification and standard physics relations for illustrative learning.',
      'Check final exam wording and prescribed scope against your current textbook.'
    ]
  }
];

// ── Chapters & Subjects Directory ───────────────────────────────────────────
// 6 PPT decks per subject/chapter as requested by the user:
// 1st 2 are accessible (unlocked), remaining 4 are locked.
export const PPT_CATALOG = {
  chemistry: [
    {
      id: 'chem-ionic-eq',
      chapterNumber: 1,
      title: 'Ionic Equilibrium',
      subtitle: 'Ions, acids, bases, buffers, hydrolysis, and solubility',
      slidesCount: 32,
      isUnlocked: true,
      badge: 'Free Demo Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: IONIC_EQUILIBRIUM_SLIDES,
      pdfUrl: '/ionic-equilibrium.pdf',
      topics: ['Electrolytes & Dissociation', 'Acid-Base Theories', "Ostwald's Dilution Law", 'pH & pOH Scales', 'Buffer Solutions', 'Salt Hydrolysis & Ksp']
    },
    {
      id: 'chem-thermodynamics',
      chapterNumber: 2,
      title: 'Chemical Thermodynamics',
      subtitle: 'First & second laws, enthalpy, entropy, Gibbs energy & spontaneity',
      slidesCount: 28,
      isUnlocked: true,
      badge: 'Free Demo Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null, // sample unlocked
      pdfUrl: null,
      topics: ['System, Surrounding & Work', 'First Law of Thermodynamics', 'Enthalpy of Reactions', 'Hess Law of Constant Heat', 'Second Law & Entropy', 'Gibbs Free Energy ΔG']
    },
    {
      id: 'chem-kinetics',
      chapterNumber: 3,
      title: 'Chemical Kinetics',
      subtitle: 'Rate of reaction, order, molecularity & Arrhenius collision theory',
      slidesCount: 36,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      pdfUrl: null,
      topics: ['Average & Instantaneous Rate', 'Zero & 1st Order Kinetics', 'Integrated Rate Equations', 'Half-Life Derivations', 'Arrhenius Activation Energy']
    },
    {
      id: 'chem-electrochemistry',
      chapterNumber: 4,
      title: 'Electrochemistry',
      subtitle: 'Galvanic cells, Nernst equation, conductance & Kohlrausch law',
      slidesCount: 34,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      pdfUrl: null,
      topics: ['Electrochemical Cells', 'Standard Hydrogen Electrode', 'Nernst Equation Calculations', 'Conductivity & Molar Conductance', 'Dry Cells & Fuel Cells']
    },
    {
      id: 'chem-coordination',
      chapterNumber: 5,
      title: 'Coordination Compounds',
      subtitle: 'Ligands, Werner theory, VBT, crystal field theory & isomerism',
      slidesCount: 30,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      pdfUrl: null,
      topics: ['Werner Coordination Theory', 'IUPAC Nomenclature of Complexes', 'Valence Bond Theory (VBT)', 'Crystal Field Splitting (CFT)', 'Geometrical & Optical Isomerism']
    },
    {
      id: 'chem-halogen',
      chapterNumber: 6,
      title: 'Halogen Derivatives & Alcohols',
      subtitle: 'SN1/SN2 mechanisms, optical activity, preparation & chemical properties',
      slidesCount: 42,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      pdfUrl: null,
      topics: ['Classification of Haloalkanes', 'SN1 & SN2 Mechanism Steps', 'Chirality & Inversion of Configuration', 'Preparation of Alcohols & Phenols', 'Lucas Test & Chemical Reactions']
    }
  ],

  physics: [
    {
      id: 'phy-rotational-dyn',
      chapterNumber: 1,
      title: 'Rotational Dynamics',
      subtitle: 'Angular motion, torque, moment of inertia, parallel/perp axis theorems & rolling',
      slidesCount: 70,
      isUnlocked: true,
      badge: 'Free Demo Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: ROTATIONAL_DYNAMICS_SLIDES,
      pdfUrl: '/rotational-dynamics.pdf',
      topics: ['Angular Kinematics', 'Centripetal & Centrifugal Force', 'Torque & Couples', 'Moment of Inertia', 'Theorems of Axes', 'Conservation of Angular Momentum', 'Rolling Motion']
    },
    {
      id: 'phy-fluids',
      chapterNumber: 2,
      title: 'Mechanical Properties of Fluids',
      subtitle: 'Surface tension, streamline flow, Bernoulli equation & Stokes law',
      slidesCount: 32,
      isUnlocked: true,
      badge: 'Free Demo Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Pressure & Pascal Law', 'Surface Energy & Surface Tension', 'Angle of Contact & Capillarity', 'Equation of Continuity', 'Bernoulli Principle Applications']
    },
    {
      id: 'phy-kines-radiation',
      chapterNumber: 3,
      title: 'Kinetic Theory of Gases & Radiation',
      subtitle: 'Pressure expression, degrees of freedom & Planck radiation laws',
      slidesCount: 38,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Ideal Gas Equation & RMS Speed', 'Pressure Exerted by Gas Derivation', 'Equipartition of Energy', 'Blackbody Radiation Curves', 'Stefan-Boltzmann & Wien Displacement']
    },
    {
      id: 'phy-oscillations',
      chapterNumber: 4,
      title: 'Oscillations (SHM)',
      subtitle: 'Differential equations of SHM, simple pendulum & energy curves',
      slidesCount: 36,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Linear SHM Differential Equation', 'Velocity & Acceleration in SHM', 'Simple Pendulum Derivations', 'Kinetic & Potential Energy in SHM', 'Damped & Forced Oscillations']
    },
    {
      id: 'phy-superposition-waves',
      chapterNumber: 5,
      title: 'Superposition of Waves',
      subtitle: 'Stationary waves, resonance, harmonics in pipes & beats',
      slidesCount: 34,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Reflection of Transverse & Long. Waves', 'Formation of Stationary Waves', 'Vibrations of Air Columns in Pipes', 'Sonometer Experiments', 'Phenomenon of Beats']
    },
    {
      id: 'phy-current-electricity',
      chapterNumber: 6,
      title: 'Current Electricity',
      subtitle: "Kirchhoff's laws, Wheatstone network, meter bridge & potentiometer",
      slidesCount: 40,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ["Kirchhoff's Current & Voltage Laws", 'Wheatstone Bridge Balance Condition', 'Meter Bridge Unknown Resistance', 'Potentiometer Principle & EMF Comparison', 'Internal Resistance Measurement']
    }
  ],

  mathematics: [
    {
      id: 'math-differentiation',
      chapterNumber: 1,
      title: 'Differentiation & Chain Rule',
      subtitle: 'Derivative of composite, inverse trigonometric & implicit functions',
      slidesCount: 35,
      isUnlocked: true,
      badge: 'Free Demo Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Chain Rule for Derivatives', 'Inverse Trigonometric Derivatives', 'Logarithmic Differentiation', 'Implicit Functions & Parametric', 'Higher Order Derivatives']
    },
    {
      id: 'math-matrices',
      chapterNumber: 2,
      title: 'Matrices & Determinants',
      subtitle: 'Adjoint, inverse of matrix & solving system of linear equations',
      slidesCount: 30,
      isUnlocked: true,
      badge: 'Free Demo Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Elementary Row & Column Ops', 'Inverse by Adjoint Method', 'Inverse by Elementary Transformations', 'Method of Inversion & Reduction', 'Cramer Rule Comparison']
    },
    {
      id: 'math-vectors',
      chapterNumber: 3,
      title: 'Vectors & 3D Geometry',
      subtitle: 'Dot & cross products, scalar triple product, line & plane equations',
      slidesCount: 40,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Vector Operations & Direction Cosines', 'Scalar Triple Product & Volume', 'Vector Equation of Line', 'Shortest Distance Between Skew Lines', 'Equation of Plane in Normal Form']
    },
    {
      id: 'math-integration',
      chapterNumber: 4,
      title: 'Indefinite & Definite Integration',
      subtitle: 'Integration by parts, partial fractions & definite integral properties',
      slidesCount: 44,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Standard Integration Formulas', 'Integration by Substitution', 'Integration by Parts (LIATE)', 'Partial Fraction Decomposition', 'King Property of Definite Integrals']
    },
    {
      id: 'math-diff-equations',
      chapterNumber: 5,
      title: 'Differential Equations',
      subtitle: 'Order, degree, variable separable, homogeneous & linear differential equations',
      slidesCount: 32,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Formation of Differential Equations', 'Variable Separable Method', 'Homogeneous Differential Equations', 'Integrating Factor (IF) Method', 'Population & Decay Applications']
    },
    {
      id: 'math-probability',
      chapterNumber: 6,
      title: 'Probability Distributions & Binomial',
      subtitle: 'Random variables, probability mass function (pmf) & binomial distribution',
      slidesCount: 28,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Discrete & Continuous Variables', 'Probability Mass Function (p.m.f.)', 'Expected Value & Variance', 'Binomial Distribution P(X = r)', 'Mean & Variance np and npq']
    }
  ],

  biology: [
    {
      id: 'bio-reproduction-plants',
      chapterNumber: 1,
      title: 'Reproduction in Lower and Higher Plants',
      subtitle: 'Microsporogenesis, megasporogenesis, pollination & double fertilization',
      slidesCount: 32,
      isUnlocked: true,
      badge: 'Free Demo Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Asexual Reproduction & Vegetative', 'Structure of Anther & Pollen Grain', 'Structure of Anatropous Ovule', 'Pollination Mechanisms & Outbreeding', 'Double Fertilization & Embryo Sac']
    },
    {
      id: 'bio-reproduction-animals',
      chapterNumber: 2,
      title: 'Reproduction in Lower and Higher Animals',
      subtitle: 'Human male & female reproductive systems, gametogenesis & menstrual cycle',
      slidesCount: 36,
      isUnlocked: true,
      badge: 'Free Demo Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Male Reproductive Anatomy', 'Female Reproductive Anatomy', 'Spermatogenesis & Oogenesis', 'Hormonal Control of Menstrual Cycle', 'Fertilization, Cleavage & Implantation']
    },
    {
      id: 'bio-inheritance',
      chapterNumber: 3,
      title: 'Inheritance and Variation',
      subtitle: 'Mendelian genetics, sex determination, sex-linked traits & genetic disorders',
      slidesCount: 38,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Monohybrid & Dihybrid Crosses', 'Incomplete & Co-dominance', 'Chromosomal Theory of Inheritance', 'Color Blindness & Haemophilia', 'Thalassemia & Down Syndrome']
    },
    {
      id: 'bio-molecular-basis',
      chapterNumber: 4,
      title: 'Molecular Basis of Inheritance',
      subtitle: 'DNA replication, transcription, genetic code, translation & lac operon',
      slidesCount: 42,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Structure of DNA Double Helix', 'Meselson-Stahl Semi-conservative Exp', 'Transcription in Eukaryotes', 'Properties of Genetic Code', 'Lac Operon Gene Regulation']
    },
    {
      id: 'bio-biotechnology',
      chapterNumber: 5,
      title: 'Biotechnology: Principles & Processes',
      subtitle: 'Recombinant DNA technology, PCR, gel electrophoresis & gene cloning',
      slidesCount: 30,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Restriction Enzymes & Ligases', 'pBR322 Cloning Vector Features', 'Polymerase Chain Reaction (PCR)', 'Agarose Gel Electrophoresis', 'Bioreactors & Downstream Processing']
    },
    {
      id: 'bio-respiration-circulation',
      chapterNumber: 6,
      title: 'Respiration and Circulation',
      subtitle: 'Mechanism of respiration, cardiac cycle, ECG, blood pressure & lymph',
      slidesCount: 35,
      isUnlocked: false,
      badge: 'Locked Deck',
      board: 'Maharashtra State Board & CBSE',
      deckData: null,
      topics: ['Human Respiratory System', 'Gas Transport & Oxygen Dissociation', 'Internal Structure of Human Heart', 'Cardiac Cycle & Heart Sounds', 'ECG Waveform & Blood Pressure']
    }
  ]
};
