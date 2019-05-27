import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  responseType: 'json',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: 'AIzaSyD603KxaNVZJMmlXKVxKNX48ShkoWk8aZg'
  }
});
