class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(post) {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: 'post',
        body: JSON.stringify(post),
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPost() {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: 'get',
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPostById(id) {
    try {
      const request = new Request(`${this.url}/posts/${id}.json`, {
        method: 'get',
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async deletePostById(id) {
    try {
        const request = new Request(`${this.url}/posts/${id}.json`, {
          method: 'delete',
        });
        return useRequest(request);
      } catch (error) {
        console.log(error);
      }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
//   console.log(response)
//   let obj = await response.json()
//   console.log(obj)
  return await response.json();
}

export const apiService = new ApiService(
  'https://oldremain-to-do-app-default-rtdb.europe-west1.firebasedatabase.app/'
);
