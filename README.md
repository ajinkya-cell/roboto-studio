As I read the instructions, I understood that I had to work with **Sanity** and **Next.js**. I am quite confident with Next.js, but I had never heard about Sanity before.

So on the first day, I decided to learn what Sanity actually is. I also created a Sanity project by exploring Sanity’s official YouTube channel, where there is a video titled **“Sanity Everything.”**

https://github.com/ajinkya-cell/sanity-study

This project was based on an event management system, and it helped me become familiar with Sanity’s syntax, the use of Vision and GROQ, how to create schemas, and how to connect Sanity with the frontend.

Then came my actual project. I agree that I must have made several mistakes because I am still new to Sanity, but I can assure you that I will improve very quickly.

I started by designing and creating schemas—understanding how different schemas can be used, how pages should be structured, and how the content should look. I also tried asking AI for help, but honestly, it was not very helpful at first because GPT was giving me incorrect syntax.

After completing the schemas, I moved on to writing all the queries that I would need for the frontend to fetch data. I created queries for every required section.

Next, I started working on the frontend, where I faced a few obstacles. The first issue was that I could not find the icons used in the hero section. To solve this, I took the icons from Figma, converted them into PNG files, and used them as buttons in the hero section.

Then I encountered a font-related issue. I was not able to get **Galaxie Copernicus** for free. However, I managed to get **Galaxie Copernicus Book**, which is slightly thinner than the required font. I was prepared for this problem because I had faced a similar issue in one of my previous projects. To fix this, I used the following styling approach:

```jsx
style={{
WebkitTextStroke:'0.45px currentColor',
textShadow:'0 0 0.7px currentColor',
WebkitFontSmoothing:'antialiased',
MozOsxFontSmoothing:'grayscale',
}}

```

Calling APIs and working with Next.js was quite easy overall. However, there was a small detail related to the input box—the required font was **Galaxie Polaris**, which was also not available. To handle this, I used an almost identical font called **Barlow Condensed**.

One thing that truly gave me a heart attack was when I deployed my frontend and realized that I was not able to update the content through the CMS. To debug this issue, I took help from GPT, and the solution I found is something I will never forget. The fix was adding revalidation to my fetch query:

```jsx
asyncfunctiongetPage() {
const query = *[_type =="page" && contentType =="fireplace"][0]{
    headline,
"description":pt::text(description),
"imageUrl":Image.asset->url
  }

return client.fetch(query, {}, {
next: {revalidate:60 },// ⬅️ THIS LINE FIXES IT
  })
}

```
