export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "name": "Anindita",
                "url": "https://home.iitm.ac.in/anindita/",
                "affiliation": {
                    "@type": "Organization",
                    "name": "Indian Institute of Technology Madras",
                    "department": {
                        "@type": "Organization",
                        "name": "Language and Cognition Laboratory"
                    }
                }
            },
            {
                "@type": "Organization",
                "name": "Language and Cognition Laboratory, IIT Madras",
                "url": "https://home.iitm.ac.in/anindita/lclab",
                "logo": "https://home.iitm.ac.in/anindita/darkLogo2.png", // Assuming this path based on layout
                "sameAs": [
                    "https://www.iitm.ac.in/"
                ],
                "description": "A premier research lab at IIT Madras exploring the intersection of language, cognition, and communication."
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
