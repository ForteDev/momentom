const quotes = [
    {
        quote:"Keep on, then, seeking first the Kingdom and his righteousness, and all these other things will be added to you.",
        verse:"Matt 6:33",
    },
    {
        quote:"Do not be afraid, for I am with you. Do not be anxious, for I am your God.",
        verse:"Isa 41:10",
    },
    {
        quote:"Your word is a lamp to my foot, And a light for my path",
        verse:"Ps 119:105",
    }, 
    {
        quote:"Faith is the assured expectation of what is hoped for, the evident demonstration of realities that are not seen. ",
        verse:"Heb 11:1",
    },
    {
        quote:"Your strength will be in keeping calm and showing trust.",
        verse:"Isa 30:15",
    },
    {
        quote:"Do not be anxious over anything, but in everything by prayer and supplication along with thanksgiving, let your petitions be made known to God",
        verse:"Phil 4:6",
    },
    {
        quote:"For when I am weak, then I am powerful.",
        verse:"2 Cor 12:10",
    },
    {
        quote:"the word of God is alive and exerts power",
        verse:"Heb 4:12",
    },
    {
        quote:"Though Jehovah is high, he takes note of the humble, But the haughty he knows only from a distance.",
        verse:"Ps 138:6",
    },
    {
        quote:"Come to me, all you who are toiling and loaded down, and I will refresh you.",
        verse:"Matt 11:28",
    },
]

const quote = document.querySelector("#quote span:first-child");
const verse = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
verse.innerText = `- ${todaysQuote.verse} -`;