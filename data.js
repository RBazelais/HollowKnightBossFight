// Boss data for Hollow Knight boss fight guide
const bosses = [
    {
        id: 'falseknight',
        name: 'False Knight',
        image: '/images/False_Knight.jpeg',
        description: 'The first major boss encountered in the Forgotten Crossroads. A large, armored bug who wields a massive mace.',
        location: 'Forgotten Crossroads',
        health: 225,
        difficulty: 'Easy',
        rewards: ['Geo', 'City Crest'],
        lore: 'A failed vessel who took up the armor and mace of a fallen Great Knight of Hallownest.',
        strategy: 'Stay close to avoid his shockwave attack. Attack when he pauses after his mace slams.'
    },
    {
        id: 'hornet',
        name: 'Hornet',
        image: '/images/Hornet-Main.jpeg',
        description: 'A mysterious warrior who acts as a guardian of Hallownest\'s ruins. Quick and agile with a needle and thread.',
        location: 'Greenpath',
        health: 225,
        difficulty: 'Medium',
        rewards: ['Mothwing Cloak'],
        lore: 'Daughter of Herrah the Beast, one of the Dreamers, and protector of Hallownest.',
        strategy: 'Watch for her tells before she lunges. Use the environment to avoid her aerial attacks.'
    },
    {
        id: 'mantislords',
        name: 'Mantis Lords',
        image: '/images/Mantis_Lords.jpeg',
        description: 'The honorable rulers of the Mantis Tribe. A trio of highly skilled warriors who fight with grace and precision.',
        location: 'Mantis Village',
        health: 210,
        difficulty: 'Hard',
        rewards: ['Respect of the Mantis Tribe', 'Access to Deepnest'],
        lore: 'Leaders of the Mantis Tribe who have long protected their territory from outsiders.',
        strategy: 'Focus on one at a time. Learn their attack patterns and dodge rather than tank hits.'
    },
    {
        id: 'crystalguardian',
        name: 'Crystal Guardian',
        image: '/images/Crystal_Guardian2.png',
        description: 'A bug corrupted by the crystalline energy of the Crystal Peak. Fires laser beams from its eyes.',
        location: 'Crystal Peak',
        health: 280,
        difficulty: 'Medium',
        rewards: ['Crystal Heart'],
        lore: 'Once a miner in the Crystal Peak, now transformed by the peak\'s strange energies.',
        strategy: 'Stay mobile to avoid his laser attacks. Use platforms to gain elevation advantage.'
    },
    {
        id: 'dungdefender',
        name: 'Dung Defender',
        image: '/images/Dung_Defender.jpeg',
        description: 'A cheerful, energetic warrior who defends the Royal Waterways. Attacks with balls of dung.',
        location: 'Royal Waterways',
        health: 350,
        difficulty: 'Medium',
        rewards: ['Elegant Key'],
        lore: 'One of the Five Great Knights of Hallownest, now protecting the waterways with enthusiasm.',
        strategy: 'Stay on the move to avoid his diving attacks. Attack when he emerges from the ground.'
    },
    {
        id: 'brokenvessel',
        name: 'Broken Vessel',
        image: '/images/Broken_Vessel.jpeg',
        description: 'An infected Vessel found in the Ancient Basin. Attacks with erratic movements and infection blobs.',
        location: 'Ancient Basin',
        health: 385,
        difficulty: 'Hard',
        rewards: ['Mothwing Cloak Upgrade'],
        lore: 'A failed Vessel like the Knight, but completely overtaken by the Infection.',
        strategy: 'Stay mobile and avoid the infection blobs. Use spells to deal damage from a distance.'
    },
    {
        id: 'soulmaster',
        name: 'Soul Master',
        image: '/images/Soul_Master.jpeg',
        description: 'The master of soul magic in the City of Tears. Uses powerful soul-based attacks and teleportation.',
        location: 'Soul Sanctum',
        health: 400,
        difficulty: 'Hard',
        rewards: ['Desolate Dive'],
        lore: 'Leader of the Soul Sanctum who sought to transcend mortality through soul mastery.',
        strategy: 'Watch for his teleportation tells. Use Desolate Dive to damage him during his ground slam.'
    }
];