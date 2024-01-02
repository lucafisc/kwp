import React from 'react';

type VimeoVideoProps = {
  videoId: string;
};

export const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId }) => {
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?h=f094628739&title=0&byline=0&portrait=0`;

  return (
    <iframe
      src={vimeoUrl}
      width="640"
      height="360"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
