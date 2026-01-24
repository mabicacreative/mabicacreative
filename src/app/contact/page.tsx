import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-20 bg-gradient-to-b from-morning-mist to-lime-shoot">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl text-deep-moss/90 max-w-3xl mx-auto">
              Interested in collaborating or learning more about MABICA? Reach out to us!
            </p>
          </div>
        </div>
        
        <section className="py-20 bg-morning-mist">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-playfair font-bold text-3xl text-deep-moss mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <Card className="bg-white border-sage-leaf/30">
                      <CardContent className="p-6">
                        <h3 className="font-playfair font-bold text-xl text-deep-moss mb-2">Email Us</h3>
                        <p className="text-deep-moss/80">General inquiries and collaborations</p>
                        <p className="text-sage-leaf font-medium mt-2">hello@mabica.id</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white border-sage-leaf/30">
                      <CardContent className="p-6">
                        <h3 className="font-playfair font-bold text-xl text-deep-moss mb-2">Location</h3>
                        <p className="text-deep-moss/80">Based in Indonesia</p>
                        <p className="text-sage-leaf font-medium mt-2">Available for virtual collaborations worldwide</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white border-sage-leaf/30">
                      <CardContent className="p-6">
                        <h3 className="font-playfair font-bold text-xl text-deep-moss mb-2">Social Media</h3>
                        <p className="text-deep-moss/80">Connect with us on our platforms</p>
                        <div className="flex space-x-4 mt-4">
                          <Button variant="outline" asChild>
                            <Link href="#">Discord</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href="#">Instagram</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href="#">YouTube</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href="#">TikTok</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h2 className="font-playfair font-bold text-3xl text-deep-moss mb-6">Send a Message</h2>
                  
                  <Card className="bg-white border-sage-leaf/30">
                    <CardContent className="p-6">
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-deep-moss font-medium mb-2">Name</label>
                            <Input id="name" placeholder="Your name" className="bg-morning-mist border-sage-leaf/30" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-deep-moss font-medium mb-2">Email</label>
                            <Input id="email" type="email" placeholder="your.email@example.com" className="bg-morning-mist border-sage-leaf/30" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-deep-moss font-medium mb-2">Subject</label>
                          <Input id="subject" placeholder="What's this regarding?" className="bg-morning-mist border-sage-leaf/30" />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-deep-moss font-medium mb-2">Message</label>
                          <Textarea 
                            id="message" 
                            placeholder="Tell us about your project, inquiry, or collaboration idea..." 
                            rows={6}
                            className="bg-morning-mist border-sage-leaf/30"
                          />
                        </div>
                        
                        <Button type="submit" className="w-full bg-sage-leaf hover:bg-deep-moss text-morning-mist py-6">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-8 bg-lime-shoot p-6 rounded-xl">
                    <h3 className="font-playfair font-bold text-xl text-deep-moss mb-2">Looking to Collaborate?</h3>
                    <p className="text-deep-moss/80">
                      We're always open to new creative partnerships. Whether you're a writer, artist, musician, or developer, 
                      we'd love to hear how you'd like to contribute to the MABICA ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}