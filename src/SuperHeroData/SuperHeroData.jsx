const superheros = [{
    id: crypto.randomUUID(),
    name: 'Spider-Man',
    real_name: 'Peter Benjamin Parker',
    description: "A teenager with spider-like powers—super strength, agility, wall-crawling, and a “spider-sense” that warns him of danger. Using his web-shooters, he fights crime while balancing life as a student and hero.",
    info: {
        publisher: 'Marvel',
        creators: ['Stan Lee', 'Steve Dikto'],
        created: 'October 1962',
        first_appearance: 'Amazing Fantasy #15',
        total_appearances: 17739
    },
    powers: [
        'Spider-Sense',
        'Superhuman Strength',
        'Superhuman Reflexes & Agility',
        'Web-Shooting',
        'Genius-Level Intellect',
        'Superhuman Durability & Healing'
    ]}, {
    id: crypto.randomUUID(),
    name: 'Wolverine',
    real_name: 'James Howlett',
    description: "Wolverine is a mutant with healing powers, retractable claws, and super-strong bones. A tough fighter and X-Men member, he’s known for his fierce nature and fast recovery.",
    info: {
        publisher: 'Marvel',
        creators: ['Len Wein', 'Roy Thomas', 'John Romita', 'Herb Trimpe'],
        created: 'October 1974',
        first_appearance: 'The Incredible Hulk #180',
        total_appearances: 16604
    },
    powers: [
        'Adamantium Skeleton & Claws',
        'Regenerative Healing Factor',
        'Enhanced Senses',
        'Superhuman Strength & Stamina',
        'Berserker Rage'
    ]}, {
    id: crypto.randomUUID(),
    name: 'Thor',
    real_name: 'Thor Odinson',
    description: "The God of Thunder, Prince of Asgard. Wielding his enchanted hammer Mjölnir, he controls lightning, storms, and possesses immense strength, durability, and the ability to fly.",
    info: {
        publisher: 'Marvel',
        creators: ['Stan Lee', 'Jack Kirby'],
        created: 'August 1962',
        first_appearance: 'Journey into Mystery #83',
        total_appearances: 8855
    },
    powers: [
        'Superhuman Strength',
        'Godlike Durability & Healing',
        'Mjölnir/Stormbreaker Powers',
        'Immortality & Longevity',
        'All-Father Powers',
        'Flight & Teleportation'
    ]}, {
    id: crypto.randomUUID(),
    name: 'Cyclops',
    real_name: 'Scott Summers',
    description: "Mutant and longtime leader of the X-Men. He can emit powerful, uncontrollable optic blasts from his eyes, which he controls using special ruby-quartz glasses. Known for his tactical genius and strong sense of duty, Cyclops is a disciplined warrior who fights to protect mutantkind.",
    info: {
        publisher: 'Marvel',
        creators: ['Stan Lee', 'Jack Kirby'],
        created: 'September 1933',
        first_appearance: 'The X-Men #1',
        total_appearances: 11501
    },
    powers: [
        'Optic Blast',
        'Expert Blast Control & Angles',
        'Master Strategist',
        'Energy Channeling',
        'Strong Mental Fortitude'
    ]}, {
    id: crypto.randomUUID(),
    name: 'Iron Man',
    real_name: 'Anthony Edward Stark',
    description: "A brilliant billionaire inventor who builds a powerful suit of armor to save his life and fight evil. Using advanced technology, he protects the world as Iron Man, balancing his genius, wealth, and heroism to battle villains and defend justice.",
    info: {
        publisher: 'Marvel',
        creators: ['Stan Lee', 'Jack Kirby', 'Don Heck', 'Larry Lieber'],
        created: 'March 1963',
        first_appearance: 'Tales of Suspense #39',
        total_appearances: 11544
    },
    powers: [
        'Super-Genius Intellect',
        'Powered Armor',
        'Repulsor Blast',
        'Unibeam',
        'Missle Systems',
        'Nano-Tech Armor'
    ]}
]