# Table of Contents
* [Introduction](#introduction)
    * [Features](#features)
    * [Lingo](#lingo)
* [Documentaion](#documentation)

# Introduction
Vichaar is a RESTful web API that lets you fetch one or n thoughts (quotes) from a database of 10,000+ thoughts (quotes).

## Features
* [Fetch A Particular Thought](#fetch-a-particular-thought)
* [Fetch A Random Thought](#fetch-a-random-thought)
* [Fetch N Random Thoughts](#fetch-n-random-thoughts)
* [Fetch A Random Thought Of A Particular Topic](#fetch-a-random-thought-of-a-particular-topic)
* [Fetch N Random Thoughts Of A Particular Topic](#fetch-n-random-thoughts-of-a-particular-topic)

List of topics is available [here](/public/lists/vishay.txt).

## Lingo
Vichaar's lingo is an amalgam of two languages. The greatest one (let's not start a war) and the most popular one. Below is a list of five Hindi words you need to know to use Vichaar.

### Vocab
\# | Word | Hindi
-- | ---- | -----
1 | __Sankhya__ | Number (ID)
2 | __Vichaar__ | Thought (Quote)
3 | __Vichaarak__ | Thinker (Author)
4 | __Vishay__ | Topic
5 | __Bhaasha__ | Language

Now with these five Hindi words under your belt, you are all set to play with the API.

# Documentation
__Base URL:__ `https://vichaar.herokuapp.com`

## Fetch A Particular Thought
Fetch a particular thought from the database with its ID.

* __URL__

    `/`

* __Method__

    `GET`

* __URL Params__

    __Required:__

    `sankhya=[ID]`

* __Success Response__

    * __Code:__ 200 OK
    * __Content:__

        ```json
        [
            {
                "sankhya":1234,
                "vichaar":"It's all about quality of life and finding a happy balance between work and  friends and family.",
                "vichaarak":"Philip Green",
                "vishay":"Life",
                "bhaasha":"English"
            }
        ]
        ```

* __Error Response__

    * __Code:__ 304 NOT MODIFIED
    * __Content:__ `[]`

* __Sample Call__

    ```
    curl --request GET \
      --url 'https://vichaar.herokuapp.com/?sankhya=1234'
    ```

* __Notes__

    304 NOT MODIFIED simply means that the requested thought was not found, hence an empty array `[]` is returned.

## Fetch A Random Thought
Fetch a random thought from the database.

* __URL__

    `/random`

* __Method__

    `GET`

* __Success Response__

    * __Code:__ 200 OK
    * __Content:__

        ```json
        [
            {
                "sankhya":6480,
                "vichaar":"I like long walks, especially when they are taken by people who annoy me.",
                "vichaarak":"Fred Allen",
                "vishay":"Funny",
                "bhaasha":"English"
            }
        ]
        ```

* __Sample Call__

    ```
    curl --request GET \
      --url https://vichaar.herokuapp.com/random
    ```

## Fetch N Random Thoughts
Fetch n number of random thoughts from the database.

* __URL__

    `/random`

* __Method__

    `GET`

* __URL Params__

    __Required:__

    `n=[Number]`

* __Success Response__

    * __Code:__ 200 OK
    * __Content:__

        ```json
        [
            {
                "sankhya":1042,
                "vichaar":"February days are a marketing gimmick; love happens every day.",
                "vichaarak":"Randeep Hooda",
                "vishay":"Love",
                "bhaasha":"English"
            },
            {
                "sankhya":2778,
                "vichaar":"We must not show to all and sundry the secrets of the waters flowing in ocean and river, or the devices that work on these waters. Let there be convened a council of experts and masters in mechanical art to deliberate what is needed to compose and construct these works.",
                "vichaarak":"Filippo Brunelleschi",
                "vishay":"Art",
                "bhaasha":"English"
            },
            {
                "sankhya":3222,
                "vichaar":"Rock n' roll as a genre is different from pop and hip hop: it is about bands, and that for me suggests brotherhood, family, friendship and community.",
                "vichaarak":"Steven Van Zandt",
                "vishay":"Friendship",
                "bhaasha":"English"
            },
            {
                "sankhya":6726,
                "vichaar":"I think it's great to see how they've grown up, not just as actors but as people. They're still very much the same kids that I met many years ago. They've grown up and they are funny and wicked and    naughty and bright, and I think as actors their work is just getting better and better. They've blossomed.",
                "vichaarak":"David Heyman",
                "vishay":"Funny",
                "bhaasha":"English"
            },
            {
                "sankhya":7413,
                "vichaar":"I wish people would turn off their computers, go outside, talk to people, touch people, lick people, enjoy each other's company and smell each other on the rump.",
                "vichaarak":"Tre Cool",
                "vishay":"Computer",
                "bhaasha":"English"
            }
        ]
        ```

* __Sample Call__

    ```
    curl --request GET \
      --url 'https://vichaar.herokuapp.com/random?n=5'
    ```

## Fetch A Random Thought Of A Particular Topic
Fetch a random thought of a particular topic from the database.

* __URL__

    `/random`

* __Method__

    `GET`

* __URL Params__

    __Required:__

    `vishay=[Topic]`

* __Success Response__

    * __Code:__ 200 OK
    * __Content:__

    ```json
    [
        {
            "sankhya":7413,
            "vichaar":"I wish people would turn off their computers, go outside, talk to people, touch people, lick people, enjoy each other's company and smell each other on the rump.",
            "vichaarak":"Tre Cool",
            "vishay":"Computer",
            "bhaasha":"English"
        }
    ]
    ```

* __Sample Call__

    ```
    curl --request GET \
      --url 'https://vichaar.herokuapp.com/random?vishay=Computer'
    ```

## Fetch N Random Thoughts Of A Particular Topic
Fetch n random thoughts of a particular topic from the database.

* __URL__

    `/random`

* __Method__

    `GET`

* __URL Params__

    __Required:__

    `vishay=[Topic]`
    
    `n=[Number]`

* __Success Response__

    * __Code:__ 200 OK
    * __Content:__

    ```json
    [
        {
            "sankhya":7137,
            "vichaar":"I know that I'm going to die and that you're going to die. I can't do anything about that. But I can explore it through a metaphor and make a kind of funny, dark story about it, and in doing so, really exhaust and research as many aspects of it as I can imagine. And in a way, that does give me some closure.",
            "vichaarak":"Chuck Palahniuk",
            "vishay":"Funny",
            "bhaasha":"English"
        },
        {
            "sankhya":7138,
            "vichaar":"I have only been funny about seventy four per cent of the time. Yes I think that is right. Seventy-four per cent of the time.",
            "vichaarak":"Will Ferrell",
            "vishay":"Funny",
            "bhaasha":"English"
        },
        {
            "sankhya":7139,
            "vichaar":"James Caan told me at the end of filming 'Elf' that he had been waiting through the whole film for me to be funny - and I never was.",
            "vichaarak":"Will Ferrell",
            "vishay":"Funny",
            "bhaasha":"English"
        },
        {
            "sankhya":7140,
            "vichaar":"There's always going to be someone as funny as you or funnier.",
            "vichaarak":"Will Ferrell",
            "vishay":"Funny",
            "bhaasha":"English"
        },
        {
            "sankhya":7141,
            "vichaar":"I was the kid next door's imaginary friend.",
            "vichaarak":"Emo Philips",
            "vishay":"Funny",
            "bhaasha":"English"
        }
    ]
    ```

* __Sample Call__

    ```
    curl --request GET \
      --url 'https://vichaar.herokuapp.com/random?vishay=Funny&n=5'
    ```

#### Signing-off v1.2, Abhay Kumar