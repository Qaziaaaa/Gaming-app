import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: "10 Tips for Better SEO in 2024",
        excerpt: "Learn the latest strategies to boost your organic traffic and dominate search rankings.",
        date: "March 15, 2024",
        author: "Jane Doe",
        category: "SEO",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=50&w=800"
    },
    {
        id: 2,
        title: "The Future of Social Commerce",
        excerpt: "Discover how social platforms are transforming into the new digital storefronts.",
        date: "March 12, 2024",
        author: "John Smith",
        category: "Social Media",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=50&w=800"
    },
    {
        id: 3,
        title: "Maximizing ROI with Google Ads",
        excerpt: "Pro tips for optimizing your PPC campaigns and reducing your cost per acquisition.",
        date: "March 10, 2024",
        author: "Mike Johnson",
        category: "PPC",
        image: "https://i.postimg.cc/gkdMMNgp/a-Maximizing-ROI-with.png"
    }
];

export default function Blog() {
    return (
        <div className="section-padding pt-32 pb-32">
            <header className="mb-20">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl lg:text-6xl font-bold mb-8 inline-flex"
                >
                    <span className="bg-lime px-6 py-2 rounded-xl border-2 border-black">Our Blog</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-600 max-w-2xl"
                >
                    Insights, trends, and strategies to help your business stay ahead of the digital curve.
                </motion.p>
            </header>

            {/* Featured Post */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 glass-effect p-8 rounded-[2.5rem] border-2 border-black grid lg:grid-cols-2 gap-12 items-center overflow-hidden group"
            >
                <div className="relative h-80 lg:h-full rounded-2xl overflow-hidden border-2 border-black">
                    <img
                        src={posts[0].image}
                        alt="Featured post"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
                <div>
                    <span className="bg-lime px-4 py-1 rounded-full text-sm font-bold border-2 border-black mb-6 inline-block">
                        Featured
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">{posts[0].title}</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {posts[0].date}</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {posts[0].author}</span>
                    </div>
                    <motion.button
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-2 font-bold group/btn"
                    >
                        Read Full Article <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                    </motion.button>
                </div>
            </motion.section>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {posts.map((post, i) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[16/10] rounded-3xl overflow-hidden border-2 border-black mb-6">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="space-y-4">
                            <span className="text-sm font-bold text-black bg-lime px-2 py-0.5 rounded uppercase tracking-widest">{post.category}</span>
                            <h3 className="text-2xl font-bold group-hover:underline transition-all underline-offset-4">{post.title}</h3>
                            <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                            <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                                <span>{post.date}</span>
                                <span className="font-bold flex items-center gap-1">Read More <ArrowUpRight className="w-4 h-4" /></span>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
