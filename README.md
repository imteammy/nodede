## Data table

- [Data table](#data-table)
- [**Rov api**](#rov-api)
- [**Servers**](#servers)
- [Required](#required)
- [Schema || Models](#schema--models)
- [**1.  Hero**](#1-hero)
- [**2. Items**](#2-items)
- [**3. Roons**](#3-roons)
- [**4. ChallengerSkills**](#4-challengerskills)
- [**5. Latens Skills**](#5-latens-skills)

---

| Base url                                                | Method | required | path       | Description             |
| ------------------------------------------------------- | ------ | -------- | ---------- | ----------------------- |
| [https://apirov.vercel.app](https://apirov.vercel.app/) | get    |          | /hero      | Get all heroes in json. |
|                                                         | post   | Required | /hero/name | Get hero by name        |
|                                                         | post   | Required | /hero/add  | Add new hero            |
|                                                         | post   | Required |            |                         |
|                                                         | post   | Required |            |                         |

## **Rov api**

```plaintext
Api สำหรับ app มือถือ flutter

Server   - Nodejs Express
Database - MongoDB (Mongoose)
```

---

## **Servers**

*   [https://apirov-imteammy.vercel.app](https://apirov-imteammy.vercel.app/)
*   [https://apirov-git-main-imteammy.vercel.app](https://apirov-git-main-imteammy.vercel.app/)
*   [https://apirov.vercel.app](https://apirov.vercel.app/)

---

## Required

> Required in post-delete-method **(case-sensitive);    // request-body or json**
> 
>     {
> 
>         token: "token",
> 
>         name: "heroName",
> 
>     **}

## Schema || Models

> **Hero Schema**
```json
{
    token: "token",
    name: "heroName",
    image: "heroImage",
    story: "heroStory",
    role: {
        main: "roleMain",
        sub: "roleSub",
    },
    passiveSkill: {
    name: "",
    image: "",
    effect: "",
    cooldown: ""
    },
    firstSkill: {
        name: "",
        image: "",
        effect: "",
        cooldown: ""
    },
    secondSkill: {
        name: "",
        image: "",
        effect: "",
        cooldown: ""
    },
    ultimateSkill: {
        name: "",
        image: "",
        effect: "",
        cooldown: ""
    }
}
```

---

## **1\.  Hero**

```plaintext
get      /hero              All Hero in json
post    /hero/name      Get the hero by name
post    /hero/add       Add new hero
post    /hero/update    Update hero
delete  /hero/delete    Delete hero
```

## **2\. Items**

```plaintext
get     /items           All items in json
post    /items/name      Get items by name
post    /items/add       Add new items
post    /items/update    Update items
delete  /items/delete    Delete items
```

## **3\. Roons**

```plaintext
get     /roons          All roons in json
post    /roons/name     Get roons by name
post    /roons/add      Add new roons
post    /roons/update   Update roons
delete  /roons/delete   Delete roons
```

## **4\. ChallengerSkills**

```plaintext
get     /challengersskill           All challengersskill in json
post    /challengersskill/name      Get challengersskill by name
post    /challengersskill/add       Add new challengersskill
post    /challengersskill/update    Update challengersskill
delete  /challengersskill/delete    Delete challengersskill
```

## **5\. Latens Skills**

```plaintext
get     /latensskill           All latensskill in json
post    /latensskill/name      Get latensskill by name
post    /latensskill/add       Add new latensskill
post    /latensskill/update    Update latensskill
delete  /latensskill/delete    Delete latensskill
```