export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards: VideoCardProps[] = [
  {
    id: "1",
    title: "Video 1",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2021-01-01"),
    userImg: "/assets/images/jason.png",
    username: "John Doe",
    views: 100,
    visibility: "public",
    duration: 100,
  },
  {
    id: "2",
    title: "How to Build a React App",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2022-03-15"),
    userImg: "/assets/images/jason.png",
    username: "Sarah Johnson",
    views: 2450,
    visibility: "public",
    duration: 325,
  },
  {
    id: "3",
    title: "JavaScript Tips and Tricks",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2022-05-22"),
    userImg: "/assets/images/jason.png",
    username: "Mike Chen",
    views: 1875,
    visibility: "public",
    duration: 245,
  },
  {
    id: "4",
    title: "Private Project Demo",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2022-08-10"),
    userImg: "/assets/images/jason.png",
    username: "John Doe",
    views: 42,
    visibility: "private",
    duration: 180,
  },
  {
    id: "5",
    title: "UI/UX Design Fundamentals",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2022-11-05"),
    userImg: "/assets/images/jason.png",
    username: "Emma Wilson",
    views: 3210,
    visibility: "public",
    duration: 420,
  },
  {
    id: "6",
    title: "Backend Development with Node.js",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2023-01-20"),
    userImg: "/assets/images/jason.png",
    username: "Alex Rodriguez",
    views: 1560,
    visibility: "public",
    duration: 375,
  },
  {
    id: "7",
    title: "Team Meeting - Q1 Planning",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2023-02-14"),
    userImg: "/assets/images/jason.png",
    username: "Sarah Johnson",
    views: 28,
    visibility: "private",
    duration: 540,
  },
  {
    id: "8",
    title: "Mobile App Development Tutorial",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2023-04-03"),
    userImg: "/assets/images/jason.png",
    username: "Mike Chen",
    views: 2105,
    visibility: "public",
    duration: 290,
  },
  {
    id: "9",
    title: "Database Design Best Practices",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2023-06-18"),
    userImg: "/assets/images/jason.png",
    username: "Emma Wilson",
    views: 1820,
    visibility: "public",
    duration: 310,
  },
  {
    id: "10",
    title: "Product Demo - Beta Version",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2023-08-25"),
    userImg: "/assets/images/jason.png",
    username: "Alex Rodriguez",
    views: 75,
    visibility: "private",
    duration: 195,
  }
];
