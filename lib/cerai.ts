export interface PartnerData {
    name: string;
    description: string;
    link: string;
    logo?: string;
}

export const partnersData: PartnerData[] = [
    {
        name: "CeRAI",
        description: "Centre for Responsible AI (CeRAI) is a virtual interdisciplinary research centre at IIT Madras. The centre envisions to be a premier research centre for both fundamental and applied research in Responsible AI with immediate impact in deploying AI systems in the Indian ecosystem. The centre aims to pursue research in the domains of Ethical and Responsible AI and become the standard body in the country to recommend guidelines and policies to make deployable AI models/ systems more accountable, explainable and responsible.",
        logo: "/anindita/cerai.png",
        link: "https://cerai.iitm.ac.in/",
    },
    {
        name: "Out Of Our Minds",
        description: "Out Of Our Minds is a University of Birmingham research project focused on understanding how people naturally learn languages. It develops cognitive based methods, resources, and tools to improve language learning by studying real usage patterns instead of traditional grammar rules.",
        logo: "/anindita/oom.png",
        link: "https://outofourminds.bham.ac.uk/",
    }
];