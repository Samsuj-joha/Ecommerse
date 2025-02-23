import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    image: '/images/testimonial1.jpg',
    text: 'The quality of products and service is exceptional. I love how fresh everything is!',
  },
  {
    id: 2,
    name: 'Mohammed Rahman',
    role: 'Food Enthusiast',
    image: '/images/testimonial2.jpg',
    text: 'Best online grocery service I have ever used. The delivery is always on time.',
  },
  {
    id: 3,
    name: 'Fatima Ahmed',
    role: 'Home Chef',
    image: '/images/testimonial3.jpg',
    text: 'Their products are always fresh and of high quality. Highly recommended!',
  },
]

export default function Testimonials() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 