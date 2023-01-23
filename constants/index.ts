interface CardItem {
    id: string;
    category: string;
    title: string;
    pointOfInterest: number;
    backgroundColor: string;
    image: string;
}

export const items: CardItem[] = [
    // Photo by ivan Torres on Unsplash
    {
        id: "c",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E",
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    // Photo by Dennis Brendel on Unsplash
    {
        id: "f",
        category: "How to",
        title: "Arrange Your Apple Devices for the Gram",
        pointOfInterest: 120,
        backgroundColor: "#959684",
        image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    // Photo by Alessandra Caretto on Unsplash
    {
        id: "a",
        category: "Pedal Power",
        title: "Map Apps for the Superior Mode of Transport",
        pointOfInterest: 260,
        backgroundColor: "#5DBCD2",
        image:
            "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    // Photo by Taneli Lahtinen on Unsplash
    {
        id: "g",
        category: "Holidays",
        title: "Our Pick of Apps to Help You Escape From Apps",
        pointOfInterest: 200,
        backgroundColor: "#8F986D",
        image:
            "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    // Photo by Simone Hutsch on Unsplash
    {
        id: "d",
        category: "Photography",
        title: "The Latest Ultra-Specific Photography Editing Apps",
        pointOfInterest: 150,
        backgroundColor: "#FA6779",
        image:
            "https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    // Photo by Siora Photography on Unsplash
    {
        id: "h",
        category: "They're all the same",
        title: "100 Cupcake Apps for the Cupcake Connoisseur",
        pointOfInterest: 60,
        backgroundColor: "#282F49",
        image:
            "https://images.unsplash.com/photo-1551404973-7dec6ee9bba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    // Photo by Yerlin Matu on Unsplash
    {
        id: "e",
        category: "Cats",
        title: "Yes, They Are Sociopaths",
        pointOfInterest: 200,
        backgroundColor: "#AC7441",
        image:
            "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    // Photo by Ali Abdul Rahman on Unsplash
    {
        id: "b",
        category: "Holidays",
        title: "Seriously the Only Escape is the Stratosphere",
        pointOfInterest: 260,
        backgroundColor: "#CC555B",
        image:
            "https://images.unsplash.com/photo-1527179528411-4219e0714bcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
];