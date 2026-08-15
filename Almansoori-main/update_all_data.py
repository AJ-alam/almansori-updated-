with open('src/data/services.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = text[:text.find('export const services = [')]

# We'll output the JS manually to ensure correct formatting and preservation of icon references.

file_content = prefix + """export const services = [
  {
    slug: "dental",
    icon: FaTooth,
    headerImage: "/services/banners/5.jpeg",
    overviewImage: "/services/Dental/dental_image.jpg",
    title: "Dental",
    description: "Complete dental care including smile makeover, implants, veneers, teeth whitening, and more.",
    subServices: [
      {
        name: "Aesthetic Dentistry",
        slug: "aesthetic-dentistry",
        icon: RiUserSmileLine,
        description: "Restore function and improve visual appearance",
        fullDescription: "The purpose of restorative dentistry is to restore function, while the purpose of cosmetic dentistry is to improve visual appearance. Restorative dental treatments focus on restoring decayed, damaged, or missing teeth in order to maintain proper function and oral health.",
        treatments: [
          {
            name: "Smile Makeover",
            description: "You deserve to shine, and a smile makeover is sure to do the trick! A Smile Makeover is a treatment plan that considers the dental and oral health, as well as the surrounding smile elements such as the thickness, color, level and contour of the lips, and the relationship between the upper and the lower teeth and jaws in order to craft the perfect smile for you.\\n\\nA Smile Makeover may include a number of procedures designed to enhance the beauty and appearance of your smile. These may include the straightening and repairing of crooked or chipped teeth through orthodontics, replacing of missing teeth with crowns and bridges, closing gaps between teeth with cosmetic fillings, re-contouring gummy smiles and teeth whitening, as well as Ceramic Facings or veneers. There are a wide number of treatment options to makeover your smile so visit AL MANSOORI medical for a Cosmetic Consultation and let’s find the right one for you!"
          },
          {
            name: "Face Enhancement Dentistry(FED)",
            description: "Face Enhancement Dentistry is a holistic approach to enhancing oral and facial function and aesthetics. It is the combined knowledge and implementation of neuromuscular orthodontics and aesthetic and restorative dentistry.\\n\\nAs we age our teeth wear down and this can make our face look old prematurely. The FED is a pioneering procedure that can create a youthful appearance and delay the onset of wrinkles in the lower one third of the face. The digitally aided treatment plan may involve bite reconstruction and veneers. If you would like to know more about the Face Enhancement Dental procedure and find out if this is the right treatment for you, call 17760666 and ask for a cosmetic consultation today."
          },
          {
            name: "Veneers",
            description: "Veneers can instantly revamp your smile by correcting the color, shape and alignment of your teeth. Veneers are extremely thin porcelain shells that are bonded onto the outer surface of your teeth to give the appearance of white, straight and beautiful teeth. To discuss the suitability of veneers for your teeth contact 17760666 and ask for a cosmetic consultation today."
          },
          {
            name: "Teeth Whitening",
            description: "If you want whiter teeth and keeping your natural teeth intact, then teeth whitening may be the procedure for you. Our Teeth Whitening in office procedure is a one-hour session ot the home teeth whitening solutions can help whiten your teeth and maintain the results.\\n\\nIf you would like to learn more about our Teeth Whitening service call 17760666 and ask for a cosmetic consultation today."
          }
        ]
      },
      {
        name: "Root Canal Treatment",
        slug: "root-canal-treatment",
        icon: FaTooth,
        description: "Save a tooth that is severely decayed or infected",
        fullDescription: "Root canal treatment is a dental procedure designed to save a tooth that is severely decayed or infected. Utilizing advanced microscope technology, dentists can achieve unparalleled precision during the procedure. The microscope enhances visibility, allowing for detailed examination of the tooth's internal structure and ensuring that all infected tissue is effectively removed. This meticulous approach not only increases the success rate of the treatment but also minimizes discomfort and accelerates recovery. By preserving the natural tooth, root canal treatment can restore function and maintain your smile for years to come."
      },
      {
        name: "Dental Radiology (digital X-ray)",
        slug: "dental-radiology",
        icon: TbRadioactive,
        description: "Comprehensive imaging for accurate diagnosis",
        treatments: [
          {
            name: "Periapical X-Ray",
            description: "Periapical X-rays focus on capturing the entire tooth structure, including the crown, root, and surrounding bone. This type of radiograph is essential for diagnosing issues such as infections, abscesses, and bone loss, providing a detailed view of the tooth's health. By allowing dentists to assess both the tooth and its supporting structures, periapical X-rays play a crucial role in effective treatment planning."
          },
          {
            name: "Bitewing X-Ray",
            description: "Bitewing X-rays are designed to capture the upper and lower teeth in a specific area of the mouth simultaneously. These images are particularly useful for detecting cavities between teeth and monitoring the health of the bone surrounding the teeth. Bitewing radiographs are typically taken during routine dental check-ups, helping dentists identify dental issues early and ensure optimal oral health."
          },
          {
            name: "Panoramic X-Ray",
            description: "Panoramic X-rays provide a comprehensive view of the entire mouth in a single image, including all teeth, jawbone, and surrounding structures. This type of radiograph is invaluable for assessing dental alignment, detecting impacted teeth, and planning orthodontic or surgical procedures. By offering a broad perspective, panoramic X-rays help dentists evaluate overall oral health efficiently."
          },
          {
            name: "CBCT (Cone Beam Computed Tomography)",
            description: "CBCT, or Cone Beam Computed Tomography, is an advanced imaging technique that produces three-dimensional images of dental structures, soft tissues, and nerve pathways. This technology enhances diagnostic accuracy, particularly in complex cases such as implants, extractions, and jaw abnormalities. By providing detailed insights, CBCT allows for precise treatment planning and improved patient outcomes."
          }
        ]
      },
      {
        name: "Mobident (Mobile Dental Unit)",
        slug: "mobident",
        icon: FaCar,
        description: "Mobile dental care brought to your doorstep",
        fullDescription: "Mobident is a Mobile dental Van equipped with a full dental unit, aimed to take dental treatments to the community. Mobile dentistry is the practice of providing dental services on-site, usually in a mobile dental clinic, instead of having patients come to a brick-and-mortar office. Mobident can provide much-needed dental care to those who otherwise wouldn't have access to it. Older adults in their own homes or facilities like nursing homes and hospitals are among the patients.\\n\\nOur Mobile Dental Unit Service brings comprehensive dental care directly to your doorstep, ensuring convenience and accessibility for patients of all ages. Equipped with a dental chair and staffed by experienced dental professionals, our mobile unit offers a range of services, including routine check-ups, cleanings, fillings, and more. This innovative approach eliminates the barriers of travel and time, making it easier for individuals and families to receive the dental care they need in a comfortable and familiar environment. We are committed to promoting oral health and enhancing the quality of life for our patients, one smile at a time."
      },
      {
        name: "Dental Implants",
        slug: "dental-implants",
        icon: TbDental,
        description: "Advanced digital technologies for implant placement",
        fullDescription: "AL MANSOORI Medical is equipped with the latest digital technologies for dental implant placement.\\n\\nAn implant is an artificial tooth that is placed inside the jaw to replace a missing tooth or to support a bridge or a denture, over which a prosthetic tooth is placed. At AL MANSOORI Medical we use the preoperative planning software to accurately plan and guide the placement of dental implants, safely complete your implant procedure in one visit."
      },
      {
        name: "Laser Dental Treatment",
        slug: "laser-dental-treatment",
        icon: GiLaserWarning,
        description: "Facilitate treatments and make them less traumatic",
        fullDescription: "The key to great teeth and a beautiful smile starts with healthy gums. At AL MANSOORI Medical we offer periodontal procedures such as Gum Re-contouring and scalloping in order to treat gum bleeding and infection and enhance you overall oral health.\\n\\nLaser has entered most fields of dentist and made it more simple and less traumatic. Laser is a tool used by the dentist to facilitate treatments such as root canal treatment, cosmetic, surgery, gum treatment, tooth whitening and fillings. Gum reconnoitring with laser is usually required to give what is known as the pink aesthetics after orthodontic treatment and for smile makeover. It is s one visit procedure."
      },
      {
        name: "Dental Prosthesis",
        slug: "dental-prosthesis",
        icon: LuCrown,
        description: "Restore and replace missing or damaged teeth",
        treatments: [
          {
            name: "Dentures",
            description: "Dentures are plates of artificial teeth that are used to replace lost teeth. Patients may need a complete set of dentures or a partial denture when some of the teeth are missing. Dentures are made out of either hard acrylic or softer, more flexible materials and AL MANSOORI Medical will help you choose the right denture that is most appropriate and comfortable for you."
          },
          {
            name: "Crowns & Bridges",
            description: "Crowns and Bridges are fixed prosthetics that are used to cover a Root Canal treated tooth or badly broken tooth or used to replace missing teeth. There are a number of different types of Crowns and Bridges to choose from and AL MANSOORI Medical will help you choose the best option for you."
          },
          {
            name: "Inlay & Onlay",
            description: "Inlay and onlays are prosthetics that are made from gold, composite or porcelain, and are indirectly bonded to the tooth. Inlay and onlays are prescribed when a patient has a tooth that is partial damaged but not to the extent that it requires a Crown. The Inlay is bonded inside the tooth where as the Onlay is bonded inside and around the tooth and is supported by the existing tooth’s structure."
          },
          {
            name: "Implants",
            description: "An implant is an artificial tooth that is placed inside the jaw to replace a missing tooth or to support a bridge or a denture, over which a prosthetic tooth is placed. At AL MANSOORI Medical we use the preoperative planning software to accurately plan and guide the placement of Struman ITI dental implants in multiple implant cases. A full diagnosis and treatment plan is agreed with you and a suitable type and size of implant is selected. Our state of the art implantology technology allows AL MANSOORI Medical to safely complete your implant procedure in one visit."
          }
        ]
      },
      {
        name: "Gum Treatment & Hygiene",
        slug: "gum-treatment",
        icon: GiToothbrush,
        description: "Maintain healthy gums for a beautiful smile",
        fullDescription: "The key to great teeth and a beautiful smile starts with healthy gums. At ALMANSOORI Medical we offer periodontal procedures such as gum re-contouring and scaling in order to treat gum bleeding and infection and enhance your overall health.",
        treatments: [
          {
            name: "Scaling",
            description: "Scaling, or professional dental teeth cleaning, removes plaque and tartar deposits that have built up on the teeth in order to reduce the danger of cavities and gum disease. For effective oral hygiene Scaling should be done every six months."
          },
          {
            name: "Polishing",
            description: "Great for smokers and coffee and tea drinkers, AL almansoori Medical Polishing treatment removes stains as well as smoothens the surface of the teeth in order to reduce future staining."
          },
          {
            name: "Laser Periodontal Therapy & Curettage",
            description: "Laser periodontal therapy and Curettage is a non-surgical procedure used to treat periodontal (gum) diseases. The treatment removes the bacteria and the diseased underlining tissues that can occur in the pockets around the tooth in order to allow the gum to heal."
          },
          {
            name: "Perio-Surgery",
            description: "Perio-Surgery is recommended when persistent gum disease is not sufficiently treated by other non-surgical methods. Perio-Surgery is minor surgery that may involve Bone Grafting or Gum Grafting. If you think you may suffer from a persistent chronic gum disease, please call 17760666 and ask for a consultation with our surgeon."
          },
          {
            name: "Bone Augmentation",
            description: "Chronic Gum disease and the prolonged use of dentures can result in bone loss from the jaw. Bone augmentation is a procedure used to build up the bone in the jaw, particularly around implants and involves using bone from the patient or a synthetic substitute."
          }
        ]
      },
      {
        name: "Elderly Oral & Dental Care",
        slug: "elderly-oral-and-dental-care",
        icon: MdElderly,
        description: "Maintain good oral health and hygiene for the elderly",
        fullDescription: "It is extremely important both for the emotional and physical health and well being of the elderly to maintain good oral health and hygiene. AL MANSOORI DENTAL CENTRE is experienced in working with the elderly to construct and replace missing teeth with Crowns and Bridges, Dentures and Implants and giving our more senior patients plenty of reasons to smile!",
        treatments: [
          {
            name: "Dentures",
            description: "Dentures are plates of artificial teeth that are used to replace lost teeth. Patients may need a complete set of dentures or a partial denture when some of the teeth are missing. Dentures are made out of either hard acrylic or softer, more flexible materials and AL MANSOORI DENTAL CENTRE will help you choose the right denture that is most appropriate and comfortable for you."
          },
          {
            name: "Crowns & Bridges",
            description: "Crowns and Bridges are fixed prosthetics that are used to cover a Root Canal treated tooth or badly broken tooth or used to replace missing teeth. There are a number of different types of Crowns and Bridges to choose from and AL MANSOORI DENTAL CENTRE will help you choose the best option for you."
          },
          {
            name: "Inlay & Onlay",
            description: "Inlay and onlays are prosthetics that are made from composite or porcelain, and are indirectly bonded to the tooth. Inlay and onlays are prescribed when a patient has a tooth that is partial damaged but not to the extent that it requires a Crown. The Inlay is bonded inside the tooth where as the Onlay is bonded inside and around the tooth and is supported by the existing tooth’s structure."
          },
          {
            name: "Implants",
            description: "An implant is an artificial tooth that is placed inside the jaw to replace a missing tooth or to support a bridge or a denture, over which a prosthetic tooth is placed. At AL MANSOORI medical we use the preoperative planning software to accurately plan and guide the placement of Struman ITI dental implants in multiple implant cases. A full diagnosis and treatment plan is agreed with you and a suitable type and size of implant is selected. Our state of the art implantology technology allows AL MANSOORI medcial to safely complete your implant procedure in one visit."
          }
        ]
      },
      {
        name: "Children Oral & Dental Care",
        slug: "children-oral-and-dental-care",
        icon: FaChild,
        description: "Dedicated to your child’s oral health and happiness",
        fullDescription: "AL MANSOORI DENTAL CENTER is dedicated to your child’s oral health and happiness. Our team of friendly and caring specialists is experienced working with children and will help make your trip to the dentist a positive experience for you and your child. When you bring your child in for a check up we will calm their dental fears, and advise you on the best treatment options and preventative measures that will ensure your child’s good oral health now and in the future.",
        treatments: [
          {
            name: "Fillings",
            description: "Children get tooth decay resulting in cavities that are often the result of a high sugar diet and poor teeth brushing techniques. When a cavity does occur your dentist will be required to perform a filling procedure. A filling is required to stop the cavity from deepening and affecting the nerve or root. If the cavity has reached the root then a pulpotomy, or root canal for baby teeth, may be required."
          },
          {
            name: "Pulpotomy (Root Canal for baby teeth)",
            description: "Root canal for baby teeth, also called pulpotomy is carried out when tooth decay reaches the nerve of the baby tooth and includes the partial or complete removal of the infected pulp."
          },
          {
            name: "Fissure Sealant",
            description: "A Fissure Sealant is a protective plastic coating that is applied to the chewing surfaces of teeth to protect from decay. The coating seals the grooves on the surface of the teeth preventing any food particles or bacteria from collecting. The Fissure Sealant does not affect the normal chewing function of the teeth."
          },
          {
            name: "Space Maintainer",
            description: "Children sometimes lose their teeth early and adjacent teeth may move into the space before the new permanent tooth erupts. A Space Maintainer is a custom made appliance made by the dentist that aims to maintain the space for the permanent tooth until it comes through. Although AL MANSOORI medical highly recommends delaying the extraction of baby teeth if this is unavoidable then a space maintainer is vital."
          },
          {
            name: "Myobrace",
            description: "Myobrace is a fast, effective and natural approach to teeth straightening without braces! Practised by dentists around the world for half a century, Myobrace uses myofunctional orthodontic techniques, such as light, intermittent forces, in order to address the underlying causes of crooked teeth and realign them.\\nIf you would like to learn more about Myobrace call 17760666 and ask for a consultation today."
          },
          {
            name: "Functional Orthodontic Appliances",
            description: "Functional appliances are devices used to correct a disharmony between the upper and lower jaws and help influence the growth direction and development of the jaws in young patients. Commonly used to encourage the forward growth of an under-developed lower jaw, the functional appliance holds the lower jaw forward until the teeth, jaws and joints have adapted and the desired jaw position has been obtained.\\nTo learn more about Functional Orthodontic Appliances call 17760666 for a consultation today."
          }
        ]
      },
      {
        name: "Orthodontic treatment (Braces)",
        slug: "orthodontic-treatment-braces",
        icon: RiUserSmileLine,
        description: "Gradually shift teeth into their desired positions",
        treatments: [
          {
            name: "Traditional Braces",
            description: "Traditional braces consist of metal brackets and wires that are bonded to the teeth. They gradually shift teeth into their desired positions through consistent pressure. This time-tested method is effective for correcting various dental issues, including overcrowding, gaps, and misalignment, making it a popular choice among patients of all ages."
          },
          {
            name: "Ceramic Braces",
            description: "Ceramic braces are similar to traditional braces but use tooth-colored or clear brackets that blend in with the natural color of the teeth. This aesthetic option is ideal for those seeking a more discreet treatment while still benefiting from the effectiveness of braces. Ceramic braces are particularly popular among adults and teens who want a less noticeable solution."
          },
          {
            name: "Clear Aligners",
            description: "Clear aligners, such as Invisalign, are a popular orthodontic option that uses a series of removable, custom-made trays to gradually straighten teeth. These aligners are nearly invisible, making them an appealing choice for adults and teens who prefer a less noticeable treatment. Clear aligners also allow for easier oral hygiene, as they can be removed during eating and brushing."
          },
          {
            name: "Retainers",
            description: "Retainers are used after orthodontic treatment to maintain the new position of teeth. They can be fixed or removable and are essential in preventing teeth from shifting back to their original positions. Regular use of retainers ensures that the results of orthodontic treatment are preserved for years to come."
          }
        ]
      },
      {
        name: "Digital Dentistry",
        slug: "digital-dentistry",
        icon: IoSparkles,
        description: "Software and systems for complex dental procedures",
        treatments: [
          {
            name: "CAD/CAM technology",
            description: "Computer-aided design (CAD) and computer-aided manufacturing (CAM) are software programs that aid professionals in performing complex dental procedures. CAD CAM provides many advantages for restorative dentistry. It includes improved accuracy, shorter waiting periods of time, and minimised outsourcing costs. The technology also enables dentists to provide you with accurate, strong dimensionally stable restorations."
          },
          {
            name: "Digital Scan technology",
            description: "A digital impression is a virtual scan that creates a map of your teeth. By using lasers and other optical scanning devices, dentists can create a virtual, computer-generated model of the hard and soft tissues in the mouth. High accuracy of 3D dental models – that means NO errors. The perfect fit for any dental restoration including crowns, bridges, inlays, onlays and veneers. Suitable for orthodontic and implant treatment. Connects with Invisalign digital process."
          }
        ]
      },
      {
        name: "Sleep Apnea Treatment",
        slug: "sleep-apnea-treatment",
        icon: RiMentalHealthLine,
        description: "Effective treatment through collaborative approach",
        fullDescription: "Sleep apnea is a common sleep disorder characterized by interrupted breathing during sleep, leading to poor rest and various health issues. Effective treatment often requires a collaborative approach between dental and ENT specialists. Dentists may provide custom oral appliances that help keep the airway open by repositioning the jaw, while ENT specialists assess and treat any underlying anatomical issues, such as nasal obstructions or enlarged tonsils. This integrated care ensures a comprehensive strategy to manage sleep apnea, improving sleep quality and overall health for patients. Through teamwork, we aim to deliver personalized solutions that enhance both restful sleep and long-term well-being."
      },
      {
        name: "Consultation",
        slug: "consultation",
        icon: FaUserMd,
        description: "Overall assessment and treatment options",
        treatments: [
          {
            name: "General Consultation",
            description: "A general consultation at AL MANSOORI Medical will provide you with an overall assessment of you or your child’s oral health and treatment options. Regular dental check-ups for you and your child will assist with the early identification and management of your oral issues while encouraging healthy oral hygiene practices. Call 17760666 to book your consultation today."
          },
          {
            name: "Orthodontic Consultation",
            description: "If you are not happy with the alignment of your teeth orthodontics may be the solution for you. An Orthodontic Consultation at AL MANSOORI medial will assess you or your child’s need for orthodontic treatments including Braces, Invisalign, Myobrace or Functional Orthodontic Appliances. If your child has signs of crowding or spacing, a consultation with the Orthodontist can guide you to the proper timing and the best method of orthodontic treatment. Call 17760666 to book your consultation today."
          },
          {
            name: "Cosmetic Consultation",
            description: "Visit AL MANSOORI medical for a cosmetic consultation and explore how we can create your perfect smile. Explore the possibilities with our Aesthetic Specialist who will guide you through all your options and help you imagine a new you. Call 17760666 to book your consultation today."
          },
          {
            name: "Prosthetic Consultation",
            description: "Missing teeth not only affect your self-confidence and your smile, they can also create an imbalance, and reduce the durability of your existing teeth. Visit AL MANSOORI medical for a Prosthetic Consultation today to discuss treatment options available for restoring and replacing your damaged or missing teeth."
          },
          {
            name: "X-Ray",
            description: "At AL MANSOORI DENTAL CENTER we use the latest x-ray machines to provide you with the full picture. An X- Ray will ensure a definite diagnosis and help us create a treatment plan that is just right for your unique case."
          },
          {
            name: "Emergency and Pain",
            description: "Pain in your teeth could be due to several causes. It might be related to your teeth or your gums. It could also be related to a previous treatment or jaw problem. sometimes it is difficult for you to decide the cause or the origin of the pain. At Al MANSOORI medical throw consultation can help proper diagnosis and treatment of the pain.\\n\\nTrauma to your teeth can cause tooth fracture, lip cut or even bleeding. in cases of an emergency you do not need to call, just come to Al MANSOORI medical and we will be ready to assist you."
          }
        ]
      }
    ],
    fullDescription: "Al-Mansoori Medical offers complete dental care solutions. From Smile Makeover and Dental Facelift to Veneers, Teeth Whitening, Implants, Crowns & Bridges, and children's oral care. Our team uses the latest digital technologies and offers dedicated experts experienced in performing a wide range of dental procedures with professionalism and care.",
    treatmentDetails: {
      what: "Our comprehensive dental services include aesthetic dentistry (smile makeover, veneers, teeth whitening), dental surgery (implants, wisdom tooth extraction), prosthetics (crowns, bridges, dentures), gum treatment, and specialized care for children and elderly patients.",
      aim: "To provide exceptional dental care that enhances your smile, restores oral health, and maintains long-term dental wellness. We aim to give you a beautiful, healthy smile that boosts your confidence.",
      who: "Suitable for patients of all ages - from children requiring preventive care and orthodontics, to adults seeking cosmetic enhancements, to elderly patients needing restorative treatments.",
      how: "We begin with a comprehensive consultation and X-ray diagnosis, then create a personalized treatment plan. Using the latest digital technologies and techniques, our expert team delivers professional care in a comfortable environment."
    },
    treatments: [
      { name: "Tooth and gum cleaning", image: "/services/Dental/tooth and gum cleaning.jpg" },
      { name: "Tooth and gum cleaning & 20 min in office whitening", image: "/services/Dental/in office tooth whitening.jpg" },
      { name: "Home kit tooth whitening", image: "/services/Dental/home kit tooth whitening.jpg" },
      { name: "In office tooth whitening", image: "/services/Dental/in office tooth whitening.jpg" }
    ],
    benefits: [
      "Smile Makeover & Dental Facelift",
      "Veneers & Teeth Whitening",
      "Dental Implants (Straumann ITI)",
      "Crowns, Bridges & Dentures",
      "Root Canal & Fillings",
      "Children's Dental Care"
    ],
    process: [
      { step: "Consultation", desc: "Full assessment of oral health and treatment options" },
      { step: "Diagnosis", desc: "X-rays and digital imaging for accurate diagnosis" },
      { step: "Treatment Plan", desc: "Personalized plan tailored to your needs" },
      { step: "Treatment", desc: "Expert care with latest technology" }
    ],
    faqs: [
      { q: "What is a Smile Makeover?", a: "A treatment plan considering dental health and smile elements to craft the perfect smile, including orthodontics, veneers, whitening, and more." },
      { q: "How long does teeth whitening last?", a: "Our one-hour whitening session uses hydrogen peroxide gel to remove stains. Results typically last 6-12 months." },
      { q: "Are dental implants safe?", a: "Yes, we use Straumann ITI implants with preoperative planning software for safe, precise placement." }
    ]
  },
  {
    slug: "aesthetics",
    icon: FaSyringe,
    headerImage: "/services/banners/1.jpeg",
    overviewImage: "/services/peeling/deep_face_peeling.jpg",
    title: "Aesthetics",
    description: "Advanced aesthetic treatments including fillers, Botox, skin boosters, peeling, and RF treatments.",
    subServices: [
      {
        name: "Radiofrequency Therapy (RF) microneedling",
        slug: "rf-microneedling",
        icon: TbRadioactive,
        description: "Radiofrequency (RF) therapy, also called radiofrequency skin tightening, is a nonsurgical method of tightening your skin.",
        fullDescription: "RF microneedling is done with a special device that enables the needles to penetrate the skin (microneedling) while simultaneously administering thermal energy (RF) directly into the dermis.\\nPuncturing the skin with super thin needles to create controlled trauma and trigger the natural recovery process.The needles penetrate into the dermis layer of the skin and stimulate the production of collagen and elastin – two key proteins that make up the web that gives the skin its structure. Boosted production of these 2 proteins tightens the skin and improves its state.\\nThe use of radiofrequency for skin improvement implies using energy waves to delegate heat into the dermis. The thermal energy creates controlled trauma and stimulates the production of collagen and elastin.",
        treatments: [
          {
            name: "RF Microneedling Benefits",
            description: "Boosts collagen production.\\nSmooth texture.\\nBalances skin tone.\\nImproves skin elasticity and firmness.\\nTightens skin and enlarged pores.\\nReduces visibility of scarring, stretch marks, and more.\\nHeals Acne Scars.\\nReduces Fine wrinkles."
          }
        ]
      },
      {
        name: "High-Intensity Focused Ultrasound",
        slug: "hifu",
        icon: IoSparkles,
        description: "High-intensity focused ultrasound (HIFU) is a minimally invasive medical procedure that uses ultrasound waves.",
        fullDescription: "High-intensity focused ultrasound (HIFU) is a minimally invasive medical procedure that uses ultrasound waves to treat certain conditions, such as tumours, uterine fibroids and tremors. The very high-intensity and highly focused sound waves interact with targeted tissues in your body to modify them.\\n\\nA high intensity focused ultrasound facial, or HIFU facial for short, is a noninvasive treatment for facial aging. This procedure is part of a growing trend for anti-aging treatments that provide some of the benefits of a facelift without the need for surgery.\\n\\nA HIFU facial uses ultrasound to create heat at a deep level in the skin. This heat damages targeted skin cells, causing the body to try to repair them. To do this, the body produces collagen to aid in cell regrowth. Collagen is a substance in the skin that gives it structure and elasticity.",
        faqs: [
          { q: "Can HIFUtherapy Replace a Face Lift Procedure?", a: "HIFUTherapy treats the deep foundational layer addressed in cosmetic surgery, but won’t duplicate the results of a facelift. However it is a great alternative, especially for those not ready for surgery or for patients looking to extend the effects of cosmetic surgery." },
          { q: "How is HIFUTherapy Different from Laser Procedures?", a: "HIFUTherapy uses sound energy, tried and true ultrasound, which has unique properties that allow it to bypass the surface of the skin to treat depths not matched by any other non-invasive cosmetic device. HIFUTherapy stimulates collagen production in the skin’s foundation, resulting in a clinically significant lift of tissue over the following 2-3 months. Lasers rely on light energy. Since the two technologies often treat different types of skin issues, they’re actually very compatible." }
        ],
        treatments: [
          {
            name: "HIFU Benefits",
            description: "Tighten the skin on the neck.\\nReduce the appearance of jowls.\\nLift drooping eyelids or eyebrows.\\nSmooth wrinkles on the face.\\nSmooth and tighten chest skin."
          }
        ]
      },
      {
        name: "Chemical Peeling treatment",
        slug: "chemical-peeling",
        icon: GiFruitBowl,
        description: "A chemical peel is a solution applied to the face to remove dead skin cells and stimulate the growth of new cells.",
        fullDescription: "The aim is to improve the appearance of the skin – for example, by reducing age spots and evening-out skin tone. There are 3 types of peels, called superficial, medium and deep.\\n\\nA chemical peel, also known as chemexfoliation or dermapeeling, uses a chemical solution to improve the appearance of your skin. In this treatment, a chemical solution is applied to your skin, which causes trauma or injury to your skin’s layers. The skin layers eventually peel off revealing more youthful skin. The new skin is usually smoother with fewer lines and wrinkles, has a more even color and is brighter in complexion.",
        faqs: [
          { q: "Is a chemical peel good for all skin types?", a: "Generally, superficial peels can be used on all skin types. However, if you have a darker skin tone, you have a greater risk of experiencing a darkening of your skin after treatment. This condition is called post-inflammatory hyperpigmentation. Chemical peeling may also not be recommended if you have a history of abnormal skin scarring, extra coloring in scars, skin conditions or take medications making skin sensitive, or can't stay out of the sun." },
          { q: "What should I expect after a light chemical peel?", a: "Expect a sunburn-like reaction to occur after your peel, meaning you’ll see redness followed by scaling that lasts between three and seven days. Apply lotion or cream as directed until your skin heals. After your skin heals, apply daily sunscreen. Additional peels may be repeated every two to five weeks." },
          { q: "What should I expect after a medium chemical peel?", a: "Expect some redness, swelling, stinging and flaking of your skin. Swelling may last and/or worsen for 48 hours. Blisters can develop and will break open. Skin will crust and peel off over seven to 14 days. Perform daily soaks as directed by your doctor. Apply ointment after each soak. Don’t expose your skin to sunlight until completely healed." }
        ]
      },
      {
        name: "Platelet-Rich Plasma (PRP) treatment",
        slug: "prp",
        icon: MdBloodtype,
        description: "Platelet-rich plasma (PRP) injections are gaining popularity for a variety of conditions, from sports injuries to hair loss.",
        fullDescription: "(Platelet Rich Plasma) therapy is a type of treatment that uses an individual patient's blood to create a specific serum for their particular medical or cosmetic condition. Doctor takes a small amount of blood from the forearm and centrifuges it. The rotation causes platelets and other growth components to separate from the red and white blood cells.\\n\\nDoctors then isolate the resulting PRP serum and apply it to the treatment site. Here, the serum triggers a cascade of healing reactions so that your skin can be repaired. PRP dermatology is the branch of therapy that specifically treats skin problems.",
        treatments: [
          {
            name: "PRP Benefits",
            description: "Reduce wrinkles.\\nPlump up sagging skin.\\nGet rid of deep creases.\\nImprove one’s complexion.\\nDiminish acne scars."
          }
        ]
      },
      {
        name: "Mesotherapy treatment",
        slug: "mesotherapy",
        icon: FaSyringe,
        description: "Mesotherapy is a technique that uses injections of vitamins, enzymes, hormones, and plant extracts to rejuvenate and tighten skin.",
        fullDescription: "Mesotherapy is a French rejuvenation technique that uses micro injections of vitamins, enzymes, antioxidants, and plant extracts to rejuvenate and tighten skin, improve hair quality, as well as remove excess fat.\\n\\nMesotherapy can instantly improve dull, tired looking skin and superficial wrinkles but can also help to improve sluggish blood circulation, aiding the body to flush out ageing toxins. This treatment can also be used to address hyperpigmentation, treat acne and ‘lit-from-within’ skin glow.\\n\\nMesotherapy vitamin cocktails can stimulate the fibroblast cell in the skin to produce more collagen to combat the signs of aging. Amongst the list of skin-friendly plant ingredients injected are vitamins, growth factors, Hyaluronic acid, peptides, antioxidants and trace elements that provide the ideal environment for healthy skin that copes with the aging process better.",
        faqs: [
          { q: "Is Mesotherapy painful?", a: "A numbing cream is used and you’ll feel a tiny injection scratch on your skin –the treatment lasts about 20 min." },
          { q: "What’s the treatment used for?", a: "Mesotherapy is used to improve body, hair, cellulite – different cocktails are applied to induce collagen production and create healthy looking skin and hair. On your FACE it can be used for wrinkles, dull looking skin, hyperpigmentation, acne, loss of glow. On your BODY it can improve cellulite, stretch marks, hair loss, fat reduction." }
        ],
        treatments: [
          {
            name: "Treatment Highlights",
            description: "Hydrates, rejuvenates and tightens the skin.\\nRegenerates and restructures the skin.\\nProtects the skin.\\nImproves radiance and hydration of the skin.\\nRebuilds the skin.\\nImproves acne and scarring.\\nGives instant glow."
          }
        ]
      },
      {
        name: "Filler",
        slug: "filler",
        icon: BiInjection,
        description: "Dermal filler injections are a type of nonsurgical cosmetic procedure.",
        fullDescription: "Dermal fillers plump up wrinkles, smooth lines and restore volume in your face. Your healthcare provider injects these substances just under your skin.\\n\\nPeople choose to get dermal fillers to enhance their facial features or gain a more youthful appearance. This elective treatment usually takes less than half an hour, and recovery time is minimal. Results are seen right away and last months to years depending on the type of filler and the location.\\n\\nAs you age, your body starts to lose collagen. Collagen is an important substance that exists all over your body, including in your skin, muscles, bones and connective tissues. Decreased amounts of collagen in your skin causes skin laxity (loose) and loss of volume.",
        treatments: [
          {
            name: "Why are dermal fillers used?",
            description: "Add volume to sagging skin.\\nMake your facial features more symmetrical.\\nPlump up lips and cheeks.\\nSmooth wrinkles and creases in your face."
          }
        ]
      },
      {
        name: "Botox",
        slug: "botox",
        icon: GiSyringe,
        description: "Botox Cosmetic is an injectable wrinkle muscle relaxer.",
        fullDescription: "It uses botulinum toxin type A, specifically OnabotulinumtoxinA, to temporarily paralyze muscle. This reduces the appearance of facial wrinkles. A Botox treatment is minimally invasive. It’s considered a safe, effective treatment for fine lines and wrinkles around the eyes. It can also be used on the forehead between the eyes.",
        faqs: [
          { q: "Are there any risks or side effects?", a: "Swelling or drooping in the eyelid area, tiredness, headache, neck pain, double vision, dry eyes, allergic reactions, such as rash, itching, or asthma symptoms. Contact your provider immediately if any of these side effects occur." },
          { q: "What to expect after Botox Cosmetic", a: "Avoid rubbing, massaging, or applying any pressure to the treated area. When being injected between the brows, do not lie down or bend over for three to four hours. Doing so may cause the Botox to slip under the orbital rim. There is little to no downtime expected after the treatment. Noticeable results can be expected within 1-2 days post-treatment. The full effect of Botox Cosmetic typically lasts up to four months." }
        ]
      },
      {
        name: "Skin booster",
        slug: "skin-booster",
        icon: BsDroplet,
        description: "Skinboosters are innovative treatments designed to enhance skin hydration, elasticity, and overall appearance.",
        fullDescription: "Utilizing hyaluronic acid, a naturally occurring substance in the body, Skinboosters are injected into the skin to provide deep hydration and improve skin texture. This minimally invasive procedure revitalizes the skin, making it look more youthful and radiant.\\n\\nThe benefits of Skinboosters are numerous. They effectively hydrate the skin from within, reducing the appearance of fine lines and wrinkles. Additionally, they promote a smoother texture and improved elasticity, enhancing overall skin quality. Patients often experience a natural, dewy glow, making Skinboosters a popular choice for those seeking subtle yet impactful skin rejuvenation.\\n\\nSkinboosters are indicated for individuals looking to address specific skin concerns such as dryness, dullness, and early signs of aging. They are ideal for improving skin quality on the face, neck, and décolletage.",
        faqs: [
          { q: "Are there side effects of Skinboosters?", a: "While Skinboosters are generally safe, some patients may experience mild side effects, including swelling, redness, or bruising at the injection site. These effects typically subside within a few days." }
        ]
      }
    ],
    fullDescription: "Our aesthetics department offers a comprehensive range of non-surgical treatments designed to enhance your natural beauty. From dermal fillers and Botox for wrinkle reduction to advanced treatments like PRP, mesotherapy, and RF skin tightening, our expert team delivers personalized care for optimal results.",
    treatmentDetails: {
      what: "Aesthetic treatments including dermal fillers, Botox, skin boosters, chemical peeling, mesotherapy, PRP therapy, HIFU, and RF skin tightening. Each treatment is customized to your specific needs and goals.",
      aim: "To enhance your natural beauty, reduce signs of aging, improve skin texture and tone, and boost your confidence through safe, effective non-surgical treatments.",
      who: "Suitable for adults seeking to address fine lines, wrinkles, volume loss, skin laxity, uneven skin tone, or those wanting preventive anti-aging treatments.",
      how: "After a thorough consultation and skin analysis, our specialists recommend the most appropriate treatments. Procedures are performed by trained professionals using high-quality products and advanced techniques."
    },
    treatments: [
      { name: "Filler (per area)", image: "/services/aesthetics/filler.jpg" },
      { name: "Botox (per area)", image: "/services/aesthetics/botox.jpg" },
      { name: "Skin Booster", image: "/services/aesthetics/skin-booster.jpg" },
      { name: "Mild Face Peeling", image: "/services/peeling/mild face peeling.jpg" },
      { name: "Deep Face Peeling", image: "/services/peeling/deep face peeling.jpg" },
      { name: "PRP Therapy", image: "/services/aesthetics/prp.jpg" },
      { name: "RF Face Treatment", image: "/services/RF/full face.jpg" }
    ],
    benefits: [
      "Reduce fine lines & wrinkles",
      "Restore facial volume",
      "Improve skin texture",
      "Non-surgical rejuvenation",
      "Minimal downtime",
      "Natural-looking results"
    ],
    process: [
      { step: "Consultation", desc: "Discuss your goals and assess your skin" },
      { step: "Treatment Plan", desc: "Customized plan based on your needs" },
      { step: "Treatment", desc: "Expert application by trained professionals" },
      { step: "Follow-up", desc: "Monitor results and schedule maintenance" }
    ],
    faqs: [
      { q: "How long do fillers last?", a: "Depending on the type and area, fillers typically last 6-18 months." },
      { q: "Is Botox safe?", a: "Yes, when performed by trained professionals, Botox is a safe and effective treatment." },
      { q: "What is the downtime?", a: "Most treatments have minimal to no downtime. Some may have mild swelling for 24-48 hours." }
    ]
  },
  {
    slug: "medical",
    icon: FaStethoscope,
    headerImage: "/services/banners/5.jpeg",
    overviewImage: "/services/banners/5.jpeg",
    title: "Medical",
    description: "Comprehensive medical services including blood collection, general medicine, ENT, wellness counseling, and minor procedures.",
    subServices: [
      {
        name: "Blood Collection",
        slug: "blood-collection",
        icon: MdBloodtype,
        description: "Blood collection and laboratory services are essential components of healthcare.",
        fullDescription: "Laboratory services encompass a wide range of tests, including complete blood count (CBC), blood chemistry analysis, blood typing, infectious disease screening, genetic testing, and many others. These services play a crucial role in diagnosing medical conditions, assessing overall health, and monitoring treatment effectiveness.",
        treatments: [
          {
            name: "Blood collection packages",
            description: "Wellness package : overall 200 element\\nFemale cancer : 5 element\\nMale cancer package:\\nDiabetics package:\\nMental blood test package:\\nSkin Health package:"
          },
          {
            name: "Mental blood test package",
            description: "Certain blood tests can provide valuable insights into mental health by assessing various biochemical markers. Thyroid hormones can help identify thyroid dysfunction, which is linked to mood disorders. Vitamin D, B12, and folate levels can reveal deficiencies that may contribute to depression and anxiety. Other tests may evaluate inflammation markers or neurotransmitter levels evaluation, offering a comprehensive understanding of how physical health impacts mental well-being."
          },
          {
            name: "Skin Health package",
            description: "Blood tests can play a crucial role in assessing skin health by identifying underlying conditions that may affect the skin's appearance and function. Key tests include those that measure levels of vitamins and minerals, such as vitamin D, B12, and zinc, which are essential for skin repair and regeneration. Hormone levels, particularly thyroid hormones, can also impact skin conditions like dryness or acne. Additionally, tests for inflammatory markers can help diagnose autoimmune skin disorders."
          }
        ]
      },
      {
        name: "General Medicine",
        slug: "general-medicine",
        icon: GiMedicines,
        description: "Comprehensive care for chronic conditions and common ailments",
        fullDescription: "Our general medicine department provides comprehensive care for chronic conditions like diabetes and hypertension, as well as common ailments including flu, UTIs, bronchitis, gastroenteritis, sinusitis, migraines, and allergic reactions."
      },
      {
        name: "Wellness counseling",
        slug: "wellness-counseling",
        icon: RiMentalHealthLine,
        description: "Holistic mental health support through psychotherapy and counseling",
        fullDescription: "Our Wellness Counseling service provides a safe, confidential space for individuals, couples, and families to explore mental health concerns. Dr. Aziza Yaser uses a holistic and integrative approach combining various modalities including CBT, talk therapy, hypnotherapy, EMDR, and more to help you achieve mental strength and emotional well-being."
      },
      {
        name: "Minor procedures",
        slug: "minor-procedures",
        icon: MdMedicalServices,
        description: "Outpatient procedures with minimal invasion",
        fullDescription: "Minor procedures are medical interventions that are relatively simple, low-risk, and typically don't require hospital stays. Common examples include mole removal, skin biopsies, suturing small wounds, ear wax removal, joint injections, and cyst removal."
      },
      {
        name: "ENT",
        slug: "ent",
        icon: FaStethoscope,
        description: "Comprehensive care for Ear, Nose, and Throat",
        fullDescription: "Our ENT (Ear, Nose, and Throat) services provide comprehensive care for a wide range of conditions affecting the auditory, nasal, and throat areas. Our experienced specialists diagnose and treat issues such as allergies, sinus infections, sleep apnea, hearing loss, and voice disorders, utilizing advanced diagnostic tools and techniques. We prioritize patient comfort and tailored treatment plans, whether through medical management or surgical interventions. With a focus on holistic care, our ENT team is dedicated to enhancing the quality of life for patients of all ages, ensuring optimal ear, nose, and throat health."
      },
      {
        name: "Sleep Apnea",
        slug: "sleep-apnea",
        icon: IoBodyOutline,
        description: "Integrated care for sleep apnea combining dental and ENT expertise",
        fullDescription: "Sleep apnea is a common sleep disorder characterized by interrupted breathing during sleep, leading to poor rest and various health issues. Effective treatment often requires a collaborative approach between dental and ENT specialists. Dentists may provide custom oral appliances that help keep the airway open by repositioning the jaw, while ENT specialists assess and treat any underlying anatomical issues, such as nasal obstructions or enlarged tonsils. This integrated care ensures a comprehensive strategy to manage sleep apnea, improving sleep quality and overall health for patients. Through teamwork, we aim to deliver personalized solutions that enhance both restful sleep and long-term well-being."
      }
    ],
    fullDescription: "Al-Mansoori Medical provides comprehensive medical services including blood collection and laboratory testing, general medicine consultations for chronic conditions, ear nose and throat care, specialist referrals, minor outpatient procedures, and wellness counseling. Our experienced medical team delivers high-quality care in a comfortable, professional environment.",
    treatmentDetails: {
      what: "Comprehensive medical services including blood collection, general medicine for diabetes and hypertension, ENT services, sleep apnea treatment, wellness counseling, and minor procedures.",
      aim: "To provide accessible, high-quality medical care that supports your overall health, prevents illness, and addresses both acute and chronic conditions.",
      who: "Suitable for individuals of all ages requiring routine medical services, specialized care, chronic disease management, or preventive health monitoring.",
      how: "Book an appointment for your required service. Our trained medical professionals provide safe, comprehensive care using the latest techniques and technology."
    },
    benefits: [
      "Comprehensive laboratory services",
      "Advanced ENT diagnostics and treatments",
      "Chronic disease management",
      "Wellness Counseling for mental health",
      "Holistic care approach",
      "Experienced medical team"
    ],
    process: [
      { step: "Consultation", desc: "Discuss your health concerns and goals" },
      { step: "Assessment", desc: "Thorough evaluation and diagnosis" },
      { step: "Treatment Plan", desc: "Personalized care plan for your needs" },
      { step: "Follow-up", desc: "Ongoing monitoring and support" }
    ],
    faqs: [
      { q: "How do I book an appointment?", a: "Simply call or book online. We offer same-day appointments when available." },
      { q: "What services do you offer?", a: "We offer blood collection, general medicine, ENT, wellness counseling, and minor procedures." },
      { q: "Are your doctors qualified?", a: "Yes, all our medical professionals are fully qualified and experienced in their respective fields." }
    ]
  },
  {
    slug: "skincare",
    icon: FaSpa,
    headerImage: "/services/banners/back_hydrafacial.jpg",
    overviewImage: "/services/Hydrafacial/hydrafacila_glow.jpg",
    title: "Skin Care",
    description: "Professional skin care treatments including Hydrafacial, skin analysis, and laser hair removal.",
    subServices: [
      {
        name: "Hydrafacial treatments",
        slug: "hydrafacial",
        icon: LuSparkles,
        description: "A Hydrafacial is a patented skin treatment available in medical spas and dermatology offices.",
        fullDescription: "It’s also sometimes called “hydradermabrasion” because it involves microdermabrasion-like exfoliation paired with hydrating serums. Known for its three-step process, the HydraFacial works to deep-clean, exfoliate and hydrate your skin. This professional procedure may help treat a variety of skin conditions, including acne, dryness, and wrinkles.\\n\\nA hydrafacial is one of the most powerful, non-invasive skin resurfacing treatments available today. It combines cleansing, exfoliation, extraction, hydration and antioxidant protection that removes dead skin cells and impurities, while simultaneously delivering moisturizing serums into the skin. The word “hydra” in Hydrafacial refers to its incredibly hydrating effect. The Hydrafacial procedure itself is fast and efficient, only taking about 30 minutes to complete. Moreover, the results are instantaneous.",
        faqs: [
          { q: "How many treatments are needed to see results?", a: "One treatment per month is recommended for improving the appearance of fine lines, wrinkles, hyperpigmentation, acne and oily skin." },
          { q: "How many treatments are necessary?", a: "It may take about 8 treatments to achieve satisfactory results. Results vary depending on skin type, hair type, contrast, age etc." }
        ],
        treatments: [
          {
            name: "Hydrafacial improves the appearance of:",
            description: "Oily, acne-prone skin\\nDry skin\\nUneven skin tone\\nFine lines and wrinkles\\nHyperpigmentation\\nSun damage\\nAge spots\\nBlackheads\\nEnlarged and clogged pores"
          },
          {
            name: "Suitable For All Skin Types",
            description: "Whether your skin is oily and acne-prone, dry and flaky, or you have combination skin, you will benefit from a Hydrafacial treatment. Even those with sensitive skin can safely enjoy multiple sessions!"
          },
          {
            name: "Gentle On The Skin",
            description: "Despite the fact that a hydrafacial involves both exfoliation and extraction, it is painless and non-irritating to the skin. Since it delivers hydrating serums, patients are left with a smooth, radiant, healthy glow. Some patients liken the sensation of getting a Hydrafacial to a light face massage."
          },
          {
            name: "Zero Downtime",
            description: "A Hydrafacial only takes about 30 minutes from start to finish, and there is no downtime required after the treatment. The improvement in skin texture and tone can be noticed immediately, so patients do not need to recover or wait for redness to disappear. In fact, you can put makeup on and resume your normal activities immediately after treatment."
          },
          {
            name: "Fully Customizable",
            description: "Your esthetician can tailor your Hydrafacial treatment to your unique skin needs and aesthetic goals. Skin boosters such as the Brightalive Boost or the Growth Factor Boost can be added to brighten the skin and remove fine lines and wrinkles. In addition, the suction power of the vacuum can be adjusted so that it is more gentle in delicate spots, such as the eye area."
          }
        ]
      },
      {
        name: "Laser Hair Removal",
        slug: "laser-hair-removal",
        icon: GiLaserWarning,
        description: "Laser hair removal is a medical procedure that uses a concentrated beam of light (laser) to remove unwanted hair.",
        fullDescription: "During laser hair removal, a laser emits a light that is absorbed by the pigment (melanin) in the hair. The light energy is converted to heat, which damages the tube-shaped sacs within the skin (hair follicles) that produce hairs. This damage inhibits or delays future hair growth.\\n\\nAlthough laser hair removal effectively delays hair growth for long periods, it usually doesn't result in permanent hair removal. Multiple laser hair removal treatments are needed for initial hair removal, and maintenance treatments might be needed as well. Laser hair removal is most effective for people who have light skin and dark hair, but it can be successfully used on all skin types.",
        faqs: [
          { q: "What must I do after getting laser hair removal?", a: "Avoid direct sunlight from hitting your treated skin. Do not use a tanning bed, sun lamp, or any other indoor tanning equipment. Follow your dermatologist’s after-care instructions. You will see some redness and swelling after treatment. This often looks like a mild sunburn. Applying a cool compress can help reduce your discomfort." },
          { q: "Is there downtime?", a: "No, laser hair removal generally does not require any real downtime. Immediately after having laser hair removal, your treated skin will be red and swollen. Despite this, most people return to their everyday activities." },
          { q: "When will I see the results after having laser hair removal?", a: "You will likely see the results immediately after treatment. The results vary from patient to patient. The color and thickness of your hair, area treated, type of laser used, and color of your skin all affect the results. You can expect a 10% to 25% reduction in hair after the first treatment. To remove the hair, most patients need 2 to 6 laser treatments. After finishing the treatments, most patients do not see any hair on the treated skin for several months or even years. When the hair regrows, there tends to be less of it. The hairs also tend to be finer and lighter in color." },
          { q: "How long will the results of laser hair removal last?", a: "Most patients remain hair free for months or even years. When some of the hair regrows, it will likely be less noticeable. To keep the area free of hair, a patient may need maintenance laser treatments." }
        ]
      },
      {
        name: "Face Skin analysis",
        slug: "face-skin-analysis",
        icon: MdOutlineFace3,
        description: "Our cutting-edge Face Skin Analysis Machine utilizes advanced technology to assess skin conditions in real-time.",
        fullDescription: "Providing a comprehensive evaluation of various skin parameters such as hydration levels, texture, pigmentation, and pore size. This non-invasive tool offers precise insights into skin health, allowing for tailored treatment plans that address individual concerns.\\n\\nThe Face Skin Analysis Machine offers numerous benefits, including the ability to identify underlying skin issues that may not be visible to the naked eye. By providing detailed assessments, it enables skincare professionals to recommend personalized treatments and products that effectively target specific concerns. Additionally, regular skin analysis helps track progress over time, ensuring that clients achieve optimal results and maintain healthy, radiant skin.",
        faqs: [
          { q: "What is a skin analysis?", a: "Skin analysis is a thorough evaluation of your skin's condition using specialized equipment to assess factors like hydration, texture, pigmentation, and elasticity." },
          { q: "How does the skin analysis machine work?", a: "The skin analysis machine uses advanced imaging technology to capture detailed images of your skin, analyzing various parameters to provide insights into its health." },
          { q: "Why is skin analysis important?", a: "Skin analysis helps identify specific skin concerns, allowing for personalized skincare recommendations and treatment plans tailored to your unique needs." },
          { q: "Who should get a skin analysis?", a: "Anyone looking to improve their skin health or address specific concerns, such as acne, dryness, or aging, can benefit from a skin analysis." },
          { q: "How long does a skin analysis take?", a: "A typical skin analysis session lasts between 15 to 30 minutes, depending on the complexity of the evaluation and the number of areas assessed." },
          { q: "Is the skin analysis process painful?", a: "No, skin analysis is a non-invasive and painless procedure, making it comfortable for clients of all ages." },
          { q: "How often should I get a skin analysis?", a: "It’s recommended to have a skin analysis every 6 to 12 months, or more frequently if you have specific skin concerns or are undergoing new treatments." },
          { q: "Can skin analysis help with product selection?", a: "Yes, the insights gained from a skin analysis can guide you in choosing the most effective skincare products for your specific skin type and concerns." }
        ]
      }
    ],
    fullDescription: "Our skin care department offers advanced treatments designed to give you healthy, radiant skin. From the popular Hydrafacial for deep cleansing and hydration to laser hair removal for smooth, hair-free skin, our expert team uses the latest technology to deliver visible results.",
    treatmentDetails: {
      what: "Comprehensive skin care services including Hydrafacial treatments, professional Face Skin analysis, and laser hair removal for all body areas.",
      aim: "To achieve and maintain healthy, glowing skin through deep cleansing, hydration, and targeted treatments. Our goal is to address your specific skin concerns and enhance your natural beauty.",
      who: "Suitable for all skin types and ages. Whether you want to address dull skin, congested pores, unwanted hair, or simply maintain healthy skin, we have treatments for you.",
      how: "After a thorough skin analysis, we recommend the most suitable treatments for your needs. Our specialists use advanced equipment and techniques for safe, effective results."
    },
    treatments: [
      { name: "Hydrafacial Glow", image: "/services/Hydrafacial/hydrafacila glow.jpg", featured: true },
      { name: "Diamond Facial", image: "/services/Hydrafacial/diamond hydrafacial.jpg", featured: true },
      { name: "Platinum Facial", image: "/services/Hydrafacial/platinum hydrafacial.jpg", featured: true },
      { name: "Full Face Laser", image: "/services/Laser/full face.jpg" },
      { name: "Full Body Laser", image: "/services/Laser/full body without abdomen and back.jpg" },
      { name: "Back Hydrafacial", image: "/services/Hydrafacial/back hydrafacial.jpg" }
    ],
    benefits: [
      "Deep cleansing & hydration",
      "Permanent hair reduction",
      "Improved skin texture",
      "Immediate visible results",
      "Suitable for all skin types",
      "No downtime"
    ],
    process: [
      { step: "Analysis", desc: "Professional skin assessment" },
      { step: "Customize", desc: "Tailored treatment plan" },
      { step: "Treatment", desc: "Expert care with advanced technology" },
      { step: "Glow", desc: "Enjoy your refreshed, radiant skin" }
    ],
    faqs: [
      { q: "How often should I get a Hydrafacial?", a: "Monthly treatments are recommended for optimal, lasting results." },
      { q: "Is laser hair removal permanent?", a: "It provides permanent hair reduction. Most clients see 80-90% reduction after 6-8 sessions." },
      { q: "Is Hydrafacial suitable for sensitive skin?", a: "Yes, Hydrafacial is gentle and suitable for all skin types including sensitive skin." }
    ]
  }
];
"""

with open('src/data/services.js', 'w', encoding='utf-8') as f:
    f.write(file_content)

print("Successfully injected all new client text and erased category-level prices!")
