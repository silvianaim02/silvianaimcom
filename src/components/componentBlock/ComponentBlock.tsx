import { component, fields } from '@keystatic/core';

// import Banner from "./Banner";
// import InlineCTA from "./InlineCTA";
// import Divider from "./Divider";
// import YouTubeEmbed from "./YouTubeEmbed";
// import TweetEmbed from "./TweetEmbed";
// import LoopingVideo from "./LoopingVideo";
// import Testimonial from "./Testimonial";
import Image from './Image';

export const ComponentBlocks = {
  image: component({
    label: 'Image',
    preview: (props) => null,
    // (
    //   <Image
    //     src={props.fields.src.value ? `/${props.fields.src.schema.directory}/${props.fields.src.value.filename}` : '/images/no-image.png'}
    //     alt={props.fields.alt.value}
    //     caption={props.fields.caption.value}
    //   />
    // ),
    schema: {
      src: fields.image({
        label: 'Image',
        description: 'Image',
        // This will output the images in the "public" directory
        directory: 'public/images/articles',
        publicPath: '/images/articles/',
      }),
      alt: fields.text({
        label: 'Alt text',
        validation: { length: { min: 4 } },
      }),
      caption: fields.text({ label: 'Caption' }),
    },
  }),
  // divider: component({
  //   label: "Divider",
  //   preview: (props) => <Divider noIcon={props.fields.noIcon.value} />,
  //   schema: {
  //     noIcon: fields.checkbox({ label: "No Icon" }),
  //   },
  // }),
  // inlineCta: component({
  //   label: "Inline CTA",
  //   preview: (props) => (
  //     <InlineCTA
  //       title={props.fields.title.value}
  //       summary={props.fields.summary.value}
  //       linkButton={{
  //         externalLink: props.fields.externalLink.value,
  //         href: props.fields.href.value || "",
  //         label: props.fields.linkLabel.value,
  //       }}
  //     />
  //   ),
  //   schema: {
  //     title: fields.text({ label: "Title" }),
  //     summary: fields.text({ label: "Summary" }),
  //     linkLabel: fields.text({ label: "Link Label" }),
  //     href: fields.url({
  //       label: "Link",
  //       defaultValue: "",
  //       validation: { isRequired: true },
  //     }),
  //     externalLink: fields.checkbox({
  //       label: "External Link",
  //     }),
  //   },
  // }),
  // banner: component({
  //   label: "Banner",
  //   preview: (props) => (
  //     <Banner
  //       heading={props.fields.heading.value}
  //       bodyText={props.fields.bodyText.value}
  //       externalLink={{
  //         href: props.fields.externalLinkHref.value || "",
  //         label: props.fields.externalLinkLabel.value,
  //       }}
  //     />
  //   ),
  //   schema: {
  //     heading: fields.text({
  //       label: "Heading",
  //     }),
  //     bodyText: fields.text({
  //       label: "Body Text",
  //     }),
  //     externalLinkHref: fields.url({
  //       label: "External Link",
  //     }),
  //     externalLinkLabel: fields.text({
  //       label: "Link Label",
  //     }),
  //   },
  // }),
  // youtubeEmbed: component({
  //   label: "YouTube Embed",
  //   preview: (props) => {
  //     const youtubeLink = props.fields.youtubeLink.value;
  //     return youtubeLink ? <YouTubeEmbed youtubeLink={youtubeLink} /> : null;
  //   },
  //   schema: {
  //     youtubeLink: fields.url({
  //       label: "YouTube URL",
  //     }),
  //   },
  // }),
  // tweetEmbed: component({
  //   label: "Tweet Embed",
  //   preview: (props) => <TweetEmbed tweet={props.fields.tweet.value || ""} />,
  //   schema: {
  //     tweet: fields.url({
  //       label: "Tweet URL",
  //     }),
  //   },
  // }),
  // loopingVideo: component({
  //   label: "Looping Video",
  //   preview: (props) => (
  //     <LoopingVideo
  //       src={props.fields.src.value}
  //       caption={props.fields.caption.value}
  //     />
  //   ),
  //   schema: {
  //     src: fields.text({
  //       label: "File Name",
  //     }),
  //     caption: fields.text({
  //       label: "Caption",
  //     }),
  //   },
  // }),
  // testimonial: component({
  //   label: "Testimonial",
  //   preview: (props) => (
  //     <Testimonial
  //       quote={props.fields.quote.value}
  //       author={props.fields.author.value}
  //       workplaceOrSocial={props.fields.workplaceOrSocial.value}
  //       socialLink={props.fields.socialLink.value || ""}
  //     />
  //   ),
  //   schema: {
  //     quote: fields.text({
  //       label: "Quote",
  //       multiline: true,
  //     }),
  //     author: fields.text({
  //       label: "Author",
  //     }),
  //     workplaceOrSocial: fields.text({
  //       label: "Workplace or Social account name",
  //     }),
  //     socialLink: fields.url({
  //       label: "Social media link",
  //     }),
  //   },
  // }),
};
