import { mockedRedisResponse, mockedBFF } from "./mockedResponse";

export const fetchData = (url, responseDelay = 300) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const mockedData = { ...mockedRedisResponse, ...mockedBFF };
      const response = mockedData[url];

      if (response) {
        return resolve({
          data: response,
        });
      } else {
        return reject({
          code: 404,
          message: "We can found this content",
        });
      }
    }, responseDelay)
  );
