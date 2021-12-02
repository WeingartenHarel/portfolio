'use strict';
var gProjects = [

    {
        id: 'mixtape',
        name: 'mixtape',
        title: 'mixtape',
        desc: `טכנולוגויות פיתוח 
        VUE, NODE JS , REST API; MONGO, CLOUDINARY, SASS, JS es6  
        הסבר על האפלקציה:
        אפליקציה להאזנה , יצירה ושיתוף של רשימת השמעת מוזיקה. דומה לספוטיפיי. רק עם ענין שיתופי, כמו פודקאסטים או יוטיוב לייב.
        משתמשים יכולים להיכנס לפלייליסט מסוים לשמוע אותו ביחד, לערוך אותו - על כל מאפייניו , לשנות את סדר השירים להתכתב בצ'ט ייחודי לכל חדר השמעה ועוד...',
       
האפליקציה כולל CRUDL מלא ומשתמשת REST API על מנת לשלוח בקשות אל השרת ולקבל או לנהל מידע וכולל סרביסים וראטים שונים בהתאמה לכל ישות במאגר מידע
תקשורת בין משתמשים כמו כן סנכרון מלא של מידע בין משתמשים מתבצע על ידיי סוקטים נשלחים מצד לקוח לצד השרת ובחזרה

שימוש ב API חיצוני:
על מנת להשמיע את השירים נעשה שימוש בספרייה שמנגנת שירים דרך שרתי יוטיוב
הוספת שירים וחיפוש שירים גם נעשים דרך API של גוגל (יו טיוב)

בנוסף יש גם שימוש בספריית דראג אנד דרופ על מנת לנהל סדר של שירים בפלייליסט מסוים תוך כדי עדכון השרת בלייב

עיצוב:
העיצוב גם כן שלי, הלוגו כמו כן בחיהאפליקציה והפונטים. UX גם פותח על ידי ונשען על UX של ספוטיפיי, האפליקציה כמובן רספונסיבית ותומכת במצב דסקטופ ומצב מובייל  (שימוש ב SAAS)`,
       
        urlSec: 'https://awesome-mixtape.herokuapp.com/#/',
        url:'https://awesome-mixtape.herokuapp.com/#/',
        publishedAt: '9.10.2020',
        labels: ['CURDL', 'MVC'],
    },
    {
        id: 'memegenerator',
        name: 'MEME generator',
        title: 'MEME generator',
        desc: 'MEME generator',
        url: 'https://weingartenharel.github.io/meme-generator/',
        publishedAt: '9.10.2020',
        labels: ['CURDL', 'MVC'],
    },
    {
        id: 'landingpages',
        name: 'Landing pages',
        title: 'Landing pages',
        desc: 'Landing pages',
        url: 'https://photos.app.goo.gl/71cUrn84saSH1o5fA',
        publishedAt: '9.10.2020',
        labels: ['CURDL', 'MVC'],
    },
    {
        id: 'googlesim',
        name: 'Googles sims',
        title: 'Googles sims',
        desc: 'Google gmail notes and books simulator',
        url: 'https://weingartenharel.github.io/googlesim/#/',
        publishedAt: '9.10.2020',
        labels: ['CURDL', 'MVC'],
    },
    {
        id: 'bestten',
        name: 'Ten Best Casino',
        title: 'Ten Best Casino',
        desc: 'Ten Best Casino',
        url: 'https://weingartenharel.github.io/bestten/',
        publishedAt: '9.10.2020',
        labels: ['CURDL', 'MVC'],
    } 
];
