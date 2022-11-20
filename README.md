# Table of contents

- [Overview](#overview)
- [Technologies](#technologies)
- [API Routes](#api-routes)
- [Run Locally](#run-locally)
- [Demo](#demo)

# Overview

You can create post with functions like create, delete.

# Technologies

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


# API Routes

#### Get all posts

```http
  GET /posts
```

#### Get post

```http
  GET /posts/:postId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postId`| `string`| **Required**. postId |

#### Create new post

```http
  POST /posts
```
#### Delete post

```http
  DELETE /posts/:postId
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `postId` | `string` | **Required**. postId |

#### Create Post card

```http
  POST /posts/:postId/cards
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `postId` | `string` | **Required**. postId |

#### Delete post card

```http
  DELETE /posts/:postId/cards/:cardId
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `postId` | `string` | **Required**. postId |
| `cardId` |  `string`|  **Required**. cardId |

# Run Locally

Clone the project

```bash
  git clone git@github.com:Rokiis1/post-api-server.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# Demo

[API Link](https://notes-card.onrender.com)
