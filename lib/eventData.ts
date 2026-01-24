export interface Event {
    id: string;
    heading: string;
    tag: string;
    description: string[];
    date: string;
    venue: string;
    images: string[];
}

export const eventsData: Event[] = [
    {
        id: "language-cognition-lab-inauguration-2025",
        heading: "Inauguration of the Language & Cognition Laboratory",
        tag: "One-Day Symposium",
        description: [
            "A one-day symposium organized by the Department of Humanities and Social Sciences, IIT Madras, in collaboration with LC-Lab and CeRAI. " +
            "The event marked the formal inauguration of the Language & Cognition Laboratory and featured a panel discussion titled “Language for Thought: Exploring Interdisciplinary Dimensions,” bringing together experts from linguistics, psychology, public service, and interdisciplinary research."
        ],
        date: "November 10, 2025",
        venue: "LCL Lab and IC & SR Hall 3, IIT Madras, Chennai",
        images: [
            "https://res.cloudinary.com/dgzbrujvx/image/upload/c_crop,ar_1:1/v1766818602/1C2A8245_phhr7l.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1766818602/1C2A8018_mo0v0n.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1766818602/1C2A8264_dgwuyq.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1766818602/1C2A8272_rqrgx6.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1766818602/1C2A8298_wistr8.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1766818602/1C2A8324_jt0clt.jpg"
        ]
    },
    {
        id: "generative-grammar-2025",
        heading: "Essentials of Generative Grammar",
        tag: "4-day Mini Summer Course",
        description: [
            "A four-day intensive course organized by the Department of Humanities and Social Sciences, IIT Madras, in collaboration with the Central Institute of Indian Languages, Mysuru. " +
            "The course offered a deep dive into the principles of generative grammar, exploring its theoretical foundations and applications in linguistic research."
        ],
        date: "June 11–14, 2025",
        venue: "IC & SR Building, IIT Madras, Chennai",
        images: [
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630995/image4_wzyuto.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630996/image11_f4jh96.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630998/image10_srzi3c.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630995/image5_jdwjwd.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630996/image7_lrlytk.jpg",
        ],
    },
    {
        id: "voice-category-copula-2024",
        heading: "Voice, Category and Copula",
        tag: "Symposium and Open Round Table",
        description: [
            "A two-day symposium that examined voice, copula, and ergativity in Indian languages through the lens of morphosyntax and category theory. The event featured talks and discussions on mixed categories, predication, and case alignment. Renowned linguists presented research on cross-linguistic patterns and structural variation."

        ],
        date: "September 16-17 2024",
        venue: "Department of Humanities and Social Sciences, IIT Madras, Chennai",
        images: [
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751816056/voice1_bfidwm.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751816058/voice2_s8dqr6.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751816063/voice3_zvtgj0.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751907506/sep3_clfrqn.jpg",
        ]
    },
    {
        id: "voice-seminar-2023",
        heading: "All About 'Voice': A Crosslinguistic Perspective",
        tag: "2-day Seminar",
        description: [
            "The two-day seminar that explored various aspects of voice constructions, drawing from theoretical frameworks, typological comparisons, and perspectives on language acquisition. The event featured insightful talks delivered by eminent linguists and included a series of scholarly paper presentations, academic discussions and cross-linguistic insights."
        ],
        date: "April 14-15, 2023",
        venue: "IC & SR Building, IIT Madras, Chennai",
        images: [
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751869660/avv1_g4mzhd.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751869660/avv2_bkolqa.jpg",
        ]
    }
];
