# Design research: Breaking Brisbane v2

Captured 24 Nov 2026 with headless Chrome (`research/shoot.sh`) at 1440×900 and 390×844, above-the-fold only.
Screenshots: `research/<site>-1440.png`, `research/<site>-390.png`. Fonts come from a DOM dump grep (`research/fonts.txt`); "not detectable" means fonts were loaded by JS/CSS files we didn't parse.
Caveats, stated honestly: Superprof rendered blank (bot wall), olympics.com returned "Access Denied", Millennium Dance Complex timed out (no shot), CLI Studios captured desktop only. Notes for those come from the parts that did load plus general knowledge of the sites, and are marked (partial).

| # | Site | URL |
|---|---|---|
| 1 | Superprof (partial) | https://www.superprof.com.au/ |
| 2 | MasterClass | https://www.masterclass.com/ |
| 3 | STEEZY Studio | https://www.steezy.co/ |
| 4 | CLI Studios (partial) | https://www.clistudios.com/ |
| 5 | Millennium Dance Complex (partial, no shot) | https://www.millenniumdancecomplex.com/ |
| 6 | Pineapple Dance Studios | https://www.pineapple.uk.com/ |
| 7 | Red Bull BC One | https://www.redbull.com/int-en/event-series/red-bull-bc-one |
| 8 | WDSF (Breaking for Gold) | https://www.worlddancesport.org/ ; olympics.com/en/sports/breaking (blocked) |
| 9 | Bboy Factory (Denver breaking school) | https://www.bboyfactory.com/ |
| 10 | B-Boy & B-Girl Dojo (online breaking school) | https://learn.bboydojo.com/learn-how-to-breakdance-for-beginners/ |
| 11 | Outschool | https://outschool.com/ |
| 12 | Skillshare | https://www.skillshare.com/ |
| 13 | Elements Collective (Brisbane) | https://www.elementscollective.com.au/ |
| 14 | Break Juku (Sydney kids breaking) | https://www.breakjuku.com.au/ |
| 15 | Sydney Dance Company | https://www.sydneydancecompany.com/ |
| 16 | Nike Training Club | https://www.nike.com/ntc-app |
| 17 | Peloton | https://www.onepeloton.com/ |

## Per-site notes

**MasterClass.** Hero: type left ("Learn from the best, be your best") + mosaic of instructor portraits right, black ground, red CTA. Video: trailers per class, autoplay previews on hover in-app. Type: system-ui stack in DOM (brand face loaded in CSS). Colour: black, white, red promo. Grid: 2-col hero then horizontal rails. Teacher: the teacher IS the product; tight face crops, name and craft. Pricing: plan table behind CTA. Sign-up: one CTA, quiz ("What brings you to MasterClass?"). Proof: famous names, no star ratings. Motion: minimal; video does the moving.

**STEEZY.** Hero: black panel, huge stacked condensed type "Reach your dance goals", white "Get started" bar. Video: Vimeo-hosted class previews (4 Vimeo refs). Type: heavy condensed sans. Colour: black/white + one blue CTA. Teacher: instructor cards with real stills from class footage. Pricing: monthly/annual toggle. Proof: press logos (Forbes, LA Times). Motion: little.

**CLI Studios (partial).** Hero: full bleed dark video of dancers with huge display type behind; promo modal on top. Video drives everything (class previews). Colour: black, electric blue. Proof: named faculty.

**Millennium Dance Complex (partial).** Iconic LA studio; schedule-first site, timetable grid by room and teacher, drop-in pricing list. Teacher credibility through names on the schedule, not bios.

**Pineapple Dance Studios.** Hero: loud show promo slider (pink illustration), nav packed with class types. Fonts: Oswald (Google) + "textaalt". Social proof = 40-year history, celebrity association. Lesson: a timetable and a legacy beat polish; the slider feels dated.

**Red Bull BC One.** Hero: full bleed photo of a breaker mid-move, event title in Red Bull's own "Bull Text"/title face. Video: Red Bull TV embeds, highlight reels per battle. Colour: deep navy, red, white. Grid: 12-col with cards of event cities. Proof: champions' names, dates, places. Motion: hover scale on cards only.

**WDSF.** News-portal layout, banner ads, Instagram embeds (42 instagram refs). Not a model to copy; shows that federation sites lean on dated facts and photos of real competitors.

**Bboy Factory.** Hero: full bleed graffiti wall photo with the logo, two plain buttons (Schedule/Prices, Register today). Fonts: Anton, Poppins, Museo Slab, Helvetica (Wix). Teacher: founders' story in first person on blog ("That was our practice spot"). Proof: years of open practice, community history. Feels human because it's local and specific; feels rough because of Wix defaults.

**B-Boy Dojo.** Hero: photo of a breaker in freeze with darkened overlay, left aligned headline and checklist. Video: Vimeo course previews. Teacher: first-person founder story, crew name, school. Pricing: course price + money-back. Proof: student count and testimonial videos.

**Outschool.** Hero: rounded bold sans ("Build the education your kid deserves"), cut-out kid photos, sticker labels. Fonts: Google Sans/Roboto. Colour: purple + yellow. Proof: counts ("1M+ learners"), parent reviews. Shows the friendly-parent tone, but the sticker/blob style is the template look to avoid.

**Skillshare.** Hero: Black Friday modal over a collage of class thumbnails. system-ui. Video: every class card is a video thumbnail with duration. Lesson: duration labels make video feel concrete.

**Elements Collective (Brisbane).** Hero: full bleed Vimeo background video (32 vimeo refs) of their events, Futura PT + Montserrat via Typekit. Colour: black/white. Teacher: named crew, real event photos. Proof: event history, council sponsorship, schools served. Closest local reference: culture first.

**Break Juku (Sydney).** Simple white site, Japanese-style list, full weekly timetable table with prices written plainly (term fee, casual, family discount). Teachers each get a name, photo and two lines. Proof: specifics, not claims. Lesson: a plain table builds more trust than pricing cards.

**Sydney Dance Company.** Hero: split photo panels of dancers mid-movement, big white condensed-ish headline ("2027 Season", "Summer Professional Intensive"), Open Sans body (Divi theme). Colour: black, white, one warm accent. Classes: timetable by style/level with drop-in prices. Proof: the company's own stage photography.

**Nike Training Club.** Hero: full bleed photography of a real body mid-exercise, cropped tight, "Welcome to the Nike Training Club" in heavy condensed Futura-style type, Helvetica Now body. `<video>` in DOM. Colour: white, black, photo carries colour. Motion: video loops, no decorative animation.

**Peloton.** Hero: full bleed instructor video (`<video>` in DOM) with headline overlaid low-left; Inter + Typekit display. Instructors are hero content: real names, real class footage. Pricing: plain numbers with clear unit. Motion: background loops, sticky CTA.

## Patterns that recur in the strong sites
1. The hero shows the thing itself: a real body moving (Nike, Peloton, BC One, Elements). Where there is no footage, it's a confident type block (STEEZY, MasterClass) — never an abstract shape.
2. Condensed heavy display type, left aligned, broken onto lines deliberately; neutral grotesk body.
3. Black/white base with one colour used for action only.
4. Teacher credibility comes from specifics: names, crews, years, places, events. No star-rating widgets.
5. Schedules are tables (Break Juku, Millennium, SDC); prices are written as plain lines with units.
6. Video: background loops are short, muted, low contrast so type reads; longer clips live behind a click.
7. Motion is footage, not decoration.

## Human/crafted vs AI-generated
Feels generated: gradient blobs and glow; three identical rounded cards with an icon on top; centred everything; lucide icons as filler next to every bullet; eyebrow pill above every heading; "Unlock your potential"-type stock phrases; spinning/marquee gimmicks with no meaning; same card repeated for every section; fake testimonials with 5 stars; tinted near-black + one acid accent by default.
Feels crafted: a specific point of view (one person, one hall, one suburb list); asymmetry and varied section rhythm; real specifics even if few; a table where data is tabular; type used as image; restraint in colour; copy in a person's voice; drawn marks that belong to the subject (floor tape, cypher circle, freeze silhouettes).

## 10 rules for this site
1. Hero = the movement. Video when Jamie has footage; until then a type-led hero with hand-drawn SVG breaking figures, no stock, no AI images.
2. Left aligned, asymmetric 12-col grid; no section is centred.
3. One display face (Big Shoulders Display, a condensed gym-signage grotesk) + Geist body. Display only for headings and big numbers.
4. Palette: lino grey `#e8e7e3`, black `#0a0a0a`, white, and one action colour (hall-tape red `#e5322d`) used only on CTAs and markers.
5. Timetable is a table; prices are plain lines with units. No pricing cards.
6. Teacher section in first person, with specifics as TBC chips, never invented.
7. No icons as decoration; numbers only where content is a sequence (the class arc).
8. Video slots render only when there's a clip; empty slots never show.
9. No ambient motion except optional hero video; motion only on user action (lightbox, accordion). Respect reduced motion.
10. Copy is plain, specific, Brisbane-local; no stock phrases, no fake reviews; proof = facts as they're confirmed.
