class YoutubeBean {
  constructor({ youtubes: [], error, error_msg }) {
    this.youtubes = youtubes;
    this.error = error;
    this.error_msg = error_msg;
  }
}

class YoutubeItemBean {
  constructor({ id, title, subtitle, avatar_image, youtube_image }) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.avatar_image = avatar_image;
    this.youtube_image = youtube_image;
  }
}

export { YoutubeBean, YoutubeItemBean };
