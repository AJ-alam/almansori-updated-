with open('src/data/services.js', 'r', encoding='utf-8') as f:
    text = f.read()

import_statement = "import { doctors } from \"./doctors\";\n"
if import_statement not in text:
    text = text.replace('import { BsDroplet } from "react-icons/bs";', 'import { BsDroplet } from "react-icons/bs";\n' + import_statement)

wellness_block = """      {
        name: "Wellness counseling",
        slug: "wellness-counseling",
        icon: RiMentalHealthLine,
        description: "Holistic mental health support through psychotherapy and counseling",
        fullDescription: "Our Wellness Counseling service provides a safe, confidential space for individuals, couples, and families to explore mental health concerns. Dr. Aziza Yaser uses a holistic and integrative approach combining various modalities including CBT, talk therapy, hypnotherapy, EMDR, and more to help you achieve mental strength and emotional well-being.",
        doctor: doctors[0],
        sessionInfo: {
            duration: "1 hour",
            format: "Face-to-face or Online",
            frequency: "Weekly sessions recommended (1-4 to start)"
        },
        faqs: doctors[0].faqs
      },"""

old_block = """      {
        name: "Wellness counseling",
        slug: "wellness-counseling",
        icon: RiMentalHealthLine,
        description: "Holistic mental health support through psychotherapy and counseling",
        fullDescription: "Our Wellness Counseling service provides a safe, confidential space for individuals, couples, and families to explore mental health concerns. Dr. Aziza Yaser uses a holistic and integrative approach combining various modalities including CBT, talk therapy, hypnotherapy, EMDR, and more to help you achieve mental strength and emotional well-being."
      },"""

if old_block in text:
    text = text.replace(old_block, wellness_block)
else:
    print("Warning: old block not found for replacement!")

with open('src/data/services.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed wellness counseling and doctor imports")
