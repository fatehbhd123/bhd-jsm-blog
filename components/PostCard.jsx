import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.8, duration: 1.5 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
    }
};
const PostCard = ({ post }) => {
    {
        return (<motion.div
            className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 overflow-x-hidden">
            <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
                <Image
                    unoptimized
                    loader={grpahCMSImageLoader}
                    alt={post.title}
                    className="shadow-lg rounded-t-lg lg:rounded-lg"
                    layout="fill"
                    src={post.featuredImage.url}
                />
            </div>

            <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
                    <Image
                        unoptimized
                        loader={grpahCMSImageLoader}
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div>
            <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                {post.excerpt}
            </p>
            <div className="text-center">
                <Link href={`/post/${post.slug}`}>
                    <motion.span
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="border-2 border-blue-600 inline-block text-blue-600 text-lg font-bold rounded-full bg-white px-8 py-3 cursor-pointer">Continue Reading</motion.span>
                </Link>
            </div>
        </motion.div>)
    }
}
    ;

export default PostCard;
