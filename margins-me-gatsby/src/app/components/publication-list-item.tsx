import React from 'react';
import { List } from 'antd';
import { Link } from 'gatsby';

// import * as LaunchTileTypes from '../pages/__generated__/LaunchTile';

import { extractPublicationAuthorAnnotationCount } from '../graphql/fragments';
import { PublicationAuthorAnnotationCountFragment } from '../__generated__/graphql-types';

interface PublicationListItemProps {
  publication: PublicationAuthorAnnotationCountFragment
}

const PublicationListItem: React.FC<PublicationListItemProps>
  = ({ publication }) => {

  const {title, annotationCount, authorNames, publicationId} = extractPublicationAuthorAnnotationCount(publication);

  return(
    <Link to={`/app/annotations/publication/${publicationId}`}>
      <List.Item
        key={title}
        extra={<p>Annotations: {annotationCount}</p>}
      >
        <List.Item.Meta
          title={title}
          description={authorNames}
        />
      </List.Item>
    </Link>
  )
}

export default PublicationListItem;

// sample code from antd
// <List.Item
//   key={item.title}
//   actions={[
//     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
//     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
//     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
//   ]}
//   extra={
//     <img
//       width={272}
//       alt="logo"
//       src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
//     />
//   }
// >
//   <List.Item.Meta
//     avatar={<Avatar src={item.avatar} />}
//     title={<a href={item.href}>{item.title}</a>}
//     description={item.description}
//   />
//   {item.content}
// </List.Item>
