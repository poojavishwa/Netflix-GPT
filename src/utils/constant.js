export const MAIN_LOGO ="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"

export const IMG_LOGO =
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BG_IMG=
"https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const USER_AVATAR=
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFm-TFFhM9eCT4cFBt4n-cKKGqXLic7goSQA&usqp=CAU"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN_URL = 
  "https://image.tmdb.org/t/p/w500";

  export const SUPPORTED_LANGUAGES = [
    {indentifier : "en", name : "English"},
    {indentifier : "hindi", name : "Hindi"},
    {indentifier : "spanish" ,name : "Spanish"},
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

