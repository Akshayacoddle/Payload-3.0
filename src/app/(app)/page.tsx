import { Badge } from "@/components/Badge";
import { Background } from "@/components/Background";
import Link from "next/link";
import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise });

  const users = await payload.find({
    collection: "aboutHero",
  });
  console.log(users.docs);
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Blog
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          {users?.docs.map((user) => {
            return (
              <div className="grid gap-8 lg:grid-cols-2">
                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{"user.heading"}</a>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    "{user.description}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-7 h-7 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="Jese Leos avatar"
                      />
                      <span className="font-medium dark:text-white">
                        Jese Leos
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>

      {/* <p>
            This BETA is rapidly evolving, you can report any bugs against{' '}
            <Link href="https://github.com/payloadcms/payload-3.0-demo/issues" target="_blank">
              the repo
            </Link>{' '}
            or in the{' '}
            <Link
              href="https://discord.com/channels/967097582721572934/1215659716538273832"
              target="_blank"
            >
              dedicated channel in Discord
            </Link>
            . Payload is running at <Link href="/admin">/admin</Link>. An example of a custom route
            running the Local API can be found at <Link href="/my-route">/my-route</Link>.
          </p>
          <p>You can use the Local API in your server components like this:</p>
        // </article>
        <div className="codeBlock">
          <pre>
            <code>
              {`import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
const payload = await getPayloadHMR({ config: configPromise })

const data = await payload.find({
  collection: 'posts',
})

return <Posts data={data} />
`}
            </code>
          </pre>
        </div> */}
      {/* <Background /> */}
    </>
  );
};

export default Page;
