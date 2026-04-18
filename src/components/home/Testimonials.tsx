import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "The craftsmanship of my gold necklace is exceptional. The attention to detail and the quality of the gold makes it a true investment piece that I'll cherish for years.",
    author: "Sarah Johnson",
    role: "Loyal Customer",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    text: "I purchased a bridal set for my wedding and it exceeded all expectations. The designs are unique and the gold purity is exactly as described. Couldn't be happier!",
    author: "Michael Chen",
    role: "New Customer",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    text: "The gold earrings I bought for my mother were absolutely stunning. The packaging was elegant and delivery was prompt. Will definitely be shopping here again.",
    author: "Priya Patel",
    role: "Regular Customer",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Customer Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience with our gold jewelry collection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <div className="flex justify-center mb-4">
                <svg className="h-8 w-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.065.242l-.522.15V14.2c.36-.05.717-.08 1.067-.08 1.32 0 1.98.66 1.986 1.983v.6c0 1.156-.67 1.73-2.01 1.73-1.06 0-1.96-.398-2.698-1.193-.74-.795-1.11-1.83-1.11-3.104 0-1.297.37-2.34 1.11-3.132.73-.79 1.632-1.186 2.697-1.186.385 0 .77.04 1.153.122l.69.2.15.695c.026.12.05.267.07.442.03.177.044.37.044.582 0 .43-.097.89-.29 1.37-.19.48-.47.86-.83 1.14l-.23.17-.39-.38c.34-.36.51-.82.51-1.37v-.01H4.54c.2-.46.61-.88 1.22-1.25.5-.3.94-.48 1.33-.55zm8.686 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.825-.56-.13-1.083-.14-1.57-.025-.15.045-.49.135-1.012.27l-.527.15v1.1c.36-.05.717-.08 1.067-.08 1.32 0 1.98.66 1.986 1.983v.6c0 1.156-.67 1.73-2.01 1.73-1.06 0-1.96-.398-2.698-1.193-.74-.795-1.11-1.83-1.11-3.104 0-1.297.37-2.34 1.11-3.132.73-.79 1.632-1.186 2.698-1.186.384 0 .77.04 1.153.122l.69.2.15.695c.026.12.05.27.07.442.03.177.044.37.044.582 0 .43-.097.89-.29 1.37-.19.48-.47.86-.83 1.14l-.23.17-.39-.38c.34-.36.51-.82.51-1.37v-.01h-1.98c.206-.5.65-.94 1.33-1.31.5-.28.94-.45 1.33-.52v-.04z" />
                </svg>
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;