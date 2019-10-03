var launcher = 'https://hosted-scratch.herokuapp.com/launch?template=';
// eslint-disable-next-line no-unused-vars
var launcher_pre = 'https://deployer-prerelease.herokuapp.com/launch?template=';

const workshops = [
    {
        name: 'Office Ping Pong Tracker App',
        shortname: 'pingpong',
        creator: 'Kristi Brown',
        description:
            'Kristi is a Lightning Champion and Salesforce Architect, she and her colleagues have stumbled upon an ancient pastime to well... pass the time. Ping Pong. Now, an office game turned tournament gauntlet, Kristi wanted to find a way to track her colleagues game stats that was simple, insightful, and fast. See how she built an app that does just that in less than 30 minutes on the Salesforce Lightning Platform.',
        docsURL: 'https://github.com/mshanemc/pingpong',
        // docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000J8MI/ZRSjDZh2GpA27vuht8K3h4DI1322h0XHAXnHfHMOPjM',
        videoURL: 'https://www.youtube.com/embed/jaJWPmauVm4',
        launchURL: launcher + 'https://github.com/mshanemc/pingpong'
    },
    {
        shortname: 'equipment_calibration',
        name: 'Equipment Calibration App',
        creator: 'Mike White',
        description:
            'Close your eyes and imagine you are the equipment manager at a major manufacturing warehouse. You are making your inspection rounds and realize how manual the process is. You think to yourself, wouldn’t it be awesome if I had an app that allowed me to track and monitor all the machines at once and have insights from the equipment data automatically sent to me. Now open your eyes, and watch how Mike was able to make that a reality in less than 30 minutes on the Lightning Platform.',
        // videoURL: 'https://www.youtube.com/embed/gyGt386eAqw?start=3532',
        launchURL: launcher + 'https://github.com/MBWhite01/EquipmentCalibration',
        docsURL: 'https://github.com/MBWhite01/EquipmentCalibration',
        imgURL: '/resources/images/coming_soon_equipment.png'
        // docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000J8MN/H9L7tSJBduvnvz4KIgtTjsyF6s98WsCw7nbbi.e03sA'
    },
    {
        name: 'EZ SMS TXT MSGR APP',
        shortname: 'texting_app',
        creator: 'Michelle Lavalette',
        description:
            'Meet Michelle. She loves connecting with people. In this day and age she understands that the easiest way to connect with people is through text message. Odds are you’re probably reading this on your phone as we speak. So as someone who wants to stay connected with her customers and colleagues, Michelle needed a way to do so. Not just when she’s on the go but also when her customers are on the go. See how she built an app to SMS text message members in a salesforce campaign updates, changes and more in less than 30 minutes built on the Lightning Platform.',
        docsURL: 'https://github.com/mshanemc/twilio-text-app',
        // docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000J8MS/PaJMIhyojXOsYxgLgkeH0DGokBdzha3fa7dtdgVVFO0',
        // videoURL: 'https://www.youtube.com/embed/gyGt386eAqw?start=3532',
        launchURL: launcher + 'https://github.com/mshanemc/twilio-text-app',
        imgURL: '/resources/images/coming_soon_sms.png'
    },

    {
        name: 'Race Team Sponsorship App',
        shortname: 'audiarmy',
        creator: 'Donald Bohrisch',
        description:
            'Donald loves a fast car, but not just any kind of fast car, he likes race cars. Daytona, Indy, milk at the finish line. That kind of car. And like most car aficionados he dreams to one day manage a race team of his own. And nothing is more iconic for a race car than their sponsorship logos. See how Donald was able to create a sponsorship tracking app for his team #TheAudiArmy in less than 30 minutes built on the Lightning Platform.',
        docsURL: 'https://github.com/mshanemc/audiarmy',
        // docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000J8MX/1F71i_RoP_ahlK7CpjV3wGjQy23q6RyMSRfkC2e5uWw',
        // videoURL: 'https://www.youtube.com/embed/gyGt386eAqw?start=3532',
        launchURL: launcher + 'https://github.com/mshanemc/audiarmy',
        imgURL: '/resources/images/coming_soon_audi.png'
    }
];

export { workshops };
