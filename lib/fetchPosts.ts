import { IPost } from "../types/Post";

export const fetchPosts = async (): Promise<IPost[]> => {
  const postsQuery = `
  query {
    user(username: "carrotfarmer") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
          coverImage
          totalReactions
          responseCount
        }
      }
    }
  }
  `;

  const res = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query: postsQuery }),
  });

  const data = await res.json();

  return data.data.user.publication.posts;
};
