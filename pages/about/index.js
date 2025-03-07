import Layout from "../../components/layout/Layout";
import {CameraIcon} from "@heroicons/react/outline";

export default function About() {
  return (
    <>
      <Layout>
        <div className="bg-white overflow-hidden">
          <div
            className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div
              className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"/>
            <div
              className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2
                  className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About
                  👋</h2>
                <h3
                  className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Hey I’m Dan and I created Mudmap
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <svg
                  className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4}
                            className="text-gray-200" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width={404} height={384}
                        fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
                </svg>
                <div
                  className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <img
                        className="rounded-lg shadow-lg object-cover object-center"
                        src="/assets/about/dan-walking.jpeg"
                        alt="Whitney leaning against a railing on a downtown street"
                        width={1184}
                        height={1376}
                      />
                    </div>
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <CameraIcon className="flex-none w-5 h-5 text-gray-400"
                                  aria-hidden="true"/>
                      <span
                        className="ml-2">Australia, Dan and Finn the dog</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    I’m also the designer, engineer, marketing guru and
                    customer
                    support.
                  </p>
                </div>
                <div
                  className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <p>
                    I never set out to make Mudmap a revolutionary product. I
                    made it to make life
                    a little easier and free up time for other things. It is
                    the brainchild of
                    many hours toiling away in SSH tunnels or OpenVPN
                    connections only to make a
                    small change, or conduct an audit. I wanted a central point
                    of reference, to
                    stop wasting my precious time, and I wanted to give you
                    that freedom, too.

                  </p>
                  <p>
                    There is no board of directors, marketing team, or anyone else. It's just me,
working to make this product better every day. If you email, or raise a support
ticket you will get a direct response from me - someone who is intimately aware
of how the system works and wants you to succeed.
                  </p>
                  <p>
                    I try to be transparent about what this product is and isn't whilst providing
rock-solid service. I do this by publishing updates, maintaining a presence on
social media and listening to your requests, and gripes. If there is a process
or a feature that I can implement to make your job more efficient, reach out
and email me at <a href="mailto:dan@mudmap.io">dan@mudmap.io</a>
                  </p>
                  <p>What Mudmap should be to you</p>
                  <ul>
                    <li>A simple and easy to use tool for managing your <i>pfSense</i> firewalls.</li>
                    <li>Evolving - the features are continually being developed, and you should feel empowered to ask for more
                    </li>
                    <li>Valuable in both time and money - if that stops being true, let me know even if you've already made your mind up to leave
                    </li>
                  </ul>
                  <p>
                    Cheers from Australia,
                    <span><br/></span>
                    <a href="https://twitter.com/dansult" className="text-gray-700">Dan</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
