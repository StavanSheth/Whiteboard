[00:00:00] Welcome back aliens. My name is Evan
[00:00:02] Reddi and in this video we'll talk about
[00:00:04] system design. I know you are waiting
[00:00:07] from a long time for a system design
[00:00:10] course on Teliscoco and finally we are
[00:00:12] here. Now in this course we are going to
[00:00:14] understand different aspect of system
[00:00:16] design. Now why is important? When you
[00:00:19] go for the interviews most of the
[00:00:20] companies will ask you for system design
[00:00:23] knowledge and the question will be based
[00:00:24] on that. Now of course they will not be
[00:00:27] saying this is a system design round but
[00:00:28] they will expect from you to understand
[00:00:30] different concepts here and how will you
[00:00:32] solve a complex problem and let me give
[00:00:35] you a statement which highlights this
[00:00:37] and I have it here. Anyone can write a
[00:00:39] code that works. A system design is what
[00:00:43] makes it work for million people at
[00:00:47] once. And that's the power of system
[00:00:49] design. See when you write a code of
[00:00:51] course when you learn a language you
[00:00:53] learn a framework you can build
[00:00:54] application that framework and I mean
[00:00:56] the entire project will work the moment
[00:00:58] you deploy it the moment it is in
[00:01:00] production and when you have users not
[00:01:02] just 10 users of course it will work for
[00:01:04] 10 users and it should work for 10 users
[00:01:06] but the moment you have 10 million users
[00:01:09] accessing that at the same time will it
[00:01:12] work that's the question when you talk
[00:01:14] about all your favorite applications it
[00:01:15] can be WhatsApp YouTube Instagram or
[00:01:18] Amazon for that matter there are not few
[00:01:21] users who are accessing that at one time
[00:01:23] there are millions of users but still if
[00:01:26] you can see they work so how do we do it
[00:01:30] and that's where system design plays a
[00:01:32] huge role now to understand this we have
[00:01:34] we will be going through this concepts
[00:01:36] so in this particular video we are going
[00:01:39] to start with the basics of system
[00:01:41] design what is system design what are
[00:01:42] different components uh data versus
[00:01:45] compute intensive and functional and
[00:01:47] non-functional and all this comes under
[00:01:49] foundation. Now once it is done we'll
[00:01:51] talk about how the communication happens
[00:01:53] between different systems. So we'll
[00:01:55] focus on DNS API and of course rest
[00:01:58] which you might be knowing if you have
[00:01:59] worked with uh spring boot or fast or uh
[00:02:03] Django and any web framework. Then we'll
[00:02:06] move towards the data. Of course when
[00:02:07] you have lot of users how will you store
[00:02:10] data? Not just their personal data but
[00:02:11] their activities. uh and in that we have
[00:02:14] different options like SQL databases, no
[00:02:16] SQL databases, when to use cache and
[00:02:18] when to use SQL and non-SSQL then let's
[00:02:22] say your users are growing day by day
[00:02:24] how you are going to manage your
[00:02:26] application and that's where scaling and
[00:02:28] distribution comes into picture in which
[00:02:30] we'll talk about uh load balancers
[00:02:32] replication partitioning and the cap
[00:02:35] theory that this will be interesting the
[00:02:36] cap theorem and then we'll talk about
[00:02:40] operations and reliability and the most
[00:02:42] important part that becomes a fault
[00:02:44] tolerant. What if something goes wrong?
[00:02:46] Does your application do have something
[00:02:48] to do that? Uh in which we'll talk about
[00:02:50] message cues and monitoring as well. And
[00:02:52] of course, we'll cover different
[00:02:53] examples here to understand different
[00:02:55] concepts. And the entire section or this
[00:02:59] part will be taken by an amazing trainer
[00:03:01] Akshai who is very good in explaining
[00:03:03] stuff and I hope you will enjoy the
[00:03:05] entire part and do share your thoughts
[00:03:08] in the comment section. Don't keep it
[00:03:10] blank. uh you what you like, what you
[00:03:12] don't like. If you have any questions,
[00:03:13] do point it there and we'll try to
[00:03:15] answer them. And if you enjoy this type
[00:03:17] of videos from us, let me know in the
[00:03:19] comments as well. That is our motivation
[00:03:21] and I hope you're motivated. Let's get
[00:03:23] started. A is all set.
[00:03:28] Hello everyone, welcome back to Tellesu.
[00:03:30] My name is Axia Garbal and today we are
[00:03:32] going to start the system design course.
[00:03:34] In this course, we are covering each and
[00:03:36] every topic which includes in system
[00:03:38] design. So let's start with
[00:03:40] understanding why do we need system
[00:03:42] design at all. In systems we have a lot
[00:03:45] of systems around us. If we talk about
[00:03:47] human body only we have digestive system
[00:03:50] and also we have a respiratory system.
[00:03:52] Along with this we have a lot of systems
[00:03:54] but these kind of systems are pre-built.
[00:03:57] It means we have not created them. We
[00:03:59] just discovered them with time and we
[00:04:01] got to know about various components
[00:04:03] which are required for us to breathe or
[00:04:06] to digest our food. So in these systems
[00:04:09] as they are not built by us we can't
[00:04:11] actually change anything maybe through
[00:04:12] surgery we can change some of the other
[00:04:14] component but not much but the kind of
[00:04:17] system we talk about in IT industry are
[00:04:20] the systems which are built by human or
[00:04:22] engineers like us only. So in that there
[00:04:26] is a possibility that we can pick our
[00:04:28] systems based on our requirement and
[00:04:30] also based on our requirement we can
[00:04:33] pick the components which are required
[00:04:35] in our system and we can basically
[00:04:37] improve our system based on the request
[00:04:39] we are getting based on the load our
[00:04:42] system is managing based on the kind of
[00:04:44] traffic which we are getting in our
[00:04:45] system. So in system design if we go
[00:04:48] through the words we have two words here
[00:04:49] right one is system and one is design.
[00:04:52] What is a system? If we go through the
[00:04:54] definition system basically means there
[00:04:57] are lot of components. There can be more
[00:04:59] than one components in that system. So
[00:05:02] let me write components and those
[00:05:04] components are working eventually to
[00:05:06] solve a particular use case or maybe
[00:05:08] multiple use cases but the common
[00:05:10] purpose of the application remains same.
[00:05:13] So that means if we write system is
[00:05:15] equal to components plus common goal.
[00:05:18] This sums up our definition of system.
[00:05:20] Now when we talk about design there are
[00:05:22] various components which we are going to
[00:05:24] learn and there are various common goals
[00:05:26] based on the requirement analysis of
[00:05:28] different applications which we are
[00:05:30] going to cover in this particular
[00:05:31] series. But in order to start let's not
[00:05:34] dig too much into the technical details
[00:05:35] in this video. Let's start from a very
[00:05:38] basic. Let's say we have a requirement
[00:05:40] of creating our own application or our
[00:05:43] own bank. Let's say we have a bank named
[00:05:46] alien bank because we are in telescope.
[00:05:48] Why not? And in this bank we are not
[00:05:51] dealing about each and every operation.
[00:05:53] Currently we have a single operation
[00:05:55] which is we have a cash counter and we
[00:05:58] have a person sitting on a cash counter.
[00:06:00] Let's name it as cashier. Okay. So here
[00:06:03] we are ready with our cashier who is on
[00:06:05] our cash counter. And the requirement or
[00:06:08] the flow is pretty simple. For the flow
[00:06:10] let's understand the concept of our
[00:06:11] bank. So we have multiple let's say
[00:06:14] customers are here and each customer
[00:06:17] will come to our counter either withdraw
[00:06:19] or deposit some amount get the receipt
[00:06:22] from the cashier and then move forward.
[00:06:24] So let's write it down as customer flow
[00:06:26] cycle. So in our customer flow cycle
[00:06:29] there are four steps basically customer
[00:06:30] first will visit the counter will come
[00:06:32] to the counter then the customer will
[00:06:35] either withdraw or deposit some amount
[00:06:37] take the receipt from the cashier and
[00:06:39] then the transaction is done. the
[00:06:41] purpose of our application is done. So
[00:06:43] these are the core functionality of our
[00:06:44] system. It is very basic, very easy. You
[00:06:47] might have seen this already in some of
[00:06:49] the banks. So we are building the same
[00:06:51] architecture right now. The architecture
[00:06:53] basically looks like this. Now in order
[00:06:55] to understand system design what it
[00:06:57] really is and how we are going to
[00:06:59] improve the working of our alien bank,
[00:07:02] let's face some issues. We are going to
[00:07:03] face five issues and based on the issues
[00:07:05] and solutions, we are going to
[00:07:07] understand how system design looks like.
[00:07:10] So here comes our first issue which is
[00:07:12] the process is really slow. By slow what
[00:07:15] we meant is let's say our cashier takes
[00:07:18] 10 minutes per customer. So that means
[00:07:20] we are serving only six customers in 1
[00:07:23] hour span. So this is a huge issue
[00:07:25] because if the number of customers will
[00:07:28] increase to a limit and also we have
[00:07:29] rush hour in those cases our system will
[00:07:32] break and we will be not able to serve
[00:07:34] the customers rightly. So in order to
[00:07:36] improve this let's first focus on our
[00:07:38] cashier. So let's understand our system
[00:07:41] from the cashier's point of view. So
[00:07:43] basically our cashier is taking time to
[00:07:46] understand the requirement. By
[00:07:48] requirement I mean whether the customer
[00:07:50] needs to deposit the amount or customer
[00:07:52] needs to withdraw the amount. They have
[00:07:53] to make this interaction which is
[00:07:55] timeconuming. Right now once the
[00:07:56] requirement is locked whether the
[00:07:58] customer is trying to deposit the amount
[00:07:59] or withdraw the amount the cashier
[00:08:02] manually have to count the cash and then
[00:08:04] our cashier will prepare a receipt which
[00:08:06] will be again given to our customer. So
[00:08:08] these are the time consuming tasks for
[00:08:10] our cashier. How can we improve the
[00:08:13] cashier time? So in order to improve the
[00:08:15] working of our cashier, we have three
[00:08:17] major issues. First is they are not able
[00:08:20] to understand the requirement. Next is
[00:08:23] they are counting the cash manually
[00:08:25] which is taking time and again they have
[00:08:28] to prepare the receipt. So these are the
[00:08:30] issues which our cashier is failing and
[00:08:32] we are trying to solve these issues.
[00:08:34] Maybe we can train our cashier in order
[00:08:37] to count the cash very rapidly. Okay.
[00:08:40] Also, our cashier is also responsible
[00:08:42] for maintaining the receipt. So, we will
[00:08:45] improve the typing speed of our cashier
[00:08:47] in order to make the receipt very fast.
[00:08:50] So, the second thing is train to type
[00:08:52] fast. So, with this what we are doing,
[00:08:54] we are not adding any resources to our
[00:08:57] cashier. Simply we are making our
[00:08:59] cashier super fast, right? We are
[00:09:02] improving the skills of our cashier
[00:09:03] which is required for them to maintain
[00:09:05] this job. And let's say through this
[00:09:07] training the cashier is really improved.
[00:09:09] Now he is or he or she is now taking
[00:09:13] let's say 5 minutes in order to fulfill
[00:09:17] one customer's need. So this is a huge
[00:09:19] improvement. By this we are able to
[00:09:21] improve the process by 50%. So let's say
[00:09:24] our second issue is that the customers
[00:09:26] which our cashier used to attend are
[00:09:29] increasing very fast because this is our
[00:09:31] alien bank and it is working very fastly
[00:09:34] right growing very fastly. So now the
[00:09:36] issue two is our customers count is
[00:09:38] increasing. This is our issue two. In
[00:09:41] this case what we know so far we know
[00:09:44] that our cashier we can't improve our
[00:09:46] cashier performance because it is now at
[00:09:48] its peak. So we have to basically handle
[00:09:50] some of the other components to our
[00:09:52] cashier in order to make the work very
[00:09:54] fluently. So maybe the desk on which our
[00:09:58] cashier is sitting we will increase the
[00:10:00] size of desk. So next thing which we can
[00:10:02] do is we will provide the cash counting
[00:10:04] machine to our cashier so that the
[00:10:05] manual cash counting time will get
[00:10:08] reduced. Right? So we will provide cash
[00:10:11] counting machine. Right? So with this
[00:10:13] also the time will reduce and our
[00:10:16] cashier will be able to attend more
[00:10:17] customers. One more thing we can do that
[00:10:20] is instead of coming to counter and
[00:10:23] getting the requirement at the real time
[00:10:26] we can give a form in advance to all
[00:10:28] customers so that they can fill it and
[00:10:31] our interaction time will get reduced.
[00:10:34] Right? So our cashier will now don't
[00:10:36] have to communicate each and every
[00:10:38] request to our customers. uh they can
[00:10:40] simply see the form and based on the
[00:10:42] form they will fill out the thing and
[00:10:45] now our cashier have cash counting
[00:10:48] device also so the process will be fast.
[00:10:51] Let's say through these processes
[00:10:53] through enhancing our desk or cash
[00:10:55] counter the timing got reduced from 5
[00:10:58] minutes per customer to 3 minutes per
[00:11:01] customer. This is also a huge impactful
[00:11:04] thing. So now our cash counter is
[00:11:06] capable of attending more customers in
[00:11:08] lesser time. So that means even if the
[00:11:11] customer count is increasing, we will be
[00:11:13] able to process more customers and
[00:11:15] enroll more customers into our alien
[00:11:17] bank. So this issue is also kind of
[00:11:19] solved. Now let's move to the third
[00:11:21] issue. The issue three is our customers
[00:11:24] are still waiting to get their
[00:11:25] application resolved. Right? Currently
[00:11:28] what do we have? We have our cashier who
[00:11:31] is upgraded to its maximum level. So we
[00:11:34] can't upgrade the cashier more. Also the
[00:11:36] desk on which it is sitting the cash
[00:11:38] counter is also upgraded to it maximum
[00:11:41] limit. So we can't upgrade our cash
[00:11:43] counter more. So these two things are
[00:11:45] pretty solid right now. We can't improve
[00:11:47] it. Now now the thing is so if we have
[00:11:50] 10 customers in place that means our
[00:11:53] 10th customer will have to wait for 27
[00:11:56] minutes in order to process the 3minut
[00:11:59] work. So that is a huge drawback of our
[00:12:01] system right now. And why that drawback
[00:12:03] is coming? Because we have only single
[00:12:06] cache counter in our system. So in order
[00:12:08] to make the process more feasible. Now
[00:12:11] we have reached that point that we have
[00:12:13] to add more cache counters into our
[00:12:15] system. So let's add them. So now we
[00:12:18] have our cash counter one and cash
[00:12:20] counter two. Now at this point we have
[00:12:22] added one more counter and things are
[00:12:24] pretty solid right now. So our customers
[00:12:27] will eventually have two counters to go
[00:12:30] to and both of those counters will be
[00:12:32] able to solve our issues. It feels good
[00:12:34] right now. We have two counters to
[00:12:36] process. So our customers will not have
[00:12:38] to wait for longer time. They can either
[00:12:40] go to counter one or they can go to
[00:12:42] counter two. But let's say if first
[00:12:45] customer is going to counter one and the
[00:12:47] counter one is able to process the
[00:12:49] information and they are maintaining
[00:12:51] their own data and similarly our second
[00:12:54] counter is also maintaining its own data
[00:12:56] and they are not synced. So this creates
[00:13:00] two issue right. First issue is if in
[00:13:02] our system the counter to doesn't know
[00:13:05] anything about the customer that will
[00:13:07] create an issue because they have a
[00:13:09] valid account in our bank and they
[00:13:11] should be able to proceed their
[00:13:12] information through it. Now the second
[00:13:15] issue is this only that from the first
[00:13:18] account they can also withdraw the
[00:13:21] amount and they will not update the
[00:13:23] second counter. So that means they can
[00:13:25] again withdraw the amount from cash
[00:13:27] counter 2 also. This will create an
[00:13:29] issue of data discrepancy. That means
[00:13:31] the data is not synced. So the fourth
[00:13:34] issue here is we need to have a
[00:13:35] centralized database or central data
[00:13:38] from which the cash counter one and cash
[00:13:40] counter two will go and validate the
[00:13:43] data and go and retrieve the data. If
[00:13:46] the account is there for any customer
[00:13:48] and the amount is also there. So the
[00:13:50] customer one will also insert the cash
[00:13:53] into the same account and if the counter
[00:13:55] two is getting withdrawal request they
[00:13:57] will also get the amount out of the same
[00:14:00] account. So in order to fix this we need
[00:14:03] to have a centralized data. That means
[00:14:04] our counter will look like this. This is
[00:14:06] our counter let's say two. This is our
[00:14:09] counter one. And they will eventually
[00:14:11] connect to a centralized database. And
[00:14:14] as it was before our customers are
[00:14:16] standing in a queue waiting for their
[00:14:18] turn to come in order to get the
[00:14:20] request. Now after solving all these
[00:14:23] case also we have a new issue in hand
[00:14:26] which is let's say the gate of our bank
[00:14:29] is here. This is our alien bank. So
[00:14:31] since the gate is here, most of our
[00:14:33] customers are going to the cache counter
[00:14:36] one only where cache counter 2 is
[00:14:38] sitting idle or maybe processing lesser
[00:14:41] request far lesser requests than the
[00:14:43] cash counter one. This will again end up
[00:14:46] adding the wait time to our customers
[00:14:47] and again we will be end up handling
[00:14:50] lesser customers than our potential. So
[00:14:52] let's write that down. This is our issue
[00:14:54] five which is underutilized counter. Now
[00:14:57] in order to solve this issue, we need to
[00:14:59] have a middleman which will stand apart
[00:15:02] from our counters. Let's say this is our
[00:15:04] counter two. Again this is our counter
[00:15:06] one and here are our customers. And now
[00:15:10] our customers will not go to the counter
[00:15:12] directly. They will first go to this
[00:15:14] middleman. Then the middleman will check
[00:15:17] how much load each counter is handling.
[00:15:20] Suppose there are 10 customers at
[00:15:22] counter one and only five customers at
[00:15:24] counter two. Then our middleman can
[00:15:27] decide that next customer should go to
[00:15:30] the counter two and the count will
[00:15:32] increase to six right and the next
[00:15:35] customer will again go to counter two
[00:15:37] and the next customer is again going to
[00:15:40] counter two only when the limit reach
[00:15:43] let's say we have 11 customers here and
[00:15:46] 11 customers here and if then any new
[00:15:49] customer arrive they will again ask the
[00:15:51] middleman where to go let's say on some
[00:15:54] fine day our counter one is not working.
[00:15:56] That means our middleman will know about
[00:15:59] this and will eventually send all the
[00:16:01] customers to counter two until the
[00:16:04] counter one is getting fixed. So let's
[00:16:06] end this example here at this particular
[00:16:08] point and see what have we learned
[00:16:11] through this story through this single
[00:16:12] story and five issues. I have tried to
[00:16:14] capture multiple concepts of such
[00:16:16] design. So the first concept which we
[00:16:19] discussed is designing a system. That is
[00:16:21] for sure. Ultimately what design we do
[00:16:24] have here we have one cashier and the
[00:16:27] other cashier. Each cashier is having
[00:16:30] their own counter. So this is our
[00:16:32] counter two. Maybe this is a counter
[00:16:34] one. We have a number of customers
[00:16:37] waiting for us. Also we have a
[00:16:39] middleman. Now with that we also have a
[00:16:42] common database. Okay. So this database
[00:16:45] is nothing but centralized database. The
[00:16:48] customers which are coming to our bank
[00:16:51] is nothing but requests and if they are
[00:16:53] standing in a queue we can say they are
[00:16:55] creating a traffic. Okay. See these are
[00:16:58] the traffic which we are going to
[00:16:59] handle. Now all the request or all the
[00:17:02] traffic it's coming through a load
[00:17:04] balancer the middleman. So this is
[00:17:07] nothing but our load balancer. So from
[00:17:09] the load balancers all the requests are
[00:17:11] coming to either of the cache counter.
[00:17:14] So we can say that our cache counter is
[00:17:16] nothing but servers and the person
[00:17:19] sitting there doing the work is nothing
[00:17:21] but our application code. Now let's see
[00:17:23] the system again through the system
[00:17:25] design point of view. So the first issue
[00:17:27] which we have was our process is slow.
[00:17:30] So in order to solve that we improved
[00:17:32] our code quality right. So first thing
[00:17:35] which we do in our systems also we
[00:17:37] improve our code quality. So this is
[00:17:39] where our LLD will come and this is
[00:17:42] where our DSA will come. Suppose a
[00:17:45] particular loop is taking certain time
[00:17:47] we can reduce that loop or we can change
[00:17:49] that loop to some for each function or
[00:17:51] some other way in order to process that
[00:17:54] information fast. So while solving the
[00:17:56] issue two we increase the size of our
[00:17:58] table we added some functionality we
[00:18:00] added this cache counter that means we
[00:18:03] upgraded our server. So in order to
[00:18:06] upgrade our server this term is called
[00:18:07] vertical scaling. In vertical scaling we
[00:18:10] don't add multiple servers. We basically
[00:18:13] update our current server only. And
[00:18:15] again the current server updation have a
[00:18:18] particular limit. After that limit you
[00:18:20] can't upgrade your system. So then comes
[00:18:23] the issue third which is our customers
[00:18:26] need to wait for the single server to
[00:18:28] respond. So in this case we added more
[00:18:31] server. So in this scaling we added more
[00:18:33] server that is called horizontal
[00:18:35] scaling. So after having multiple
[00:18:37] servers we need to maintain the data at
[00:18:39] the common point. So that's why we added
[00:18:42] databases and in order to add a common
[00:18:44] database we basically can move to
[00:18:46] distributed database architecture or can
[00:18:49] move to a centralized approach of
[00:18:50] handling that database. So this is
[00:18:53] nothing but centralized database. So
[00:18:56] after having centralized database again
[00:18:58] the issue comes where we don't know how
[00:19:00] to handle multiple requests that means
[00:19:03] our requests are again going to one
[00:19:05] counter only or one server only. Now
[00:19:07] that we know they are going to one
[00:19:10] server only and the other server is
[00:19:12] underutilized. So what we did we added a
[00:19:14] middleman. Our middleman is no one but
[00:19:17] our load balancer. Our load balancer
[00:19:20] basically do two things. They will check
[00:19:22] whether our servers are healthy or not.
[00:19:24] and based on that they will distribute
[00:19:26] the request equally into multiple
[00:19:28] servers. So these are all the concepts
[00:19:31] which we discovered through this
[00:19:32] particular example. So if we think about
[00:19:34] the applications we are using in our
[00:19:36] day-to-day life, we are using WhatsApp,
[00:19:39] we are using maybe Snapchat, we are
[00:19:41] using Instagram, we are using YouTube,
[00:19:44] we are using LinkedIn, we are using
[00:19:46] Netflix, Amazon, maybe Flipkart. All of
[00:19:50] the applications if we think about it
[00:19:52] are showing us the data either in the
[00:19:54] form of images or in videos in audios or
[00:19:58] in text. So we can say through a large
[00:20:01] lens the data consist of these four kind
[00:20:04] of information and all of the
[00:20:06] applications which we are using in our
[00:20:07] day-to-day life consist of these datas
[00:20:09] only. So we can say that in the core of
[00:20:12] every system we have data and we are
[00:20:15] then finding ways to make it available
[00:20:18] to the users in the way they are
[00:20:20] expecting it. So in the center as we
[00:20:22] discussed we have data. Data can be of
[00:20:24] various form. It can be image, video,
[00:20:28] audio or text. Now if we think about
[00:20:31] data, it is not like we are seeing the
[00:20:32] data once only. we have to see that data
[00:20:36] and also while storing also we need to
[00:20:38] store the large amount of data. Now in
[00:20:40] order to store the data we do have
[00:20:42] databases. So databases are basically
[00:20:45] our first component of system design.
[00:20:48] What is the functionality of databases?
[00:20:50] Pretty simple. We need to store our data
[00:20:52] and whenever we want to retrieve some
[00:20:54] data we need to get the data from our
[00:20:56] databases only. They are represented by
[00:20:58] this cylindrical figure. Databases can
[00:21:01] be of multiple ways. It can be
[00:21:03] categorized into NoSQL or SQL. Now there
[00:21:06] are various kinds of databases in both
[00:21:09] of these categories. In SQL also we have
[00:21:11] various databases from which we can
[00:21:13] select which database we are going to
[00:21:15] use. And similarly in NoSQL also we have
[00:21:18] various kinds of database from which we
[00:21:20] can pick which database we need for our
[00:21:23] application right now. But the core
[00:21:25] remain seems that we are saving our data
[00:21:28] in some or the other database. We will
[00:21:30] discuss about SQL and NoSQL databases in
[00:21:33] the coming videos. That's why I'm not
[00:21:34] going too deep into this at this moment.
[00:21:36] Let's think about the scenario where you
[00:21:39] and every user on the planet knows the
[00:21:41] queries of database knows how the tables
[00:21:44] are structured if we are talking about
[00:21:46] SQL or how the documents or nodes are
[00:21:49] connected if we are talking about NoSQL.
[00:21:52] If we talk about both of these
[00:21:53] scenarios, if user the end user already
[00:21:56] know the database query languages and
[00:21:59] know how to deal with different kind of
[00:22:01] data in that case we might not need any
[00:22:04] application. If you think about it we
[00:22:05] will simply go to our database or the
[00:22:08] database will be accessible throughout
[00:22:10] every application. Suppose we are seeing
[00:22:12] the LinkedIn but on LinkedIn we will see
[00:22:14] an interface on which we will write our
[00:22:16] query and the data will be fetched to
[00:22:19] us. That will be an hectic task but if
[00:22:22] users know about that and if users start
[00:22:25] exploring that that will be easier right
[00:22:27] in that case we don't need any
[00:22:29] application layer in between us and in
[00:22:31] that case we don't need any client side
[00:22:33] application also between us we simply
[00:22:35] will see a database query it and get the
[00:22:38] results right in that case what will
[00:22:40] happen each query have to be managed
[00:22:43] through the users only and these queries
[00:22:45] when I talk about large systems let's
[00:22:47] say we are talking about link In there
[00:22:50] can be multiple tables through which our
[00:22:52] data is curating and coming to us. Every
[00:22:55] user can't do it right. That's why we
[00:22:57] have different layer in front of our
[00:22:59] database which is our application code.
[00:23:01] So in application code what we do is we
[00:23:04] hide the complexity of dealing with
[00:23:06] databases, different tables, different
[00:23:08] documents and we give the endpoints to
[00:23:12] our application or to the world so that
[00:23:14] they can access the kind of information
[00:23:16] they are looking for. For that we create
[00:23:19] APIs or we can say we create endpoints.
[00:23:23] There can be multiple endpoints based on
[00:23:25] different features based on different
[00:23:28] operations. So through endpoints we
[00:23:30] communicate to our application which
[00:23:32] will again communicate to our databases
[00:23:35] to get the data we are trying to get.
[00:23:37] There can be various operations like we
[00:23:39] can insert some data, we can update some
[00:23:42] data, we can retrieve some data, we can
[00:23:44] delete some data based on our request.
[00:23:47] So the thing becomes little easier to
[00:23:49] us. Now we don't have to deal with all
[00:23:52] the database tables. But now we have
[00:23:54] assigned endpoints through which we can
[00:23:57] do the work which we want to do. And
[00:23:58] endpoints are pretty simple. So in order
[00:24:01] to get some data we have a get endpoint.
[00:24:04] Let's say https and here comes our
[00:24:08] telescu. So this URL or this endpoint
[00:24:11] can be used to fetch all the students
[00:24:14] which are there in our telescope
[00:24:15] environment. But then what we are doing
[00:24:18] by introducing application code we are
[00:24:20] moving our logic and data separately.
[00:24:24] That means we need some kind of
[00:24:25] connections between these two in which
[00:24:28] we can connect through IP addresses. We
[00:24:31] can connect through some HTTP protocols
[00:24:33] or we can connect through some TCP
[00:24:35] protocol. There are many ways of
[00:24:36] connecting the database from the
[00:24:38] application code and getting the data
[00:24:40] which we want. So in order to show the
[00:24:42] APIs or in order to interact with the
[00:24:44] APIs, we have to know what is JSON and
[00:24:47] how we are going to send the data to our
[00:24:50] APIs and how we are going to fetch the
[00:24:52] datas from our API. In this level also
[00:24:55] if we know how to handle JSON, if we
[00:24:58] know how to handle various operations
[00:25:00] through which endpoint, it will make our
[00:25:02] life little easier than accessing the
[00:25:04] databases, right? So in that case we
[00:25:07] don't need a front end if we know how to
[00:25:10] hit the endpoints through which we will
[00:25:12] get the data. But for our normal users
[00:25:14] for the users of any applications this
[00:25:17] is also a tedious task. So in order to
[00:25:20] make this easier we have a different
[00:25:23] layer between our system that is our
[00:25:25] client application. Client applications
[00:25:27] are nothing but the applications through
[00:25:29] which we are interacting to the database
[00:25:31] through which we are getting those
[00:25:33] databases. So our client applications be
[00:25:36] it a mobile application be it any web
[00:25:39] application be it any ATM machine for
[00:25:41] that matter they are connected with the
[00:25:44] application code and further the data is
[00:25:47] being consumed by us. So again in order
[00:25:49] to connect the application layer and the
[00:25:51] client code we again need some kind of
[00:25:54] communication between them. We either
[00:25:56] can go to the same HTTP or TCP or maybe
[00:26:00] IP. Now we have our application ready in
[00:26:02] our hand and we can use it. So if I draw
[00:26:05] it like we used to draw it. This is
[00:26:08] represented by our client either a
[00:26:10] desktop or a mobile device. Now they are
[00:26:14] sending queries to our application code
[00:26:16] and our application code is further
[00:26:19] getting the data from database. Now for
[00:26:22] our client to communicate with our
[00:26:24] application code, we need to put our
[00:26:26] application code on any server. And now
[00:26:29] if we think about it, our application
[00:26:31] code is already exposing the APIs to our
[00:26:35] client. That means it can also expose
[00:26:38] the APIs or any other application can
[00:26:41] also use our application codes through
[00:26:44] our APIs and do the work which is
[00:26:46] needed. So it can be connected to any
[00:26:49] other server also which will contain
[00:26:51] their application code and this will
[00:26:54] communicate with our data through our
[00:26:56] application code. For every query which
[00:26:58] we are making, we are going to our
[00:27:00] database and from that we are getting
[00:27:02] the data which we are trying to get. So
[00:27:04] if we think about it most of the
[00:27:06] communications will start from the
[00:27:08] client side and they will come to our
[00:27:10] application code through which we will
[00:27:12] get the data from the database. This is
[00:27:14] pretty much the easy application or the
[00:27:17] applications which we create on our
[00:27:18] college projects look like either a
[00:27:20] to-do application or a simple chatting
[00:27:23] application will look like this. Now in
[00:27:25] the current scenario what we are doing
[00:27:27] with this kind of architecture is every
[00:27:28] client is going to ask application code
[00:27:32] for some or the other information and to
[00:27:34] fetch the data our application code
[00:27:36] needs to get the data from the database
[00:27:38] only. We don't have any other option in
[00:27:41] order to make the files accessible to
[00:27:43] our server faster because the databases
[00:27:46] calls are heavy which will take a lot of
[00:27:49] time. Let's say if a database query is
[00:27:52] finding the columns from 12 tables it is
[00:27:54] going to take time right now in order to
[00:27:57] make the frequently used data accessible
[00:28:00] faster we have a different layer which
[00:28:03] is called cachet. when we are going to
[00:28:05] put any data into our cache and when we
[00:28:09] are supposed to remove that data. There
[00:28:11] are different strategies. We are going
[00:28:12] to cover that also in the upcoming
[00:28:14] videos. But for now, let's see. This is
[00:28:17] our cach A and all the frequently used
[00:28:19] data will be stored here. So that we
[00:28:22] don't have to call to our database and
[00:28:24] they can be easily accessible through
[00:28:26] our cache only which will make our
[00:28:28] process slightly faster. So this is our
[00:28:30] fourth component of our system which is
[00:28:33] cach. Now let's move forward. Let's say
[00:28:35] our application is big is having
[00:28:37] multiple servers. In that case we may
[00:28:40] have some client or this client either
[00:28:43] the mobile application or the web view
[00:28:45] and we are getting the data from
[00:28:47] multiple servers. Let's say this is
[00:28:49] server one or this is server two. Now
[00:28:52] when we have two servers or multiple
[00:28:54] servers our client have to decide where
[00:28:56] to go from where do we fetch the
[00:28:59] information. Now in order to take this
[00:29:01] control we have a load balancer in the
[00:29:03] middle which will take care of each and
[00:29:05] every request and which will take care
[00:29:07] of each and every connections of the
[00:29:09] server. So our load balancers are
[00:29:11] responsible for handling two tasks.
[00:29:14] First they will check whether the server
[00:29:16] is healthy or not and second one they
[00:29:19] will divide the request for each servers
[00:29:21] equally. This is what our fifth
[00:29:23] component looks like. Now let's come to
[00:29:25] our next component which is messaging Q.
[00:29:28] So in order to understand message Q
[00:29:30] let's first understand that in order to
[00:29:32] process one operation there can be
[00:29:35] multiple task into that operation right
[00:29:37] let's say we are ordering something so
[00:29:40] when we are ordering we are going to do
[00:29:42] multiple tasks right we are first
[00:29:44] creating an inventory update next is we
[00:29:47] are going to process the order also we
[00:29:49] are going to talk to the vendor who is
[00:29:51] going to take the delivery so we are
[00:29:52] going to handle delivery and then we are
[00:29:55] also trying to send you the information
[00:29:57] the notifications conditions that your
[00:29:58] order is placed successfully. Don't
[00:30:00] worry about it. So that means we are
[00:30:02] going to handle the mail service or the
[00:30:04] SMS service also. Now in order to handle
[00:30:07] multiple services like this, we can't
[00:30:10] wait for every application to respond
[00:30:12] back. There are two kind of applications
[00:30:14] basically. First is let's say this is an
[00:30:16] application and this is another
[00:30:17] application. Let's say this is SMS
[00:30:19] application and this is our order
[00:30:22] application or micros service for that
[00:30:24] matter. Now whenever an order is placed
[00:30:27] it is going to speak to the SMS service
[00:30:29] or SMS application to send the message
[00:30:31] to the user that your order is placed
[00:30:33] successfully. Now there can be two ways
[00:30:36] of handling this. First way is whenever
[00:30:38] the SMS is sent they will notify the
[00:30:41] order service or the order application
[00:30:43] back that we have sent your message done
[00:30:46] or there can be different way of
[00:30:47] handling it that from our order service
[00:30:50] we simply say that okay this is our
[00:30:52] order information please send the
[00:30:54] message to this number and we are done.
[00:30:57] We will not wait for the response we
[00:30:59] will move forward with our application
[00:31:01] and with different orders. So the kind
[00:31:03] of requests in which we are waiting for
[00:31:06] any confirmation or any feedback from
[00:31:08] the other service are called synchronous
[00:31:10] calls and the kind of service in which
[00:31:12] we will simply put down the service and
[00:31:14] we are not waiting for any confirmation.
[00:31:16] We will move forward to do a task. Those
[00:31:18] are called asynchronous services. Don't
[00:31:20] worry about this if you don't understand
[00:31:22] it now. We are going to dissect each and
[00:31:24] every component in details in the
[00:31:26] further coming videos. So for
[00:31:28] asynchronous kind of services what we
[00:31:30] can do we can simply push a notification
[00:31:32] or push our request to another service
[00:31:34] and move forward. So in those kinds of
[00:31:37] services we have a message Q or message
[00:31:40] broker in middle. What it will do? We
[00:31:43] are having our order service here. It
[00:31:45] will put multiple request or can put a
[00:31:48] request time to time into this message Q
[00:31:52] and then all the request which our order
[00:31:54] is processing through message Q they
[00:31:56] will not take care of it anymore. Our
[00:31:59] message cues will take care of it. They
[00:32:01] will connect with our SMS service or SMS
[00:32:05] applications and send the request one by
[00:32:07] one and they will take care of these all
[00:32:09] operations. So our message Q is like a
[00:32:12] broker who will take the request from
[00:32:14] one application store inside it. They
[00:32:17] will take care of these applications.
[00:32:19] They will take care of the retries or if
[00:32:21] any request is failing they will take
[00:32:23] care of it. Maybe they will communicate
[00:32:26] to our order application in the end or
[00:32:28] in the end of each day we will send some
[00:32:31] notifications some batch processes to
[00:32:34] our order application in order to show
[00:32:37] that which requests are fulfilled and
[00:32:39] which are not fulfilled. So in short our
[00:32:42] messages cues are doing two work here.
[00:32:45] They are storing each and every request
[00:32:47] which are coming from various other
[00:32:49] services or various other applications
[00:32:51] for that matter. They are storing it and
[00:32:53] they are taking care of those request.
[00:32:56] They are sending those request finally
[00:32:58] to SMS application or service and they
[00:33:00] are taking charge that okay my first
[00:33:03] service or my first request is being
[00:33:05] processed. Nice. Now I will send the
[00:33:08] next request. Now I will send the next
[00:33:09] request and further on if it is failed.
[00:33:12] There are various mechanisms how
[00:33:13] messages cues work and how they bisect
[00:33:16] and dissect each and every request and
[00:33:19] make sure that they will provide the
[00:33:21] latest status of each request. And in
[00:33:23] those kinds of environment where we have
[00:33:25] multiple microservices in those cases
[00:33:27] message cues plays a vital role in
[00:33:30] between them. And with that let's move
[00:33:32] to our final component which is
[00:33:34] monitoring and logs. In monitoring and
[00:33:36] logs what do we do? As we know now we
[00:33:39] have different components in our
[00:33:40] architecture. We have a client system
[00:33:43] here. We may have a mobile application
[00:33:46] again which is connecting through an API
[00:33:48] to our load balancer which is again
[00:33:51] further connected to either server one
[00:33:53] or server two. Our servers are the area
[00:33:58] in which we have our application code
[00:34:00] and then they may be connected to single
[00:34:02] database or multiple databases and those
[00:34:05] databases can also communicate with each
[00:34:08] other in order to maintain the data and
[00:34:10] also let's say our application is also
[00:34:12] using some third party application for
[00:34:14] which we are using message cues. Our
[00:34:17] message cues are denoted by this. Now
[00:34:19] this is our architecture. We have so
[00:34:21] many components. So it is very important
[00:34:24] for us to monitor those components to
[00:34:26] monitor whether our load balancer is
[00:34:29] working finely or not to manage whether
[00:34:32] our application code does have any error
[00:34:34] or not and if there is an error we need
[00:34:37] to know how to solve it. We need to know
[00:34:39] the complete st trace of that particular
[00:34:42] error. We need to know how to reproduce
[00:34:44] those errors on our local system in
[00:34:46] order to fix them. and also while
[00:34:48] working with the applications we know
[00:34:50] that for every each and now we have
[00:34:52] multiple features which are being
[00:34:54] attached to our applications. So we also
[00:34:56] need to monitor while adding one more
[00:34:58] feature to our application whether any
[00:35:01] other feature is impacted or not or it
[00:35:04] is failing or not. So in order to do
[00:35:06] that we have a lot of monitoring tools
[00:35:08] and also logs to check our system. There
[00:35:11] is a complete testing department in our
[00:35:13] team also who takes care of these
[00:35:15] things. This is one of the vital role in
[00:35:18] our application. So these are most of
[00:35:20] the common components which are used in
[00:35:22] system design. Whenever we think about
[00:35:24] any application or designing any
[00:35:25] application, we suddenly jump to the
[00:35:28] tools which are used in that
[00:35:29] application. We start creating diagrams
[00:35:31] that this is our client, this is our
[00:35:33] database, this is how our data is going
[00:35:35] to flow, this is how we add cache maybe.
[00:35:38] So these all things we start doing
[00:35:40] without noticing a single thing that is
[00:35:43] how is our application going to work.
[00:35:46] What is this application? What are the
[00:35:48] limitations of this application? In
[00:35:50] system design there is a smart way of
[00:35:52] doing that. First question you need to
[00:35:54] ask yourself before diving into the
[00:35:57] solutions is what is this application?
[00:36:00] What is the type of this application? Is
[00:36:03] it a data inensive application or a
[00:36:05] compute inensive application? With this
[00:36:08] common differentiation, you will be able
[00:36:10] to save a lot of cost to your system
[00:36:12] design as well as you will be able to
[00:36:15] handle the task properly into your
[00:36:18] system. Let's say we have two
[00:36:20] applications. In both of these
[00:36:22] application there are the same number of
[00:36:25] users with that the network on which
[00:36:28] both of the applications are working are
[00:36:30] also pretty much same. Now let's put a
[00:36:32] scenario that our system or the
[00:36:34] application which we are working on is
[00:36:37] facing latency. Now what is latency?
[00:36:40] Latency means our system is taking time
[00:36:42] to respond. There are various ways of
[00:36:44] handling this issue of fixing the
[00:36:47] latency issue. We can add multiple
[00:36:49] databases. We can add different caching
[00:36:51] layers. We can update the caching
[00:36:52] mechanism or we can update the GPU or
[00:36:55] the CPU powers. Now on which vector we
[00:36:58] are going to do these changes defines
[00:37:00] how well we are going to solve this
[00:37:02] issue. So now there are two type of
[00:37:04] applications as I discussed. One is data
[00:37:07] inensive application and one is compute
[00:37:09] inensive application. Let's understand
[00:37:11] them one by one. The basic difference on
[00:37:14] which data inensive application is
[00:37:16] different from a comput inensive
[00:37:17] application is that in data inensive
[00:37:20] application our core focus is on data.
[00:37:23] Now for this data we need to have
[00:37:24] multiple operations right? We need to
[00:37:27] store the data plus we need to gather
[00:37:29] the data. We need to move the data time
[00:37:32] to time. That means we need to keep
[00:37:34] updating the data because new data is
[00:37:36] entering and also while new data is
[00:37:38] entering we can also write we need to
[00:37:39] add a lot of data. We can take example
[00:37:42] of any application which can be
[00:37:44] Instagram because on Instagram we see a
[00:37:47] lot of content and we post a lot of
[00:37:49] content. So that is a data inensive
[00:37:51] application where the primary focus is
[00:37:53] on gathering the data is on showing the
[00:37:56] data is on the data you are posting but
[00:37:58] the focus is not on how the data will be
[00:38:00] calculated. The calculation part is
[00:38:02] pretty solid. We just need to move the
[00:38:04] data from our databases to the client
[00:38:06] applications and we are sorted. So in
[00:38:09] these kind of systems the data mainly
[00:38:12] resides in the database. So first issue
[00:38:15] can be the database response is low.
[00:38:17] Another is since we are using network
[00:38:20] calls here and there that means our
[00:38:22] network calls are also bulky or we need
[00:38:24] to optimize them. The third can be our
[00:38:26] server itself that our server
[00:38:28] configuration is pretty low that's why
[00:38:30] we are not able to get the data faster.
[00:38:32] So all in all in data inensive
[00:38:34] applications we are not blaming the
[00:38:36] client to upgrade their CPU. We are
[00:38:39] blaming our circle our database calls
[00:38:42] our network calls our server
[00:38:44] configuration in order to gather the
[00:38:45] data fast. Most of the applications in
[00:38:48] which you work on are data intensive
[00:38:50] application. That's why we use terms
[00:38:52] like cache enhancement, shredding and
[00:38:55] through all of those things we will be
[00:38:56] able to solve this issue. Now let me
[00:38:58] also write some common examples of this.
[00:39:00] So the common examples here are
[00:39:02] Instagram feed where we see a lot of
[00:39:04] data as we discussed earlier in WhatsApp
[00:39:06] messages also there is a high amount of
[00:39:08] data because we are not only taking care
[00:39:11] of one chat we are taking care of entire
[00:39:14] chat. The count of chats or the count of
[00:39:16] messages WhatsApp deal with is around 2
[00:39:19] to 10 million messages per day. So this
[00:39:22] is also a heavy data inensive
[00:39:24] application. Now there are bank
[00:39:26] transactions, analytic dashboard and log
[00:39:29] processing system as well. In all these
[00:39:31] application, the primary goal is to
[00:39:34] serve the data from database to our
[00:39:36] client system faster. There is not much
[00:39:38] calculation required for them to show on
[00:39:41] the client machine. Now based on the
[00:39:43] data inensive application what are the
[00:39:45] worries of a data inensive application.
[00:39:48] The first worry is how fast can we read
[00:39:50] the data. The second point is how safely
[00:39:54] are we going to store the data. The
[00:39:56] third point as we all know lot of users
[00:39:58] are using our application. So how many
[00:40:01] users can use the same data
[00:40:02] simultaneously. The next and one of the
[00:40:05] most important worry of these kind of
[00:40:07] application is what if any server dies?
[00:40:10] What if any server breaks? What if any
[00:40:13] network call breaks? What if any
[00:40:15] database machine breaks down? So in
[00:40:18] those cases, how we are going to handle
[00:40:20] the data? So these are the most common
[00:40:22] worries of the data inensive
[00:40:24] applications. And now in order to solve
[00:40:26] them, we don't go to our client system.
[00:40:29] We talk about the components on which
[00:40:32] these processes lies. And those are our
[00:40:35] databases, caching, replication, maybe
[00:40:38] data sharding or it can be solved
[00:40:41] through data consistency. So these are
[00:40:43] all the components or the terms we use
[00:40:46] in order to improve a data inensive
[00:40:48] application. Don't worry about these
[00:40:50] terms if you don't know them yet. We are
[00:40:52] going to cover each and every component
[00:40:54] in details in the coming videos. So I
[00:40:56] hope data inensive applications are
[00:40:58] pretty clear up to now. But for the sake
[00:41:00] of example, we are also going to take
[00:41:02] one more example. Now think about
[00:41:04] Instagram feed. We are not solving
[00:41:06] Instagram feed issue through any
[00:41:09] mathematical equations. We just have to
[00:41:11] gather a lot of data and show you that
[00:41:14] data. So what we don't do here? We don't
[00:41:16] do any complex maths. What we do then we
[00:41:19] normally fetch the post. After fetching
[00:41:22] the post we sort them through time or
[00:41:24] relevance. we show a lot of images or
[00:41:27] videos and according to those content we
[00:41:31] normally do some operations maybe like
[00:41:34] or commenting or sharing. So I'm writing
[00:41:37] that. So this is all the operations
[00:41:39] loosely we have on the Instagram feed.
[00:41:43] Now what is the common challenge which
[00:41:44] Instagram is facing daily that is we we
[00:41:48] have a lot of content we have millions
[00:41:50] of users and million of content which we
[00:41:53] have to handle. So let me write that
[00:41:54] down. In other words, we can also say
[00:41:57] that million of users are reading and
[00:41:59] writing at the same time. So with this
[00:42:01] challenge, Instagram still needs to
[00:42:03] scale, right? How does Instagram scale?
[00:42:06] If we think about this, Instagram adds
[00:42:09] multiple databases in order to store the
[00:42:11] data. And also Instagram uses aggressive
[00:42:14] caching in order to store or get the
[00:42:16] data fast. Now we also know that
[00:42:18] Instagram heavily depends on the images
[00:42:21] and the video content form. So in order
[00:42:24] to handle them we can't simply store
[00:42:26] those kind of data into our databases
[00:42:28] directly for that in order to fetch them
[00:42:30] faster. We need to have certain CDN in
[00:42:33] place and in databases we will only
[00:42:35] store the location of the particular
[00:42:37] file which we are going to fetch through
[00:42:39] the CDN. Now think about this in order
[00:42:41] to fix the latency issue on Instagram or
[00:42:44] in order to help Instagram scale we
[00:42:47] hardly touch the CPU or we hardly
[00:42:49] touched any GPU. we only touch the data
[00:42:52] or the components which are associated
[00:42:54] with them because the issue here is not
[00:42:57] the CPU but the data movements between
[00:43:00] the components. Now this is all about
[00:43:02] data inensive applications. Let's now
[00:43:04] focus on the compute intensive
[00:43:06] applications. Now the compute inensive
[00:43:08] application is exactly opposite of a
[00:43:11] data inensive application. Here the
[00:43:13] amount of data which we are retrieving
[00:43:15] from databases are pretty much low but
[00:43:18] the calculations we need to perform are
[00:43:20] really heavy. So instead of putting our
[00:43:22] focus on database caching replication uh
[00:43:26] sharding maybe we move our focus from
[00:43:28] there to CPU and GPUs. So let me write
[00:43:32] down the challenge now. So we can safely
[00:43:34] say that here our systems are compute
[00:43:37] bounded or we can say CPU or GPU bound.
[00:43:40] Let me take some examples of this. The
[00:43:42] most common example can be image
[00:43:44] processing, video rendering. The machine
[00:43:47] learning model training can also be a
[00:43:49] good example of this. Also, we can talk
[00:43:51] about simulation and cryptography. Now,
[00:43:54] in all these examples, the data which we
[00:43:57] are getting from the database are in a
[00:43:59] smaller level only. But the kind of
[00:44:01] processing we need to do in order to
[00:44:03] show these data to user is heavy. That's
[00:44:06] why they come under the category of
[00:44:08] compute inensive applications. Now let's
[00:44:10] discuss about the worries of a computer
[00:44:12] inensive application. The first worry is
[00:44:15] pretty simple that is how fast can we do
[00:44:18] the calculation or how fast can we
[00:44:20] compute. The second worry can be can we
[00:44:22] do something some processes in parallel
[00:44:25] in order to show the data faster to the
[00:44:27] user. You may have seen a lot of systems
[00:44:29] in which in parallel the image is being
[00:44:32] processed and you are able to move
[00:44:34] further with the application. let the
[00:44:36] image process and the meanwhile you are
[00:44:38] moving to the other features of the
[00:44:40] application. The next issue can be how
[00:44:43] can we reduce the computational cost and
[00:44:47] also as a system designer we can also
[00:44:49] think about can we use GPU instead of
[00:44:52] CPU. So these are the common worries of
[00:44:54] a computer inensive application where
[00:44:57] the data is not much but the processing
[00:45:00] is the king. Let me also take a good
[00:45:02] example of a compute intensive
[00:45:04] applications. So in order to create a
[00:45:07] simulator machine, it is very important
[00:45:09] for the simulator to work exactly how
[00:45:12] the actual machine works. So think about
[00:45:15] a scenario that our country is hiring a
[00:45:18] lot of pilots every year and we can't
[00:45:21] spend too much on the actual aircrafts
[00:45:24] when the pilot doesn't know how to ride
[00:45:26] it or how to fly it. In order to train
[00:45:30] them we need to give them simulators
[00:45:32] machines and on which they train themsel
[00:45:35] first and then sit on the actual plane.
[00:45:38] So now in simulation machine our common
[00:45:40] worries or the task which we are going
[00:45:42] to have is can we do anything in
[00:45:45] parallel again can we use GPU instead of
[00:45:48] CPU again how can we reduce the cost of
[00:45:50] our simulator also we need to find a way
[00:45:53] to gather a lot of good algorithms in
[00:45:56] order to do the task frequently. Now at
[00:45:59] this point I think we are very clear on
[00:46:01] how our data inensive applications are
[00:46:03] different from compute intensive
[00:46:05] applications and why we need to put our
[00:46:08] focus on computation on different
[00:46:10] algorithms on GPU or CPU in order to
[00:46:13] make a compute inensive application
[00:46:15] works because the data is very low and
[00:46:17] in data inensive application if we start
[00:46:19] focusing on GPU and CPU there will not
[00:46:22] be any big changes because the issue
[00:46:25] lies in the database network calls
[00:46:27] caching algorith algorithms or maybe
[00:46:30] server. So in order to fix them, we need
[00:46:32] to put our effort into the right
[00:46:34] category into the right components so
[00:46:36] that our application works seamlessly.
[00:46:39] And why this is important? Because if we
[00:46:42] put our efforts into the wrong
[00:46:44] components, our components are not free.
[00:46:46] They are going to cost us money. And if
[00:46:49] we put the money in the wrong place and
[00:46:51] not getting any help in order to solve
[00:46:53] our issue, it is going to be a bad
[00:46:55] system design for the entire game. Now
[00:46:58] when we talk about data inensive or
[00:47:00] compute intensive applications, we often
[00:47:02] think that these two are very separate
[00:47:04] applications. But in today's time, we
[00:47:07] live in the environment of multiple
[00:47:09] applications and each application
[00:47:11] performs multiple tasks. So that means a
[00:47:14] data inensiveness or the compute
[00:47:16] intensiveness of the application can
[00:47:18] also depend on the feature we are
[00:47:20] working in. For example, we have
[00:47:22] YouTube, right? YouTube is data inensive
[00:47:25] for serving the videos. There are lot of
[00:47:28] videos in YouTube environment and you
[00:47:30] get the videos and we can say that it is
[00:47:33] compute inensive when it comes to the
[00:47:36] recommendation because in order to get
[00:47:38] the recommendations we have to get what
[00:47:40] you are watching right now. So I think
[00:47:42] it is pretty sorted now that in order to
[00:47:44] fix a particular issue you need to first
[00:47:47] think whether the issue which we are
[00:47:49] facing is compute intensive or data
[00:47:52] inensive and then you get into the
[00:47:54] components and fix that. There is a
[00:47:56] trick to understand whether the feature
[00:47:58] is data inensive or compute intensive.
[00:48:00] That is if the time is lost in data
[00:48:03] movement probably it is data inensive
[00:48:05] application or if the time is lost in
[00:48:08] the computation it is probably a compute
[00:48:11] inensive feature or the task. This one
[00:48:13] distinctions save you a lot of money
[00:48:16] time and complexity. In order to discuss
[00:48:19] our requirements we divide the
[00:48:21] requirements into two categories. one is
[00:48:23] functional requirement and the another
[00:48:25] one is non-functional requirement. So
[00:48:27] let's go to our screen and let's discuss
[00:48:29] this. Functional requirement says please
[00:48:32] define all the points which you are
[00:48:33] building, all the features which you are
[00:48:36] building, all the working which you are
[00:48:38] building. That means if we define every
[00:48:40] feature that comes under the functional
[00:48:43] requirement. So let's understand
[00:48:44] functional requirement by taking an
[00:48:46] example of any e-commerce application.
[00:48:49] Let's say Amazon. So what can be the
[00:48:52] functional requirements of Amazon
[00:48:53] application that means we are defining
[00:48:56] each and every feature which we see on
[00:48:58] Amazon. So let's say on Amazon
[00:49:00] application a user can register themsel
[00:49:03] user should also be able to log in. So
[00:49:05] let's write that. After login user
[00:49:08] should be able to see the products also.
[00:49:10] User can search the products or filter
[00:49:12] them. Let's write the searching and
[00:49:14] filtering into two parts. So search the
[00:49:16] products and user can also filter the
[00:49:19] products. After filtering searching,
[00:49:22] user should be able to add any product
[00:49:24] to the cart. So after adding any product
[00:49:26] to the cart, user should be able to get
[00:49:28] some promotions or get some discounts,
[00:49:30] right? So they should be able to apply
[00:49:32] the coupon codes to get the discount.
[00:49:34] And once all this done, you just should
[00:49:36] be able to place the order. After
[00:49:38] placing the order, you should be able to
[00:49:40] do the payments maybe. And once the item
[00:49:43] is placed, once the order is placed,
[00:49:45] user should be able to track that order.
[00:49:47] So all of these points are the
[00:49:49] functional requirements of Amazon or any
[00:49:51] e-commerce application for that matter
[00:49:54] in which we define all the
[00:49:56] functionalities, all the actions which
[00:49:58] user can take. All the working of the
[00:50:00] application is defined under functional
[00:50:03] requirement. So if we have to write
[00:50:04] this, what is functional requirement?
[00:50:06] Again functional requirements means all
[00:50:09] the features which you are going to have
[00:50:10] in your application are the functional
[00:50:12] requirements. Now let's move forward to
[00:50:14] the non-functional requirements. For
[00:50:17] non-functional requirements also let's
[00:50:19] start with the example of Amazon only.
[00:50:21] Let's say the first nonfunctional
[00:50:23] requirement is that on our Amazon site
[00:50:26] we have approximately 1 million users.
[00:50:29] So that means our system should be able
[00:50:32] to handle 1 million daily active users.
[00:50:35] Now in order to give our users a good
[00:50:38] experience we can say that the response
[00:50:40] time should be less. But in
[00:50:42] non-functional requirements we have to
[00:50:44] define how less. So let's say for Amazon
[00:50:48] application the response time should be
[00:50:50] less than 200 milliseconds for each
[00:50:52] request. Now our application is built
[00:50:55] and is running that means our
[00:50:57] application can't handle failure but
[00:51:00] that is not possible right? So we should
[00:51:02] define up to how much is our
[00:51:04] availability of our system. That means
[00:51:06] for how much time our system will be
[00:51:09] available that are defined under SLAs
[00:51:12] and SLOs's. So we have to define them
[00:51:14] that for one year our system downtime
[00:51:17] should be this much amount only and for
[00:51:19] 99.9%
[00:51:21] time our system should be up. That is
[00:51:24] defined under availability. After
[00:51:26] availability we don't want our data to
[00:51:28] be flowing easily. So we want to encrypt
[00:51:30] our data and let's say on any sale day
[00:51:34] let's say black Friday sale or Diwali
[00:51:36] sale or holy sale in those times our
[00:51:39] normal users can go up to 10x. So our
[00:51:42] system should be able to handle that
[00:51:44] much traffic also. So let's write that
[00:51:46] down. With this our system should be
[00:51:48] also able to handle the faults because
[00:51:51] there are going to be faults in the
[00:51:53] system. No application is perfect so
[00:51:55] far. Every system have their own faults,
[00:51:58] have their own downtime. But we need to
[00:52:00] see how can we track them and how can we
[00:52:03] fix them as fast as possible. So that is
[00:52:06] we need to make our system fall
[00:52:08] tolerant. So with this example of Amazon
[00:52:11] we get to know that our functional
[00:52:13] requirement are the features of the
[00:52:15] system that we can say what our system
[00:52:19] is going to do and with non-functional
[00:52:21] requirements we define how our system is
[00:52:23] going to perform. So these are the
[00:52:26] specific non-functional requirements for
[00:52:28] Amazon. If we have to write it in a
[00:52:30] generic way, there are some generic
[00:52:32] terms which we can write. So we can talk
[00:52:35] about scalability. Let's say our current
[00:52:38] configuration of server is reaching to a
[00:52:40] point where it is not able to handle the
[00:52:42] kind of traffic it is getting. So now in
[00:52:45] order to scale will you scale it
[00:52:47] horizontally or vertically? That will be
[00:52:50] taken care under non-functional
[00:52:51] requirements. Apart from that as we have
[00:52:54] discussed availability of every system
[00:52:56] will be defined under non-functional as
[00:52:58] we have already discussed that means our
[00:53:00] system uptime will be calculated here
[00:53:04] which is defined under SLAs and SLOs's.
[00:53:08] So in these agreements it is already
[00:53:11] defined that let's say we are using
[00:53:12] Amazon server in order to deploy our
[00:53:14] application then Amazon will give us
[00:53:17] some contract that we will be down up to
[00:53:20] this time and apart from that you will
[00:53:22] not see any issues. Now in those cases
[00:53:24] if we see any issues let's say for a day
[00:53:28] Amazon says that we will be down maybe
[00:53:30] for 5 minutes maximum but then if Amazon
[00:53:33] fails to keep that promise or that
[00:53:35] agreement the companies which are using
[00:53:38] the Amazon service can sue them because
[00:53:40] the Amazon services have given us the
[00:53:43] SLAs in writing that the services will
[00:53:46] not be down after a certain point. So
[00:53:48] availability plays a huge concern there.
[00:53:51] Next we have reliability. In reliability
[00:53:53] we can say that our system should be
[00:53:55] reliable. That means there should be no
[00:53:58] data loss in our system. After
[00:54:00] reliability comes the performance. Under
[00:54:02] performance we are going to define how
[00:54:04] our system is going to work. How much
[00:54:06] latency can we feel in the system. What
[00:54:09] is our P95? What is our P90? What is our
[00:54:13] P99? These all things are defined under
[00:54:16] performance. So all the words which I
[00:54:18] have said in this particular video we
[00:54:20] are going to cover each and every topic
[00:54:22] in details in the coming videos. So
[00:54:24] don't worry about this if you don't get
[00:54:26] it now. After performance we can jump to
[00:54:28] security. In security we can have
[00:54:31] features like authentication,
[00:54:33] authorization and encryption. With
[00:54:36] security we are also dealing with a lot
[00:54:38] of code. That means we can say our code
[00:54:40] should be in perfect modules so that
[00:54:42] each code or each chunk of code can use
[00:54:45] different APIs or different modules in
[00:54:48] order to work in an efficient way. After
[00:54:50] this we have last but not the least
[00:54:52] requirement that is observability. Even
[00:54:55] if our code is pushed to production,
[00:54:57] there are lot of use cases which are
[00:54:59] handled after that because we don't know
[00:55:01] the exact behavior of users that how
[00:55:04] they are going to use it. So we need to
[00:55:06] keep track of all the monitoring tools,
[00:55:09] all the tools which are going to track
[00:55:10] the user behavior on our application so
[00:55:13] that we can improve our system and also
[00:55:15] we will be able to track if there are
[00:55:17] any bugs and solve them. So let me write
[00:55:20] monitoring and login. So this is all
[00:55:22] about functional and non-functional
[00:55:24] requirements. I hope you all get it. But
[00:55:27] in order to completely get it, we all go
[00:55:30] through a lot of applications on a
[00:55:31] day-to-day basis, right? Okay, maybe
[00:55:33] scrolling through Instagram, maybe
[00:55:34] watching YouTube, maybe watching Netflix
[00:55:36] or Amazon Prime or purchasing anything
[00:55:39] from Flipkart, Amazon or any other
[00:55:41] application, e-commerce platform or we
[00:55:43] may be scrolling through our WhatsApp
[00:55:45] messages. Now I want you while using
[00:55:47] your application just sit back for a few
[00:55:50] minutes and think about all the
[00:55:52] functional features which you are
[00:55:53] working or all the functional
[00:55:55] requirements which you are using and all
[00:55:58] the non-functional requirements which
[00:55:59] the app must have configured or thought
[00:56:02] of while grading that applications. Also
[00:56:05] comment down the application on which
[00:56:06] you worked on and write down three to
[00:56:09] four functional and non-functional
[00:56:10] requirements that will help you and me
[00:56:13] also in order to understand that we are
[00:56:15] learning on a similar pace. How does a
[00:56:18] browser know which web page to hit? Do
[00:56:21] they know by domain name or do they get
[00:56:23] these things through IP addresses? Let's
[00:56:26] find out. So whenever on our browser or
[00:56:29] on our machine whenever we write any
[00:56:32] address let's say telescoo.com it is
[00:56:35] going to redirect us to the telescope
[00:56:37] page which is our homepage maybe some
[00:56:40] banners here maybe some courses section
[00:56:43] here it is like this only now how do our
[00:56:47] browser figure out which page to show
[00:56:50] because as humans we communicate through
[00:56:53] names but systems don't communicate
[00:56:55] through names in order To establish the
[00:56:57] communication between one system to
[00:56:59] another system, we need IP addresses. So
[00:57:02] that means there should be some place in
[00:57:04] between or some system in between our
[00:57:07] browser or our OS through which we are
[00:57:10] going to get the correct IP addresses of
[00:57:13] each and every site. So we will send
[00:57:15] telescu.com and in return we will get
[00:57:18] some IP addresses. So this can be the IP
[00:57:21] address of telescu. I'm not exactly sure
[00:57:23] about the IP address but yeah like this
[00:57:25] our DNS works. So DNS basically stands
[00:57:29] for domain name system. Domain means any
[00:57:33] specific URL or any specific domain.
[00:57:36] Domain is this only telescope.com there
[00:57:38] can be multiple domains telescope.net
[00:57:41] google.com Facebook.com WhatsApp.com.web
[00:57:44] I think but yeah you get the point these
[00:57:47] all things are domain and what is
[00:57:49] subdomain? If I write any subdomain
[00:57:51] let's say docs.talescu.com
[00:57:55] or any other subdomain let's say course.
[00:57:58] So they both are subdomains of
[00:58:00] tlesco.com
[00:58:01] where telescope.com acts as an umbrella
[00:58:04] and under which we can create multiple
[00:58:06] subdomains if and when required. So
[00:58:09] these are the domain and subdomains. But
[00:58:11] mind it the machines the computers
[00:58:14] doesn't communicate with each other
[00:58:16] through these domain names. So they need
[00:58:18] IP addresses. Let's figure out ways on
[00:58:21] which our system can handle the IP
[00:58:22] addresses. Let's say we are building a
[00:58:25] browser. Why do we need DNS? Why do we
[00:58:28] need another system for maintaining the
[00:58:31] domains? We can basically install or
[00:58:34] store all the domain name list on our
[00:58:37] browser only. Now is this even possible?
[00:58:40] Let's say if we have only two or three
[00:58:42] websites, maybe 10 websites, we can
[00:58:44] store their names even 100 also. But the
[00:58:48] current number of domains which exist in
[00:58:50] our world is more than 350 million. And
[00:58:53] as a browser browser doesn't know which
[00:58:56] sites I'm going to use whether I'm going
[00:58:58] to use tag overflow one day and Gemini
[00:59:00] the other. So we can't store all the 350
[00:59:03] plus domains into our browser that will
[00:59:06] crash our system. So two reasons because
[00:59:08] of which we can't store the entire
[00:59:10] domain list on our browser are first
[00:59:13] thing is it will get heavier and to
[00:59:16] store such amount of information we need
[00:59:18] a high storage browser so that will also
[00:59:20] impact the performance of the system.
[00:59:22] Now the other point is what if the IP
[00:59:26] changes after some time. What if let's
[00:59:29] say I am running any site tles.com. I
[00:59:32] have purchased my domain from maybe
[00:59:34] GoDaddy and tomorrow I decide to
[00:59:36] discontinue my service from GoDaddy and
[00:59:38] I'll move to Google domains. So I'll
[00:59:41] purchase or renew the domain from there.
[00:59:44] In that case my IP can be changed and if
[00:59:48] it restores I need to reassure that in
[00:59:50] all the browsers where telescope.com is
[00:59:52] running I need to update them. I need to
[00:59:55] send them some update. So through this
[00:59:57] we can estimate that it can't be stored
[00:59:59] in one browser and also it can't be
[01:00:02] stored in a single server also because
[01:00:03] it will also get heavier. There are more
[01:00:06] than 350 million domains that means if
[01:00:08] we are going to store it in a tabular
[01:00:10] manner. So the here will be the domain
[01:00:12] name and the corresponding IP addresses
[01:00:15] accordingly. So here we will have any
[01:00:17] domain name such as google.com and here
[01:00:20] we will have the IP address 1.2.3.4
[01:00:23] for example. So by this we will create
[01:00:26] the entire list. This is not possible
[01:00:28] for a single machine to handle because
[01:00:30] if that machine breaks then the entire
[01:00:32] system the entire internet will break.
[01:00:35] anyone in the world will not be able to
[01:00:37] use any internet services or any web
[01:00:40] pages for that matter. No APIs will get
[01:00:42] because it all depends on the DNS. So
[01:00:45] one thing is sure we need a certain kind
[01:00:47] of system in order to fulfill this
[01:00:49] requirement. That's why we have one of
[01:00:51] the most beautifully designed system
[01:00:54] DNS. Let's start from the high level. So
[01:00:56] this is our machine which is going to
[01:00:59] use some internet service provider and
[01:01:01] under this service provider we have
[01:01:03] something called as DNS resolver. So
[01:01:06] this DNS resolver is responsible for us
[01:01:09] to getting the correct IP of any
[01:01:11] websites or any domain which we are
[01:01:13] trying to process. In order to
[01:01:15] understand this clearly let me take this
[01:01:17] and put it aside so that I can draw more
[01:01:20] things onto our screen. So the first
[01:01:23] call it is going to make is to our root
[01:01:27] server. Now there are 13 root servers in
[01:01:31] this entire world. That means there are
[01:01:33] 30 companies who own 13 web servers in
[01:01:37] this entire world. They are not
[01:01:39] physically 13 but they are categorized
[01:01:41] into 13. So that means out of these 13
[01:01:44] we are going to hit one of them and get
[01:01:46] the response. These root servers are
[01:01:48] typically named from A to M like this.
[01:01:51] Again from this A to M they are owned
[01:01:55] from various companies. So you can see
[01:01:57] the complete list of the root servers
[01:01:59] with the companies which own that root
[01:02:01] servers on the screen. You don't have to
[01:02:03] remember all of them. You just have to
[01:02:05] see and understand that these are the
[01:02:07] service providers or the root servers
[01:02:10] from which we are going to get some
[01:02:11] information in order to process our
[01:02:14] domain. Now let's come back to screen.
[01:02:16] As discussed we were searching for
[01:02:18] telescope.com. Also I can remove this.
[01:02:21] Now now when we are searching for
[01:02:23] telescope.com the root server doesn't
[01:02:26] know anything about telescope.com but it
[01:02:28] knows about the tldds which are tople
[01:02:32] domains. What is tople domain? If I talk
[01:02:35] about
[01:02:37] this is our tople
[01:02:38] domain.com.net.gov.in.uk.
[01:02:44] us.education
[01:02:46] maybe.edu we use them. These all domains
[01:02:49] are the tople domains of any website. So
[01:02:52] that means if we need to find out where
[01:02:54] telescope.com is, we first need to know
[01:02:57] which server is handling all the coms.
[01:03:00] So in order to do that, a root server
[01:03:02] will give the response that okay, you
[01:03:05] can go to one of the tldds which is
[01:03:08] handling the top level domain for the
[01:03:11] root server will return the IP address
[01:03:13] of that. Maybe this is the IP address
[01:03:15] and from now we know that we are going
[01:03:18] to hit any TLD tople domain for our.com.
[01:03:23] Now from this TLD we are again not going
[01:03:26] to get the complete IP address of the
[01:03:28] site. We are going to get the proper
[01:03:31] server or the name server or the
[01:03:33] authoritative servers which are managing
[01:03:36] the all the IP addresses for our
[01:03:38] domains. Let's say this is the IP
[01:03:40] address of our authoritative name server
[01:03:42] and from this we are going to make
[01:03:44] another call which are our authoritative
[01:03:47] name servers and from here we are going
[01:03:50] to actually get where our telescope.com
[01:03:53] resides the IP address which was
[01:03:55] 19283841
[01:03:57] and once this is captured through our
[01:04:00] browser the IP then it is going to make
[01:04:03] the call to tles.com server and it is
[01:04:06] going to get the web page which is
[01:04:08] desired. for I get it this can be little
[01:04:10] confusing at start. So let me reiterate
[01:04:12] it for once. So whenever we click on any
[01:04:15] site whenever we want to find any site
[01:04:18] let it be telescope.com it is first
[01:04:21] going to our service provider internet
[01:04:24] service provider also you can see um it
[01:04:27] can go through router and router can
[01:04:29] also have DNS resolver. So from internet
[01:04:32] service provider which have DNS resolver
[01:04:35] this component is going to resolve all
[01:04:38] our queries for us and ultimately will
[01:04:40] give us a perfectly fine working IP
[01:04:43] address for plesco.com or any other site
[01:04:46] for that matter. So the first step is it
[01:04:49] will go to the root servers. What is
[01:04:52] root servers? There are 13 companies who
[01:04:55] own these root servers. Who doesn't know
[01:04:58] the IP address of your site directly but
[01:05:00] knows with TLD to follow. So from root
[01:05:04] server it is going to check what is your
[01:05:08] TLD tople domain and in this case it
[01:05:11] is.com. Now as it is com it is going to
[01:05:14] get the IP address of the TLD which is
[01:05:17] handling the com domain. So after this
[01:05:20] first call now we are going to call the
[01:05:23] TLD which we get from the root server
[01:05:26] and from this also we are not going to
[01:05:28] get the complete IP address of telescope
[01:05:30] we are going to get on which name server
[01:05:33] we are going to hit to get the complete
[01:05:35] IP address of tellesco.com. So from here
[01:05:38] we are going to get the authoritative
[01:05:40] name servers IP and accordingly we are
[01:05:43] going to hit our third and final call to
[01:05:46] our authoritative name servers. Our
[01:05:48] authoritative name servers are mostly
[01:05:51] can be configured in GoDaddy or
[01:05:53] Hostinger or any other service providers
[01:05:56] in your current application and from
[01:05:58] these authoritative name servers we are
[01:06:01] going to get the IP address of
[01:06:03] tlesco.com. Now in order to click one
[01:06:06] site we have to do these three
[01:06:08] operations. This can be heavy right? So
[01:06:11] this is only done first time and the
[01:06:13] next time when you click on anything it
[01:06:16] basically takes the value from cache.
[01:06:18] Now cach can be stored in three
[01:06:21] locations here or more than three if you
[01:06:23] think about it but three are definite
[01:06:25] locations. The first is the DNS resolver
[01:06:28] can have the cache to have all the
[01:06:31] common IP addresses which we are going
[01:06:33] to take or the all the common domains
[01:06:35] which we are trying to hit. it can store
[01:06:38] it here. Also on our system we have two
[01:06:41] things. One is OS and one is browser. In
[01:06:44] both of these areas we can basically add
[01:06:46] that domain and the IP address in order
[01:06:49] to get the details fast. So browser also
[01:06:52] maintain that cache OS level also we can
[01:06:55] basically maintain the cache and on a
[01:06:58] DNS resolver side also a cache is
[01:07:01] maintained in order to get the details
[01:07:03] fast. Now when we are at this topic let
[01:07:05] me tell you about one more thing that
[01:07:07] whenever we create domain name systems
[01:07:09] like this docs or subdomains these all
[01:07:13] entirely creates a zone in the
[01:07:16] authoritative name server that means
[01:07:18] telescope.com including all the
[01:07:21] subdomains. So one zone can contain
[01:07:24] multiple domain list which will include
[01:07:27] only the domains specifically to that
[01:07:29] particular main domain. Okay. And
[01:07:32] through this it is easier to get to the
[01:07:34] main domain. So in this case whenever we
[01:07:37] are hitting the root server we are
[01:07:39] getting the IP of TLD again hitting the
[01:07:42] TLD getting the IP of authoritative name
[01:07:44] server and in authoritative name servers
[01:07:47] we can have different zones attached to
[01:07:50] different domains and in this zone if it
[01:07:53] is Tellesco zone in that case all the
[01:07:56] domains which are associated with
[01:07:58] telescope.com will be here. So if
[01:08:00] instead of telescope.com if we are
[01:08:02] hitting courses.tlescoo.com
[01:08:05] and from this the authoritative name
[01:08:07] server will get that this is our
[01:08:09] telescoozone and in tles zoom we will
[01:08:12] get the courses.tlesco.com
[01:08:14] IP address also. So yeah this is it for
[01:08:17] DNS for now. I hope you understand it.
[01:08:20] If you get it let me know in the
[01:08:22] comments. If you have any queries also
[01:08:23] let me know in the comments. Have you
[01:08:25] ever wondered if you see Zomemetto, if
[01:08:27] you see Uber, if you see Ola, if you see
[01:08:30] Rapido and all these applications also
[01:08:33] Swiggy, they all have an inbuilt map.
[01:08:36] But did they create their own map in
[01:08:38] their applications or do they use the
[01:08:41] existing Google maps in order to do
[01:08:43] that? Now that is possible only through
[01:08:46] APIs. So Google maps present some APIs
[01:08:50] to other applications which they can
[01:08:52] use. Now in order to understand APIs in
[01:08:54] detail, let's dig into this video and go
[01:08:57] to our screen. If we think about API,
[01:09:00] the API basically stand for application
[01:09:03] programming interface. Now what does
[01:09:06] this mean? Suppose this is our
[01:09:08] application.
[01:09:10] Any application will work. Let's say
[01:09:11] this is a movie application in which we
[01:09:15] have all the movies plus we have all the
[01:09:17] ratings, all the reviews of the movie
[01:09:20] like IMDb or something. Okay. like
[01:09:22] Rotten Tomatoes or something. So we are
[01:09:24] already capturing all the details which
[01:09:26] includes a movie like latest movie,
[01:09:28] latest hits of 2000, 2010, 2020
[01:09:32] everything. Now we already have this
[01:09:34] amount of data which is stored in our
[01:09:37] database and our application is already
[01:09:39] working on that. Let's say now in any
[01:09:43] other corner of the world someone is
[01:09:45] trying to create one application based
[01:09:47] on the data which is already captured in
[01:09:50] this app. Now they have two option
[01:09:53] either they can create their own engine
[01:09:55] like this their own application where
[01:09:57] they will again curate all the ratings
[01:09:59] curate all the reviews and curate all
[01:10:01] the data but now where are they going to
[01:10:04] curate this form for this every
[01:10:06] application leaves some end points which
[01:10:09] can be used by another application. Now
[01:10:12] if for our application or for this
[01:10:15] developer application if they want to
[01:10:17] use rating of some movie application
[01:10:19] they can directly call the APIs of this
[01:10:22] application and through which they will
[01:10:24] get the proper information which is
[01:10:26] required for them. Now like this this
[01:10:28] developer or this application don't have
[01:10:31] to create their own application for the
[01:10:33] task which is already been done. So they
[01:10:36] can use the application data directly.
[01:10:39] But again can't we directly give access
[01:10:42] to our database? This can be dangerous
[01:10:44] right? Because then this application
[01:10:47] again have to handle a lot of scenarios
[01:10:49] based on the database queries. Plus they
[01:10:52] can also delete some important data in
[01:10:54] this database which will affect the
[01:10:56] other applications which are using the
[01:10:58] same content. Also there are some added
[01:11:00] functionalities. Let's say we are giving
[01:11:03] an option to write a review again. So in
[01:11:05] this we have already handled that case
[01:11:08] through some or the other API. So
[01:11:10] instead of creating a new endpoint in
[01:11:13] this application we can directly access
[01:11:16] the endpoint of the other application
[01:11:18] which is going to take our review also.
[01:11:21] So in this case this application saves a
[01:11:24] lot of time because they are using
[01:11:26] another application the APIs of another
[01:11:28] application through which they are going
[01:11:30] to do the same work. Now in this case if
[01:11:33] this application wants to add some data
[01:11:35] into their database also they can easily
[01:11:38] do this. So this is one use case of
[01:11:40] creating an API or using APIs of other
[01:11:43] application. Also there can be a case
[01:11:46] where you're creating an application and
[01:11:48] in the back end you are exposing the
[01:11:51] APIs which can be used by your front
[01:11:53] end. So front end can be a web
[01:11:55] application or even a mobile application
[01:11:58] can be both also. Let's say we are
[01:12:00] creating some back end and from for the
[01:12:02] application we are also creating front
[01:12:04] end maybe using react or something and
[01:12:06] back end using swift or something. In
[01:12:09] both of these cases these languages the
[01:12:12] react and swift both are capable of
[01:12:15] handling APIs. So they don't care about
[01:12:18] which language did the backend use in
[01:12:21] order to provide them the API. They will
[01:12:23] directly call the APIs and use the
[01:12:25] information which they are trying to
[01:12:27] use. So this is another scenario where
[01:12:29] there are no two applications. There is
[01:12:31] only single application which is divided
[01:12:34] into front end and back end part and
[01:12:36] using the data which back end is
[01:12:37] providing. Again in this case also you
[01:12:41] can think that they will use the
[01:12:43] database directly but it is restricted
[01:12:45] and prohibited for the security of data
[01:12:48] which we have already discussed in the
[01:12:49] first case. So with this we understand
[01:12:51] the core functionality or usage of the
[01:12:53] APIs. Number one is if we want to give
[01:12:56] access to some other application and
[01:12:59] number two is if we want to give access
[01:13:01] of the endpoints or the APIs to our
[01:13:04] front end. Now this both can also happen
[01:13:07] at the same time because it is up to us
[01:13:09] how do we want to expose our APIs. Some
[01:13:12] applications or some back end basically
[01:13:15] restricts the APIs to be used through
[01:13:17] their front- end applications only and
[01:13:19] if you want to make them open you can
[01:13:21] make them open so that other application
[01:13:23] can also use the same API. Now let's
[01:13:25] move forward to the type of APIs. The
[01:13:28] first type of API is called as rest API.
[01:13:32] If you are a developer you already are
[01:13:34] using this. Also if you are creating
[01:13:35] projects you might already have created
[01:13:37] them or use them in your application.
[01:13:40] Now rest basically stands for
[01:13:43] representational state transfer. Rest is
[01:13:46] one of those APIs which you will see in
[01:13:49] most of the application nowadays because
[01:13:51] of its easiness, it structure and its
[01:13:54] ability to easily maintain a large
[01:13:55] amount of data with low volume. So
[01:13:58] that's why we use rest. Mostly in rest
[01:14:02] we use JSON which is JavaScript object
[01:14:05] notation which is a way or a format
[01:14:08] through which we will send or retrieve
[01:14:10] the data. It is a easytouse format.
[01:14:13] That's why we are sticking with this for
[01:14:15] this today's video and we are going to
[01:14:17] cover this in details in a minute. Also
[01:14:19] we have some other types that is SOAP.
[01:14:23] SOAP basically stands for simple object
[01:14:26] access protocol. This is also one way of
[01:14:28] handling the data across applications
[01:14:31] across different platforms and soup
[01:14:33] basically use XML formats in order to
[01:14:37] transfer the data. XMLs are replaced by
[01:14:40] JSON because XMLs were really bulky in
[01:14:44] nature because in order to create every
[01:14:46] object or every array we have to mention
[01:14:49] the attributes again and again which is
[01:14:52] solved by JSON. So that's why we prefer
[01:14:55] JSON over XML any day in today's time.
[01:14:59] But the SOAP or the XML was famous back
[01:15:02] then. So that means there are lot of
[01:15:04] applications which are still using XMLs.
[01:15:07] Why? Because there are legacy
[01:15:08] applications. They are built way earlier
[01:15:11] uh when JSON was introduced and still
[01:15:14] are using XML. So in legacy system if
[01:15:17] the APIs are created and exposed using
[01:15:20] XML that means in order to make our
[01:15:24] system work we also need to know about
[01:15:27] XMLs so that we can integrate those APIs
[01:15:30] into our system also you can use some
[01:15:33] middleware application where the data
[01:15:36] will be taken in the form of XML and
[01:15:38] will be converted into JSON and your
[01:15:42] application can use that data
[01:15:43] afterwards. So that's why if you are
[01:15:46] working with a legacy system it is
[01:15:47] preferred to understand the XML also so
[01:15:50] that you can convert them in JSON or you
[01:15:53] can work them without converting them as
[01:15:55] well. So after so let's jump to the
[01:15:57] third one which is GraphQL. So GraphQL
[01:16:01] is also used widely across many
[01:16:03] applications many platforms. So the
[01:16:06] basic thing in graphql is graphql
[01:16:09] basically says that I'll provide a
[01:16:11] single endpoint only a single endpoint
[01:16:14] and based on that you can send whichever
[01:16:17] query you want. So in FE from FE side we
[01:16:21] will not hit multiple endpoints but we
[01:16:24] will send a request as a query that's
[01:16:26] why the graphql stands for graph query
[01:16:29] language. So GraphQL also have a query
[01:16:32] language that is similar to SQL. In SQL
[01:16:35] also we have multiple queries from which
[01:16:37] we can do our things. In this also only
[01:16:40] one point is exposed as I told earlier
[01:16:43] and using that only the front end now
[01:16:46] can send multiple queries and access
[01:16:48] that particular endpoint and get the
[01:16:51] data which they want. So this is the
[01:16:52] core concept of GraphQL. So as I said
[01:16:55] GraphQL is also present in our today's
[01:16:57] time also. So there can be a chance that
[01:17:00] you learning GraphQL and working on it.
[01:17:02] The other type of API is gRPC. Here the
[01:17:06] RPC stands for remote procedural calls.
[01:17:09] And for G some may say that G stands for
[01:17:12] Google because it is created by Google.
[01:17:15] But it is GRC CP remote procedural calls
[01:17:20] only. So instead of using XML and JSON,
[01:17:23] we have a new format here which is
[01:17:25] called protocol buffers. It is very much
[01:17:27] efficient than JSON and XML combined. So
[01:17:31] that means the size of protocol buffers
[01:17:33] are usually very small than XML or JSON.
[01:17:36] So that will enable the data to transfer
[01:17:39] faster. So because of this only Google
[01:17:41] created this and uses this. So this is
[01:17:45] small in size and faster to transfer. In
[01:17:48] today's applications where we have
[01:17:50] microservices, right? So in
[01:17:52] microservices this is our entire
[01:17:55] application and let's say our
[01:17:57] applications is divided into multiple
[01:17:59] applications which is combining the data
[01:18:03] of their endpoints through each other.
[01:18:05] Let's say these are the connections and
[01:18:08] through this they are going to provide
[01:18:10] the actual API to the outer world. Now
[01:18:12] for this communication between these
[01:18:14] microservices we often use gRPC. Why?
[01:18:18] because internally at least the
[01:18:21] communication should be faster to
[01:18:23] provide the relevant information in a
[01:18:25] low latency. This will also help us
[01:18:28] having multiple microservices and having
[01:18:30] various kind of communications between
[01:18:32] them before giving the actual data to
[01:18:35] the other application or the front end.
[01:18:37] Now let's jump to the last one in our
[01:18:39] list today which is websockets.
[01:18:42] Websockets are also used in today's time
[01:18:44] in today's application for various
[01:18:46] purposes. For every notifications if we
[01:18:49] see websockets are used in order to
[01:18:51] maintain a chatting stream websockets
[01:18:54] are used. Wherever you need some
[01:18:56] realtime connections websockets are
[01:18:58] used. So its architecture is slightly
[01:19:01] different from the other services. In
[01:19:03] other services front end or the other
[01:19:05] application will place some request to
[01:19:08] the application and then they will
[01:19:10] provide the response. But in websockets
[01:19:13] whenever front end creates a request a
[01:19:16] channel is created. Now once the channel
[01:19:19] is established then the conversation can
[01:19:21] be lead through back end also. Whereas
[01:19:24] in other forms only front end or the
[01:19:26] other application which is trying to
[01:19:28] access the information they send the
[01:19:29] request and get the request. But in this
[01:19:32] case since the back end also can
[01:19:34] initiate the conversation that means it
[01:19:37] can also send some or the other
[01:19:39] information by itself. Those information
[01:19:42] can be the chat or the notifications
[01:19:46] which is very helpful for front end to
[01:19:47] get because if this channel is not there
[01:19:50] the front end have to constantly ask the
[01:19:52] back end whether there are some new
[01:19:54] notifications or not or whether the chat
[01:19:56] is there or not. But once the channel is
[01:19:59] maintained through websockets, it is
[01:20:01] easy to navigate message from back end
[01:20:03] to front end and front end to back end
[01:20:05] as well. With this also if you have
[01:20:07] played quizzes on our tles platform only
[01:20:10] the school channel in which you may see
[01:20:12] an application which Davincer presents
[01:20:14] in order to share the quiz with you all
[01:20:16] you use that application in order to
[01:20:18] give the responses. Now those responses
[01:20:21] or the marks are calculated based on the
[01:20:23] response time and the correctness of the
[01:20:26] answer. Now those connections are also
[01:20:28] maintained through websockets. That's
[01:20:30] why you see many notifications or some
[01:20:32] GIF or something something. So this is
[01:20:34] about websocket and with this I would
[01:20:36] like to conclude this session because it
[01:20:38] is going to be a long session and it is
[01:20:40] better to understand these things in
[01:20:42] parts. So these are the most used five
[01:20:46] type of APIs which we have. Now in order
[01:20:50] to understand them briefly in the next
[01:20:52] video I'm going to talk about restful
[01:20:53] APIs in which we will discuss the
[01:20:56] various aspects or the parts of the APIs
[01:20:59] and also see what are the
[01:21:01] recommendations and usage of those APIs.
[01:21:04] Now that we already know about restful
[01:21:06] APIs and all the other different type of
[01:21:08] APIs, it's time to deep dive into one of
[01:21:10] them. And for today's video, I have
[01:21:13] selected rest APIs to deep dive into.
[01:21:15] Why? because it is the most used APIs
[01:21:18] across the world. It doesn't matter if
[01:21:20] you are starting a career or you are
[01:21:22] already seasoned, you have to work with
[01:21:24] restful APIs for sure. So let's move to
[01:21:27] the screen now. Restful APIs are also
[01:21:29] known as REST APIs. As we know it stands
[01:21:32] for representational state transfer.
[01:21:35] What does it mean? It means that REST is
[01:21:37] also one format through which we will
[01:21:39] transfer our data from one end to
[01:21:41] another end. What are these ends? We
[01:21:43] have discussed this already. either we
[01:21:45] are giving some data from front end to
[01:21:47] back end or vice versa. It is also
[01:21:50] possible that one application needs to
[01:21:52] get some data from some other
[01:21:54] application. So in that case also APIs
[01:21:56] are used and rest specifically is used
[01:21:59] to transfer some data from one end to
[01:22:01] another end. So basically it is a way of
[01:22:04] how our applications are going to
[01:22:06] communicate with each other. Now before
[01:22:08] starting let me tell you that in rest we
[01:22:11] normally use JSON. JSON is a standard
[01:22:14] way of sharing the data. In JSON, we can
[01:22:17] have array, we can have object and with
[01:22:20] these two combinations, we can share our
[01:22:22] data in the form of key and value. So,
[01:22:25] let me create a simple JSON. Let's say
[01:22:27] this is a start of an object. And here
[01:22:30] we have a key let's say name. For value,
[01:22:33] I'm writing my name. With comma, we
[01:22:35] separate different values. So, after
[01:22:37] comma, I have to write some other key.
[01:22:40] So, let it be age. And with age I can
[01:22:42] write any numeric value as well. So as
[01:22:44] we can see this is string value and this
[01:22:47] is a numeric value. There are more
[01:22:49] values who are accepted as a form of
[01:22:51] value which is we have already seen
[01:22:54] string and then number. We can also use
[01:22:56] boolean even a nested object arrays and
[01:23:00] a null. Null can also be used because if
[01:23:02] we don't have any value for that
[01:23:04] particular field correctly, it is easy
[01:23:06] to say it is a null value and the
[01:23:08] application which is using that value
[01:23:10] can take care of it. So this is all
[01:23:12] about the JSON which we need to know. We
[01:23:14] need to know that it is in the form of
[01:23:15] key value pair and what are the values
[01:23:18] which we can use. Now let's move forward
[01:23:20] to the next part which is endpoint. In
[01:23:23] order to understand endpoint, we have to
[01:23:25] get two things. One is method and the
[01:23:28] other thing is path. So in order to
[01:23:30] access any data we have to have some URL
[01:23:33] on which we will hit with that
[01:23:35] particular method and based on the
[01:23:38] method selection and the path we are
[01:23:39] going to either get or pass some data to
[01:23:42] our server. Let me start this with an
[01:23:44] example. Suppose we are using http as uh
[01:23:48] any site my site.com.
[01:23:51] So this is our main site and after that
[01:23:53] we can put a slash and use a different
[01:23:56] URL. Let's say we are separating all the
[01:23:58] APIs in the API subdomain. So APIs is
[01:24:02] there. And then we can also segregate
[01:24:04] the APIs using version. So this is
[01:24:07] version one. And here we are going to
[01:24:09] write resource. Now resource can be
[01:24:11] anything. If we talk about any
[01:24:12] e-commerce application in can be a
[01:24:14] product, it can be coupon, can be user,
[01:24:18] can be anything. Basically a resource is
[01:24:20] an entity through which we are
[01:24:22] navigating and getting and passing the
[01:24:24] data to the database. So this is the
[01:24:26] URL. The URL is called the path through
[01:24:29] which we are going to either get or pass
[01:24:31] some data and with this we need to have
[01:24:34] a method. So for method we can have a
[01:24:37] get basically. So get method with this
[01:24:39] path combinedly creates an endpoint and
[01:24:42] through which now we can get some data.
[01:24:45] We expect this path to retrieve some
[01:24:47] data because we are using get. Now there
[01:24:50] can be multiple ways of creating this
[01:24:53] URL. So normally we hide the domain part
[01:24:56] of it. We don't use them in the
[01:24:58] explanations. We only use the resource
[01:25:01] part also we can remove the version also
[01:25:04] with that API can also be removed in
[01:25:06] order to understand the resource part
[01:25:08] directly. So from now on if I create any
[01:25:12] path let's say users it is expected to
[01:25:15] have all this domain name API versioning
[01:25:18] if it is there beforehand. So I'm not
[01:25:20] writing that again and again. Cool. So
[01:25:22] with that if I write users here and use
[01:25:25] get method now I'm expecting some
[01:25:28] response from our server. I'm expecting
[01:25:31] either a list or a response from our
[01:25:34] server. We will come back to responses
[01:25:35] in a while. But this is how we can get
[01:25:37] some user information from our server.
[01:25:39] Now let's move to the second part. In
[01:25:42] this we don't want all the users. We
[01:25:44] want a specific users. So to find a
[01:25:46] specific user we have to provide them an
[01:25:48] ID. Normally we provide them in the URL
[01:25:50] itself. So it is get users and here we
[01:25:54] can include the id. So in real time it
[01:25:57] can be used as users / one. So if we
[01:26:00] write one the user with the id one will
[01:26:04] be retrieved. Now with this we can also
[01:26:06] add any user. So the third part is
[01:26:09] adding a user. So again the URL will be
[01:26:12] same users and now we are adding the
[01:26:15] user. So we are using the method post
[01:26:17] here. So in this with post we are going
[01:26:20] to give some body and in body we will
[01:26:23] have some JSON which will store the user
[01:26:26] information which we are trying to
[01:26:27] create and based on our request our user
[01:26:30] will be created in our database. Now
[01:26:32] once we have all the user details in our
[01:26:34] table we may choose to update any user
[01:26:36] information correct. So for that we use
[01:26:39] another method which is put. Again the
[01:26:42] URL will be same users and with this
[01:26:45] users we will send the id of the user of
[01:26:49] which information we are trying to
[01:26:51] update. So with put we also have another
[01:26:53] method which is patch which can also be
[01:26:56] used in the similar way to update the
[01:26:58] user information. Now what is the
[01:27:00] different between put and patch? It is
[01:27:03] simply that if we use put our entire
[01:27:06] user object will be replaced with the
[01:27:08] new data. So this is going to replace
[01:27:11] the user data and if we don't want to
[01:27:14] update all the fields, we want to update
[01:27:16] a specific field or particular field
[01:27:18] suppose username, name, age or anything.
[01:27:21] So we can use patch. It can be used to
[01:27:24] partially update the user record. Let's
[01:27:26] understand this with an example. Let's
[01:27:28] say we have any user information which
[01:27:31] have ID and have a name and have a
[01:27:34] username maybe age. This is all. So
[01:27:37] these are all the values which our user
[01:27:40] currently have. Let me put some values.
[01:27:43] So if our user table or user entity have
[01:27:46] these all four values. If we use put to
[01:27:50] update a particular change only. Let's
[01:27:52] say I'm going to change my username from
[01:27:56] ash to ak something. So now this change
[01:28:01] will only be done if we again send the
[01:28:04] entire body into the put request. If we
[01:28:07] only send username like this then all
[01:28:11] the other values of our entity will be
[01:28:13] updated with the default value. So if we
[01:28:15] send this kind of data in a put request
[01:28:18] it is going to replace our entire
[01:28:19] entity. So that means the name the age
[01:28:23] will be replaced by the default or null
[01:28:26] value. So it is not recommended to use
[01:28:28] put entirely if you want to update your
[01:28:30] entity partially. In those cases always
[01:28:33] try to use patch. In patch we are going
[01:28:36] to again update the particular
[01:28:37] information. So this is perfectly valid
[01:28:40] for a patch request. So with this let's
[01:28:43] move to the next part. The next kind of
[01:28:45] method which we use is delete. In delete
[01:28:48] also normally we pass the id like this.
[01:28:52] So if we write users and with slash we
[01:28:55] write one. So that means the user with
[01:28:58] the ID 1 will be deleted. Now this is
[01:29:00] the usual stuff. You will get this
[01:29:02] information anywhere. Now let me talk
[01:29:05] about something which is nested data.
[01:29:07] Let's understand nested data with an
[01:29:08] example. Suppose we are creating a blog
[01:29:11] site. So in blog site we normally have
[01:29:14] our users who are going to read our
[01:29:16] blogs. Then we have blog the actual
[01:29:19] content on the site and on block the
[01:29:21] user can comment. So we have clearly
[01:29:23] three entities users blocks and then
[01:29:27] comments. So these three entities are
[01:29:30] interrelated. So a user is going to give
[01:29:33] comment on a particular blog. User can't
[01:29:36] comment if there is no blog. Correct? So
[01:29:39] this is the way. Now in order to create
[01:29:42] APIs for this, we can create a users API
[01:29:46] for all the users activity. So all the
[01:29:49] users activity means we can use it for
[01:29:52] get, put, push, delete and patch also.
[01:29:56] Now this is simple because a single
[01:29:58] entity is there users and all the
[01:30:00] operations are on that users only. Now
[01:30:03] let's say we want to create an API on
[01:30:07] which user can add a comment. Okay. So
[01:30:10] for that what we can do we can either go
[01:30:13] from the blogs perspective. So every
[01:30:15] blog have a particular comment section.
[01:30:17] Right. So blogs then here we can write
[01:30:20] id. So this id is basically belong to
[01:30:23] the blog and with blog we can write
[01:30:25] commands and if we write get here what
[01:30:28] it is going to do it is going to give us
[01:30:30] all the commands which are associated
[01:30:32] with the blogs with id this correct so
[01:30:36] this is a nested relationship where we
[01:30:38] trying to access comments but we are
[01:30:41] going via blogs we can also do like this
[01:30:44] suppose we are on the user's page and we
[01:30:46] want to see all the comments that user
[01:30:48] have created so we can again create a
[01:30:51] get query via users where this is the
[01:30:55] user ID here and we can see comments. So
[01:30:58] we are dealing with two different
[01:31:00] entities by creating the relationships
[01:31:02] between them. So by this we are going to
[01:31:05] get all the comments which are created
[01:31:07] by the user with this ID. So we can go
[01:31:10] to comments via blogs as well and via
[01:31:13] users as well. So this is nested. Again,
[01:31:16] if you want to update any comment,
[01:31:17] delete any command, we can use simply
[01:31:20] the comments path where the user can
[01:31:23] enter the ID here of the comment and
[01:31:27] they can use it to update or delete that
[01:31:30] particular comment. So here you can also
[01:31:32] ask me that why are we using this kind
[01:31:35] of nesting in URL? Why are we not
[01:31:37] sending the data in the request? So that
[01:31:39] is also possible. We can do like this.
[01:31:41] We can go to this commands and we can
[01:31:44] pass the request body in which we will
[01:31:47] pass the post id to get all the comments
[01:31:50] associated with this post. This is also
[01:31:52] possible but this is not recommended as
[01:31:55] there is a direct relationship between
[01:31:56] two entities. We don't normally go for
[01:31:59] this body approach. We go for the URL
[01:32:02] approach because it is easy to
[01:32:04] understand also. So when do we go for
[01:32:06] the body approach? So the body approach
[01:32:09] is used when we are trying to filter any
[01:32:12] data. So we understood two concepts
[01:32:14] here. First is the nesting data versus
[01:32:17] filtering. So when to use which one? If
[01:32:20] you have a clear relationship between
[01:32:22] two entities and it is clean. So you can
[01:32:25] go for nesting. And also in filtering
[01:32:28] apart from sending the data like this in
[01:32:31] post ID you can also use the URLs like
[01:32:34] this comments and then in query
[01:32:37] parameter you use post ID. Now this is
[01:32:40] again not recommended because there is a
[01:32:42] direct relationship between comments and
[01:32:44] post. So it should be a nested type of
[01:32:46] URL. So if there are clear relationship
[01:32:49] we can use nesting and if the
[01:32:51] relationship is complex we can go for
[01:32:54] filtering. Also the filtering will be
[01:32:57] used whenever we are trying to do
[01:32:59] pagionation or we are trying to filter
[01:33:02] particular records based on multiple
[01:33:04] ways like we can go for any e-commerce
[01:33:06] page where we are seeing different
[01:33:08] products and we can filter our product
[01:33:10] based on our color price range and all
[01:33:12] these things. So those things normally
[01:33:15] go for query parameters as a URL right
[01:33:18] and we don't go for nesting there
[01:33:20] because it will be complex to handle a
[01:33:22] long path with nesting data. So the crux
[01:33:24] is if the relationship is pretty
[01:33:26] straightforward and we will go with
[01:33:28] respect to the other entity we'll go for
[01:33:31] nesting kind of URLs and if there are
[01:33:33] complex relationships or the filtering
[01:33:36] is used we'll go for the query
[01:33:39] parameters. Now let's move to the next
[01:33:42] part. How do we pass the actual data to
[01:33:44] the endpoint? So there are three ways
[01:33:46] either we can use path so we can
[01:33:49] integrate the ids in the path or we can
[01:33:52] use some query parameter or we can use
[01:33:55] body. I have given you glimpse of these
[01:33:57] all three in the previous section. But
[01:34:00] now let's talk about this specifically.
[01:34:02] So for path it is very specific that we
[01:34:05] will only pass the recommended ids or
[01:34:08] maybe slugs or maybe that particular
[01:34:11] unique identifier only. So this is
[01:34:14] unique identifier. It can be ID or slug.
[01:34:18] Slug is basically a short form of that
[01:34:21] particular post. If you are using any
[01:34:23] blog site, so let's say the blog site
[01:34:25] the blog is about what is Java and in
[01:34:29] slug you can see something like blog/
[01:34:32] what is Java like this. So this is our
[01:34:36] slug. Again this slug will be unique
[01:34:39] throughout our blogs. So the name of the
[01:34:42] URL I have also written blogs it is
[01:34:44] wrong. Normally we address the URL in
[01:34:47] the form of plurals. So it is going to
[01:34:49] access in multiple areas multiple
[01:34:51] scenarios. So normally we don't go for
[01:34:54] blog we go for blogs like this. Cool.
[01:34:58] Now for query parameters whenever we are
[01:35:01] filtering or maybe sorting we can go for
[01:35:04] query parameter. Suppose we are again
[01:35:06] scrolling through our blogs and in blogs
[01:35:09] we can write like sort asc or we can
[01:35:14] assign some numbers also. So ascending
[01:35:15] means sort ascending maybe by date. So
[01:35:18] whichever date they are created they
[01:35:20] will be sorted by that or maybe we can
[01:35:22] use dc for decreasing order so that the
[01:35:26] latest post will be pop up first. With
[01:35:28] this again we can use the query
[01:35:30] parameter for filtering. So maybe we
[01:35:33] will use blogs again here and with that
[01:35:36] we will pass query parameter. So this is
[01:35:38] Q for maybe query search or search step.
[01:35:42] So anyone with is searching for Java and
[01:35:45] it will give us a list of blogs for Java
[01:35:49] or which have Java in their name or
[01:35:51] their content or their category. So this
[01:35:53] is all about query parameters. Now
[01:35:56] whenever we pass any information in
[01:35:58] query parameter and path those
[01:36:00] informations are going to be exposed
[01:36:02] right so that means we can't pass any
[01:36:05] sensitive information into query
[01:36:07] parameters or path. So for that we have
[01:36:10] body. So let's say we have a login path
[01:36:13] and now we can pass username and
[01:36:15] password in the body which is not
[01:36:17] exposed at all. So it is safe. So the
[01:36:20] rules are pretty clear when we use path
[01:36:23] query params and body. Now with this
[01:36:25] let's see a full request in action. The
[01:36:27] first thing is we will have our method.
[01:36:30] So this is maybe a post method and we
[01:36:33] are using some API of version three
[01:36:36] maybe for version three we are using
[01:36:39] users and then we can also pass the
[01:36:42] metadata suppose content type we can
[01:36:45] pass which is application/json
[01:36:49] here because we are passing the
[01:36:50] information in the form of JSON. We can
[01:36:52] also use XML or if you have latest
[01:36:56] information, we also have a new format
[01:36:58] in town which is tone. So we can also
[01:37:01] use various kind of information but
[01:37:03] because currently we are using JSON. So
[01:37:05] we can pass it like this and with this
[01:37:07] we have our body. In body we can pass
[01:37:10] anything maybe some data we are trying
[01:37:12] to add and then maybe username. So like
[01:37:15] this we can pass the entire request or
[01:37:18] the data to our server. So this is what
[01:37:21] this is our method this is the path this
[01:37:24] again is metadata and this is our body.
[01:37:28] Now once we have understood the request
[01:37:30] correctly it is time to understand the
[01:37:32] responses. So in order to understand the
[01:37:35] response first we need to understand the
[01:37:37] response code. So there are specific
[01:37:39] codes assigned to a specific type of
[01:37:42] response which if the user gives we'll
[01:37:44] clearly understand what they want to
[01:37:46] tell us. So let me start with those
[01:37:48] status codes and then we will move
[01:37:50] forward. So these are all the response
[01:37:52] codes which we have to know. 200 stands
[01:37:55] for okay. So this means everything is
[01:37:57] working as expected. Don't worry about
[01:38:00] it. Then we have 201. 201 basically used
[01:38:04] when there is a new entity created in
[01:38:06] the database. So this is created. Then
[01:38:09] we have 204. 204 is again saying that
[01:38:12] everything is working fine but I don't
[01:38:15] have anything to provide to you. Let's
[01:38:17] say we are deleting any entity. So it is
[01:38:19] successfully deleted but they don't have
[01:38:21] any response body to give to us. So that
[01:38:24] means there is no content to give to us
[01:38:26] but the request is working fine. Then we
[01:38:29] have 301. 301 is basically used for
[01:38:32] redirects and 301 indicates that it is a
[01:38:36] permanent redirect. And if the redirect
[01:38:39] is not permanent then we use 302 that is
[01:38:42] temporary redirect. Then we will come to
[01:38:45] the 400 series. So all the 400 series
[01:38:48] basically says that there is some issue
[01:38:51] with the request we are having. So the
[01:38:54] 400 stands for bad request that means
[01:38:57] some or the other data is not correctly
[01:39:00] mentioned in the body. Either they have
[01:39:03] some validation issue either either they
[01:39:05] are missing when they are required
[01:39:07] either they have some other issues but
[01:39:09] request which we are getting the body
[01:39:12] doesn't have the correct information. So
[01:39:14] in that case we normally give 400 bad
[01:39:17] request as a response. Then we have 401.
[01:39:20] 401 is given when someone is trying to
[01:39:24] access some information for which they
[01:39:26] are not basically authorized. So 401 is
[01:39:30] unauthorized. With that we have 403
[01:39:33] which is used for forbidden. Suppose on
[01:39:36] LMS you have not enrolled for a course
[01:39:38] and you want to access a particular
[01:39:40] video or lesson part of that course
[01:39:42] which is not publicly accessible. So in
[01:39:44] that case you will receive 403 forbidden
[01:39:47] because you are not allowed to see that
[01:39:49] particular resource. With this we have
[01:39:51] 404 page not found. This is basically
[01:39:54] used whenever the URL is incorrect or
[01:39:57] trying to access some or the other
[01:39:59] resource which is not there into our
[01:40:01] system. And at last we have 500. So 500
[01:40:05] is the response which is given to a
[01:40:08] front end when there is something wrong
[01:40:10] with the back end. So this is related to
[01:40:13] back end. Some or the other error is
[01:40:15] there in the back end. Maybe some syntax
[01:40:18] error, maybe some other error, some
[01:40:20] logic is missing, some data is missing,
[01:40:22] something is wrong with back end. So
[01:40:24] this is internal server error. There are
[01:40:27] many errors which we don't want users to
[01:40:30] see. So those all are handled by 500
[01:40:34] because we don't want the user to
[01:40:36] understand what is the issue we are
[01:40:37] facing with our database connection or
[01:40:39] anything. So we will create logs into
[01:40:42] our system and through which we will
[01:40:44] resolve the 500 error issues. So these
[01:40:46] are all the most commonly used response
[01:40:49] codes which we have to understand. So
[01:40:51] now whenever we are creating any APIs if
[01:40:53] the response is completely fine we will
[01:40:56] provide 200. If we are creating any
[01:40:58] entity we will provide 201. If we are
[01:41:01] deleting or performing some operations
[01:41:03] where we don't have to give any content
[01:41:06] or any data or any body in the response
[01:41:09] we will use 204. Then if the permanent
[01:41:13] redirection is there we will use 301. If
[01:41:15] the redirection is for temporary basis
[01:41:18] we will use 302. For any bad request in
[01:41:22] the body we will use 400. For
[01:41:25] unauthorization we will use 401. For
[01:41:28] forbidden or the content which required
[01:41:31] some special access we will give 403.
[01:41:35] 404 we will give when they are trying to
[01:41:38] access any resource which is not there.
[01:41:40] and 500 we will give when there is any
[01:41:43] issue in the internal server. So with
[01:41:45] this let's move to the next part which
[01:41:47] is response body. So normally in
[01:41:50] response body what is allowed? First we
[01:41:52] start with that. So we can return an
[01:41:55] array right also we can return an object
[01:41:59] with this also we can return data as
[01:42:02] nested objects. Now in most of the
[01:42:05] applications whenever you are going
[01:42:06] through any YouTube tutorial or any
[01:42:09] course also sometimes when you are
[01:42:11] dealing with multiple responses let's
[01:42:14] say the responses for this is normally
[01:42:17] an array right but it is not recommended
[01:42:20] to handle the response as array it
[01:42:23] should always be wrapped in the form of
[01:42:26] an object and if you want you can use
[01:42:28] any other key for this users and in the
[01:42:32] value you will give these responses. Now
[01:42:35] these can also be string or an object
[01:42:39] normally an object only of all the users
[01:42:41] but it should be handled like this. So
[01:42:43] this is the correct or I would say
[01:42:46] recommended way. So every response body
[01:42:48] should be an object and even if we are
[01:42:51] trying to give an array we have to wrap
[01:42:54] it up into an object and give us in the
[01:42:57] key value form. So this is a good
[01:42:58] practice and through this we will
[01:43:00] achieve a more long-lasting code. Why?
[01:43:03] Let's say today we are passing the user
[01:43:05] details only and tomorrow we understand
[01:43:07] that okay we have to add more fields. So
[01:43:10] we don't have to change much on the
[01:43:13] front end side or the receiving side but
[01:43:16] we will simply update our response
[01:43:19] change the object here and maybe add
[01:43:23] some other field user count and pass
[01:43:25] that information maybe 29 and with this
[01:43:28] we can end our object here. So we can
[01:43:31] pass as many informations as we want but
[01:43:34] if we have used a single array as a
[01:43:38] response then we have to struggle with
[01:43:39] it and we have to change the entire
[01:43:41] architecture of our response. So it is
[01:43:44] always recommended to pass the response
[01:43:47] always in the form of an object. So let
[01:43:49] me write returning as array not
[01:43:52] recommended. Let me know in the comments
[01:43:54] if you already knew about this or you
[01:43:56] are hearing this for the first time. So
[01:43:58] with this let me create a map of request
[01:44:01] type and responses. So let's say here we
[01:44:05] have request here are the responses
[01:44:07] which we are going to receive. So if the
[01:44:10] request type is get and we are trying to
[01:44:12] access many records. So maybe we are
[01:44:15] trying to access users it is going to
[01:44:18] give an array of records. Right? So it
[01:44:21] is normally going to give 200 as a
[01:44:24] response code and going to give an
[01:44:26] array. Now we understand that we have to
[01:44:28] not give error directly. So it will be
[01:44:31] wrapped in the form of an object. Now
[01:44:34] the next request is also a get request
[01:44:37] where we want to access a particular
[01:44:41] object. Let's say one. Now you can think
[01:44:44] that we will give the user information
[01:44:46] directly. But again it is not
[01:44:48] recommended to give that directly. We
[01:44:50] will use the nested object for the same
[01:44:52] reason. So in this object we will use
[01:44:55] the user as key and pass on the user
[01:44:58] information into this object. So this is
[01:45:02] the actual user object but we are
[01:45:04] wrapping it into an another object
[01:45:06] because it will give us flexibility to
[01:45:09] pass some more information if we want
[01:45:11] to. So let me clear this up for now. So
[01:45:14] normally we are going to get 200
[01:45:16] response with this kind of nested
[01:45:20] objects. Also it is possible that this
[01:45:22] ID is not there in our DB. In that case
[01:45:26] we can also give 404 response. Now if we
[01:45:29] are adding anything we will use post
[01:45:31] with the same URL and normally it is
[01:45:34] going to give 201 response which means
[01:45:38] the entity is created and also we can
[01:45:41] use 20 response if you want but if we
[01:45:44] are using 201 normally we give the ID or
[01:45:49] the new object as response. Now here
[01:45:53] with post request we are also giving the
[01:45:55] body so it can also have 400 issues
[01:45:59] right 400 bad request issue and also if
[01:46:02] the format doesn't sync in it can also
[01:46:04] give 500 issue if the data is coming
[01:46:07] properly and there is some issue in the
[01:46:09] back end it can also give 500 easily. So
[01:46:11] these are most common response codes
[01:46:14] which you can have while working with
[01:46:16] post. Now let's talk about delete. In
[01:46:19] delete also we will pass this URL with
[01:46:23] some id and this can also give 200 as a
[01:46:27] response and also if it is deleted
[01:46:30] correctly and we don't want to give any
[01:46:32] body in the response we can go for 204
[01:46:36] if this entity is not present maybe the
[01:46:38] ID they are using is one and we don't
[01:46:40] have any record with the ID 1 we can
[01:46:43] have 404 or we can have 500 if there are
[01:46:47] any dependencies and which is not
[01:46:49] handled correctly by our back end. With
[01:46:51] this, you can also see 401 here. If you
[01:46:54] are unauthorized person to delete that
[01:46:56] particular record or you are not allowed
[01:46:59] to delete that particular entity, you
[01:47:01] can also get 401. So these are the most
[01:47:03] common request responses and with that
[01:47:06] we have also discussed what can be there
[01:47:08] in the response body. So with this we
[01:47:10] have covered the entire request section
[01:47:13] and the response part of the rest APIs
[01:47:16] and I hope the information which you get
[01:47:18] from this video is going to help you in
[01:47:20] your entire development career whenever
[01:47:22] you are dealing with rest APIs. In order
[01:47:25] to build any application we have client
[01:47:28] on this side right who is going to
[01:47:30] interact with either a web application
[01:47:32] or a mobile device to interact with our
[01:47:35] application. Now with this we will have
[01:47:38] our server in this side. So this is
[01:47:40] maybe our server and if we keep the
[01:47:43] model like this only that means every
[01:47:46] time we restart our server all the data
[01:47:49] which user is trying to access will be
[01:47:52] lost because when server restarts it
[01:47:55] clears all the data. But the thing is we
[01:47:58] need to store that data somewhere right.
[01:48:00] So for that we use database in order to
[01:48:03] store the information which the user may
[01:48:05] require next time when they log in or
[01:48:08] see our application. Now one thing is
[01:48:10] very clear that most of the application
[01:48:12] can't live without databases. Now in
[01:48:15] order to understand how do we store data
[01:48:18] we have two approaches. First is the SQL
[01:48:21] approach and the other one is NoSQL
[01:48:24] approach. So SQL basically consists of
[01:48:28] RDBMS which is relational database model
[01:48:31] in which we will have tables, rows,
[01:48:33] columns and we will connect those tables
[01:48:36] based on different joins and everything.
[01:48:39] And in NoSQL we have other methods. See
[01:48:42] saying SQL and NoSQL is like saying Java
[01:48:45] and No Java. That means there are
[01:48:47] various options in NoSQL. We can have
[01:48:50] our data as in the form of key value.
[01:48:53] Also we can have column. We can also
[01:48:55] have the data in the form of nodes maybe
[01:48:58] and we can store them in the form of
[01:49:01] graphs. Also we can store the data in
[01:49:03] the form of document. And here if we
[01:49:06] talk about SQL we have our tables in
[01:49:09] place who is going to hold our data in
[01:49:11] the form of entities and there will be
[01:49:14] different relationships between
[01:49:15] different tables. Also in order to do in
[01:49:18] SQL manner we have various softwares
[01:49:20] like Postgress or we can go for MySQL
[01:49:24] right like this we can have multiple
[01:49:26] options here for here also we have
[01:49:28] multiple options like Cassandra or we
[01:49:31] can go for MongoDB and based on this
[01:49:34] selection where we are going to do it
[01:49:36] SQL way or NoSQL way we are going to
[01:49:39] build the entire foundation of our work
[01:49:41] like how our data or important data is
[01:49:44] going to store in our data database. So
[01:49:47] in today's video let's focus on SQL and
[01:49:50] in next video we will focus the ways of
[01:49:52] NoSQL. So let's start. So SQL basically
[01:49:57] stands for structured query language and
[01:50:00] SQL comes under the category of
[01:50:02] relational DB. Now in relational DB we
[01:50:04] are going to have multiple entities and
[01:50:06] we are going to establish different type
[01:50:08] of relationships between those entities
[01:50:10] if required. So we are going to store
[01:50:13] our data in the form of tables. So we
[01:50:17] can loosely say that every table is
[01:50:20] loosely an entity. It can either be a
[01:50:23] user entity or it can be comments or it
[01:50:26] can be post if we are building anything
[01:50:29] like blog site or something or it can be
[01:50:32] videos if we are building YouTube. So
[01:50:34] like this we segregate our different
[01:50:36] entities and then we will build the
[01:50:38] relationship between them. Now if I draw
[01:50:40] one of those tables, let's say we are
[01:50:42] building a user table. A user table can
[01:50:45] have multiple fields that is equivalent
[01:50:47] to a user entity can have multiple
[01:50:50] properties. For example, a user can have
[01:50:52] their unique ID. A user can also have
[01:50:55] their first name and Lame and maybe we
[01:50:59] also have their phone number. So this is
[01:51:01] how a table is formed where we have
[01:51:03] multiple attributes of a table. These
[01:51:06] attributes are stored in columns. And
[01:51:09] when we have a complete record, let's
[01:51:12] say in this table we can add a new
[01:51:14] record where I can add any record. Let's
[01:51:17] say the ID is 1, the name is A, last
[01:51:20] name is Agarwal and phone number is
[01:51:24] let's say 987654
[01:51:28] 31. So this is my number. This is a
[01:51:30] complete record. Now this record is
[01:51:33] called as a row. So by getting any row
[01:51:36] from our table we can get the entire
[01:51:39] information of that particular entity or
[01:51:41] of that particular user. Normally for
[01:51:44] the name of entities we don't go for
[01:51:46] singular words because it will contain
[01:51:48] multiple records. So we will go for
[01:51:51] plural things users. So this is the
[01:51:53] standard this is a constraint. This is
[01:51:55] not a particular rule but it is safer to
[01:51:58] go into plural things. So for comments
[01:52:02] we can go for comments. For post we will
[01:52:04] go for posts. For videos also we will go
[01:52:07] for videos. So all these things are in
[01:52:09] plural. Why? Because a single table will
[01:52:12] contain multiple records. It will be
[01:52:15] easier for us to fetch the data with
[01:52:17] that plural name because then we will
[01:52:19] know that multiple entries are there and
[01:52:21] it is a convention to use plural things.
[01:52:23] So with this let's move to our next
[01:52:25] topic which is constraints. If we are
[01:52:27] building any application, we can have
[01:52:29] multiple users who are coming with
[01:52:31] different backgrounds, different
[01:52:33] geography and everything. So it is our
[01:52:36] responsibility to make them enter the
[01:52:38] data correctly. We will use validations
[01:52:40] in form and in database we can handle
[01:52:43] them with the use of constraints because
[01:52:45] every wrong data and every faulty data
[01:52:47] is of no use. So for that let's dive
[01:52:49] into the constraints. So the first
[01:52:51] constraint is unique. Unique basically
[01:52:54] stands for a unique value throughout the
[01:52:58] table. For example, in the user field,
[01:53:01] let's create the user table again. So
[01:53:04] this was our user table. Let's add one
[01:53:06] more column or one more attribute which
[01:53:08] is username. Now we don't want two users
[01:53:11] to share the same username. This is a
[01:53:13] common thing which we can see on
[01:53:14] Instagram also. If you are trying to
[01:53:16] create a new username and if that
[01:53:18] username is already taken you may get
[01:53:20] some suggestions with some extra
[01:53:22] characters or you can change the name
[01:53:24] entirely. Similarly for Gmail also if
[01:53:27] the username is taken they suggest you
[01:53:29] some more usernames with the extra
[01:53:31] characters. So that means we can say
[01:53:33] that the username is unique. Every user
[01:53:36] will have their unique usernames. So in
[01:53:38] order to maintain that username
[01:53:39] uniqueness what we will do either while
[01:53:42] creating the table or while adding the
[01:53:44] username field like we did what we do we
[01:53:47] add the constraint unique to that
[01:53:49] particular username. So that when any
[01:53:52] user comes to this entry and if they
[01:53:55] write ABC no other user can write ABC.
[01:53:59] If they want to use the same username
[01:54:01] again they will not be added into our
[01:54:04] databases. Why? because this username
[01:54:06] field is unique. The next constraint is
[01:54:10] not null. So not null basically
[01:54:11] represent a value which can't be null.
[01:54:14] Null is the default value for any
[01:54:16] entity. Right? So whenever we want a
[01:54:19] field to have a particular value either
[01:54:22] given by a system, our server or given
[01:54:25] by our user, we want to have that value.
[01:54:28] So we can't have null in that. If we see
[01:54:30] in users table the first name can easily
[01:54:33] come under the not null category. So we
[01:54:35] don't want our first name to be null
[01:54:37] because we are going to address our user
[01:54:39] with their first name. So this is a
[01:54:41] required field. The next constraint is
[01:54:43] primary key. So our primary key acts as
[01:54:46] a unique identifier for that particular
[01:54:48] entity. In our whole user table, there
[01:54:51] is no record which can share that
[01:54:54] particular value. So if we find any
[01:54:56] record with ID, let's say ID is equal to
[01:54:59] three. So only one record will come out
[01:55:01] of this. Okay, it can't give two records
[01:55:04] because the ID cannot be shared between
[01:55:06] two records. So it will give a unique
[01:55:09] record out of our users table. So our
[01:55:11] primary key basically helps us to track
[01:55:14] down to that particular record and also
[01:55:16] it helps us when we deal with multiple
[01:55:18] tables because there we might need some
[01:55:21] ID to put into some other table as a
[01:55:24] foreign key. So in that concept also
[01:55:26] primary key is used with this we can
[01:55:29] have a fourth option here which is
[01:55:31] check. Check is basically used in order
[01:55:34] to maintain the authenticity of any
[01:55:36] record. Let's say we are using a
[01:55:38] password. So while creating a password
[01:55:41] or while having a password we might want
[01:55:43] our user to use certain constraints like
[01:55:46] the length should be greater than 8 or
[01:55:49] maybe it should have any numeric values
[01:55:52] or it can have one or two special
[01:55:54] characters also. So all these rules
[01:55:57] which we apply are applied in the DB for
[01:56:00] that particular column through the check
[01:56:02] constraint. Also the other example of
[01:56:05] this can be a mobile number or a phone
[01:56:08] number. So a phone number will only
[01:56:11] contain numeric values. It can't have
[01:56:13] any characters apart from that. So this
[01:56:16] is also a check which we can apply for
[01:56:18] our phone number field. Also the checks
[01:56:21] can be applied to any field. Let's say
[01:56:23] for first name we can't have any name
[01:56:25] whose length is less than maybe two
[01:56:28] because a b c d this can't be stored as
[01:56:31] a name. The shortest name I know is
[01:56:34] right. It is also two characters long.
[01:56:37] So we want to have that check. So all
[01:56:39] the checks are covered with the check
[01:56:41] constraint. Now with this let's move to
[01:56:44] the other constraint which is foreign
[01:56:46] key. So let's understand foreign key
[01:56:48] through an example. Let's say we are
[01:56:50] creating a blog site where we have users
[01:56:52] table again. So the users table is
[01:56:55] basically the author's table or let me
[01:56:58] rename it to author then. So this
[01:57:00] contains the list of all the authors who
[01:57:02] are going to publish some or the other
[01:57:04] blogs. So there we have this ID and then
[01:57:07] from this ID let's say we only have two
[01:57:10] fields first name and last name. We can
[01:57:13] have multiple fields if you want. For
[01:57:16] the sake of this example I'm creating
[01:57:17] this smaller. So let's say we have one
[01:57:20] and the author is Agarwal.
[01:57:24] Let's say I have two authors. Okay. Now
[01:57:27] these two authors are not going to write
[01:57:29] only single post. They are going to
[01:57:31] write multiple posts. So we will have to
[01:57:34] create a separate table for posts and in
[01:57:36] that post we will have some id. I'll
[01:57:39] have data or maybe content is the better
[01:57:42] word. So I'll change the name data to
[01:57:44] content and that content is provided by
[01:57:48] some or the other author. So here we
[01:57:50] will have author ID also. So now let's
[01:57:52] say our post first post have some data
[01:57:56] about HTML and who wrote that post maybe
[01:57:59] ash. So for ash I'm not going to write
[01:58:02] the entire details about the author
[01:58:05] again into this table. So for that what
[01:58:07] I will use I'll use the common
[01:58:09] identifier which is our ID. So our ID is
[01:58:12] our primary key here and which will be
[01:58:14] used as the foreign key here. So this is
[01:58:17] our foreign key and we will simply write
[01:58:19] one. With this particular information we
[01:58:21] are going to get that okay this author
[01:58:24] ID is one that means it is written by a.
[01:58:27] Similarly, if we have multiple fields
[01:58:29] like this, let's say post two is on AI
[01:58:33] maybe and it is created by Gorov. So, we
[01:58:37] don't have to write the entire fields or
[01:58:39] entire information about Gorov. Only the
[01:58:41] primary key will do. So, from this two
[01:58:45] we are going to again recognize that it
[01:58:47] is written by our second author who is
[01:58:49] Goro. So, this is the role of our
[01:58:51] foreign key to establish the connections
[01:58:54] between two entities. With this we also
[01:58:56] have a next constraint which is default.
[01:58:59] So default basically stands for the area
[01:59:02] or the field where we can't have null.
[01:59:05] So null is not an option and we don't
[01:59:08] want our user also to have that entry as
[01:59:10] a mandatory field. We can fill in for
[01:59:13] them. Let's say we are building anything
[01:59:15] for subscription and if user have not
[01:59:18] paid anything to get our subscription
[01:59:20] they might be having free as the value
[01:59:23] because they are currently using our
[01:59:25] free subscription. So this is one case
[01:59:27] the other case can be let's say you are
[01:59:30] into our learn.talesco.com
[01:59:32] right so this is our LMS and we are
[01:59:34] creating them. So in this every new user
[01:59:37] or the more number of users are going to
[01:59:40] be students only and only few users are
[01:59:43] going to be managers or trainers or
[01:59:46] maybe admin. So those are few categories
[01:59:49] and most of them are going to be
[01:59:51] students. So the default value of role
[01:59:55] for every user here is student.
[01:59:58] Student/arner.
[02:00:00] So either student or learner we can have
[02:00:02] as a default role and with time let's
[02:00:04] say one or the other student or learner
[02:00:06] got hired into telescope only to
[02:00:08] maintain the nodes or maybe to teach
[02:00:11] then we will update their role to
[02:00:14] trainer. So this is how the system works
[02:00:16] with default. So these are all the
[02:00:18] constraints which we have in our
[02:00:20] databases. Now comes the next part of
[02:00:22] our relational databases. One of the
[02:00:24] most important part is join. Join is
[02:00:27] basically used to associate two tables.
[02:00:30] That means to manage relationships
[02:00:32] between multiple tables. And why do we
[02:00:34] do that? To basically maintain
[02:00:36] relationships between different
[02:00:37] entities. So let's see how many joins
[02:00:40] options do we have. The first and the
[02:00:43] most common join option is one to many.
[02:00:46] So we have a users table. We have ID
[02:00:49] here and we have fname only. Again I'm
[02:00:53] going to use the same entry 1 and two.
[02:00:55] And here I can write any name. So here
[02:00:58] are the two names A and Gorov. Two
[02:01:00] entries basically for this users table.
[02:01:02] And again we are creating a blog site.
[02:01:04] So that means both AI can write multiple
[02:01:08] blogs and Gorav can also write multiple
[02:01:10] blogs. So we will create another table
[02:01:13] to maintain our blogs which will have ID
[02:01:17] the content and the author ID. So maybe
[02:01:20] the first blog which is on HTML again is
[02:01:24] written by Aksha. The second blog is on
[02:01:27] AI which is written by Gorov and then
[02:01:29] there is third blog which is on system
[02:01:32] design which is created by AA. So here
[02:01:35] we have one to many relationships
[02:01:38] because for a single record here we have
[02:01:41] multiple options or multiple rows
[02:01:43] associated with that particular row. So
[02:01:45] this is one to many relationship with
[02:01:47] this. If we reverse this, we can also
[02:01:49] have many to one relationship. So what
[02:01:52] we will do here we were talking about
[02:01:54] users to blogs relationship and here we
[02:01:57] are talking about blogs relationship
[02:01:59] with users. So here we can safely say
[02:02:02] that multiple blogs are associated with
[02:02:05] the same user. So here we can have
[02:02:07] multiple blogs associated with the
[02:02:10] single user. So this is many to one
[02:02:13] relationship. Now let's move forward for
[02:02:15] our third relationship which is many to
[02:02:18] many. So in order to understand many to
[02:02:20] many let's again go to our LMS. So in
[02:02:22] LMS we can have students and we have
[02:02:26] courses here right. Students also we
[02:02:28] have ID maybe and only F name is here
[02:02:32] right now and in course we have ID and
[02:02:35] then we can have the course name here.
[02:02:38] Now let's fill in some entries here. So
[02:02:41] here we have students as Axia and Gorav
[02:02:43] and our courses are master Java, master
[02:02:46] AI. Now AIA as a student can enroll into
[02:02:49] multiple courses. So we can sense that
[02:02:52] from students we can have multiple
[02:02:55] relationship for courses and also one
[02:02:59] course can have multiple students and it
[02:03:02] is also possible that in master Java we
[02:03:05] have both aa and goro. So that means our
[02:03:08] students can enroll into same course. So
[02:03:12] whenever we see a situation like this
[02:03:15] where we can have many students or many
[02:03:17] records from single table associated
[02:03:20] with the single record of another table
[02:03:22] and vice versa is also true. We are
[02:03:24] going to get a many to many
[02:03:26] relationship. So in order to maintain
[02:03:28] multiple relationships we have to have a
[02:03:31] junction table in between. So this is
[02:03:33] our students courses table and here we
[02:03:37] will have a unique ID of this particular
[02:03:40] record. Maybe this is required, maybe
[02:03:43] this is not based on your queries and
[02:03:45] use cases. Here we will have students ID
[02:03:49] and here we will have course ID. And now
[02:03:52] while entering the data we can simply
[02:03:53] say the record one we have AIA enrolled
[02:03:57] in master Java. Now record number two we
[02:04:00] have Akia again enrolled in master AI.
[02:04:04] Then for the third record we have Gorav
[02:04:06] enrolled in master Java. And the fourth
[02:04:09] record Gorov enrolled in master AI as
[02:04:11] well. So with this junction table we are
[02:04:14] going to figure out how many students
[02:04:16] are enrolled in how many courses and how
[02:04:19] many courses have how many students. I
[02:04:22] hope this makes sense. This is a little
[02:04:24] confusing if you are starting but this
[02:04:26] is how we maintain many to many
[02:04:28] relationships. With this we can have one
[02:04:30] more relationship which is one to one.
[02:04:34] Suppose we are building a platform like
[02:04:36] YouTube or blog side which also have
[02:04:39] podcast which also have maybe video
[02:04:43] section. So we have three kind of
[02:04:45] content right. The first content is text
[02:04:48] for blogs. The second content is audio
[02:04:51] and the third kind of content can be
[02:04:54] video. Now the processing of all these
[02:04:56] contents are different. We can handle
[02:04:58] these multiple options by two ways.
[02:05:01] Either create a common table named as
[02:05:05] contents. So in content now we have
[02:05:07] three types. For video we are going to
[02:05:09] store MP4. For audio we are going to
[02:05:12] store MP3 maybe. And for text we are
[02:05:15] going to use the text which is there in
[02:05:17] database. We can use where long text
[02:05:19] short text maybe text. Now there are
[02:05:21] three kind of content. We can basically
[02:05:24] divide them by using a field which is
[02:05:27] type. So in type we will have options
[02:05:30] like text, audio or video. So here the
[02:05:33] first record can be on again HTML which
[02:05:36] is a block type text type. So we will
[02:05:39] type one here or text directly here. For
[02:05:41] the next content it can be anything.
[02:05:44] Let's say the content is on improve
[02:05:46] focus and in order to make that content
[02:05:48] we don't have a video. So we have
[02:05:50] something like audio here and for the
[02:05:53] third thing we have any video let's say
[02:05:56] um system design and for this video we
[02:06:00] have the type as video. Now if you have
[02:06:02] worked into systems with these type of
[02:06:04] content the processing of each type is
[02:06:07] very different and if we curate all
[02:06:09] these data into a single table it is
[02:06:12] going to be a really heavy one. Now what
[02:06:14] are the drawbacks of having a heavy
[02:06:16] table that is whenever we are trying to
[02:06:18] filter we have to basically filter
[02:06:20] through each and every content type and
[02:06:22] each and every record as well. So
[02:06:25] instead of having all these kind of data
[02:06:28] into single table, what we can do is we
[02:06:30] can segregate the data already into
[02:06:32] multiple tables and have those ids as a
[02:06:35] foreign key here. So the other approach
[02:06:38] is we will create a simple contents
[02:06:41] table where we will have ID here again
[02:06:44] and maybe the content name and then we
[02:06:48] will not have the entire video or audio.
[02:06:51] What we will have? we will have the ID
[02:06:53] of that particular content. So that
[02:06:55] means we are going to create multiple
[02:06:57] tables. One for videos and one for
[02:07:00] audios and one for maybe blogs. They all
[02:07:04] will have a common ID. With common ID I
[02:07:07] mean their primary key. And we will use
[02:07:10] the ID from videos, from audios and from
[02:07:13] blogs into this particular table. So we
[02:07:16] will not have all the data here. Here we
[02:07:19] will only have content ID maybe. And
[02:07:21] with this we can also have content type.
[02:07:24] So this type will determine where we
[02:07:26] need to follow. So this content table
[02:07:28] will only contain all the fields which
[02:07:31] user can search. They can search for
[02:07:32] name, they can search for type, they can
[02:07:35] search for maybe some keywords, some
[02:07:37] slugs. So all these details will be
[02:07:40] there in our content field and the
[02:07:42] actual data the actual content will not
[02:07:44] be in the contents field but in their
[02:07:46] respective tables. So all the blogs will
[02:07:50] contain all the blogs. All the audios
[02:07:52] will contain all the audio files. All
[02:07:54] the videos will contain all the video
[02:07:56] files. So now if we have one and type as
[02:08:00] video, we know that one is going to
[02:08:03] fetch some data from this videos table
[02:08:06] where the ID is equal to 1. So this is
[02:08:11] one to one relationship where we know
[02:08:14] that we are using a different entity to
[02:08:18] our entity and the relation between us
[02:08:20] is one to one. Whenever we write one
[02:08:22] here we are not going to fetch any other
[02:08:25] data and also we are not going to use
[02:08:28] the one again in this table. So this is
[02:08:31] one to one relationship. So we have
[02:08:32] understood that in relational DB we have
[02:08:36] entities right and we join multiple
[02:08:38] entities through relations that means
[02:08:41] every entity will have particular set of
[02:08:44] properties and then they will be joined
[02:08:46] and we will get the data accordingly.
[02:08:48] Let's understand the same thing with the
[02:08:50] example of posts and commands. So
[02:08:52] suppose we are building a blog site and
[02:08:55] in blog site we have some post and then
[02:08:58] we have some comments. The post table
[02:09:01] will have some ID, unique identifier,
[02:09:03] then some content associated with the
[02:09:06] post. Now content can be anything,
[02:09:08] right? It can be images, it can again be
[02:09:12] text or sometimes it can be video also.
[02:09:15] So these all are the category of post.
[02:09:17] Now we have different type of posts but
[02:09:20] we have to somehow pass those ids and
[02:09:24] manage three tables for image, text and
[02:09:28] videos. We can manage them in the same
[02:09:30] table as well but that will increase our
[02:09:32] latency because different kind of
[02:09:34] formats are curated into a single table
[02:09:37] that will increase the size right with
[02:09:40] content we can also have content type
[02:09:42] through which we will basically apply
[02:09:43] some filters if we want to. Now we talk
[02:09:46] about it we already have four tables one
[02:09:49] for images, one for videos, one for text
[02:09:53] and one for content. Now we will have
[02:09:55] comments as well. So in order to have
[02:09:57] comments we will have some comment id
[02:09:59] and then we will have comment. Now
[02:10:01] comment can also be a subcomment of a
[02:10:04] parent command. So that means we can
[02:10:06] have a parent kind of comment ID as
[02:10:09] well. Now in order to handle comments we
[02:10:11] have to handle users also. Now in order
[02:10:13] to handle user we need one more table.
[02:10:16] We will have ID maybe name here. So our
[02:10:19] number again got increased to six. Now
[02:10:22] in with this P id we will also have user
[02:10:24] ID who is commenting on our post. So in
[02:10:28] order to maintain a simple post and
[02:10:31] comment section we will have to have
[02:10:34] four to five to six tables right and
[02:10:37] then we have to maintain the
[02:10:38] relationships as well. So that means
[02:10:41] even for a small block side we will have
[02:10:43] to maintain so much data and when the
[02:10:45] size of the blocks increase with that I
[02:10:48] mean this will get hard to scale. Now
[02:10:51] why I'm saying it is hard to scale?
[02:10:53] First understand how can we scale any
[02:10:56] database. We have two options only.
[02:10:57] Right? First is by scaling them
[02:11:00] vertically and the second option is by
[02:11:02] scaling them horizontally. In vertical
[02:11:05] scaling what do we do? We add the
[02:11:07] capacity to a single server. So that
[02:11:10] means if we are using 4GB data we will
[02:11:12] add more space into our server to have
[02:11:15] more data. We can only expand this kind
[02:11:19] of vertical scaling to a extent. After
[02:11:22] that we will have to use horizontal
[02:11:25] scaling. That means having different
[02:11:26] servers across different places. So in
[02:11:30] this case we will have to maintain
[02:11:32] relationships between the different
[02:11:33] entities in all of these databases and
[02:11:38] this will be a tedious task. So in order
[02:11:40] to avoid this we can use no SQL. So we
[02:11:43] can say the first advantage of using
[02:11:46] NoSQL databases is it is easy to scale
[02:11:49] both vertically and horizontally because
[02:11:53] we will have to maintain a single
[02:11:54] document and we can replicate it on
[02:11:57] different servers or even split them
[02:11:59] into different partitions and pass it to
[02:12:02] different servers. We will understand
[02:12:04] about that also in a bit. Now what is
[02:12:06] the next issue? The next issue is if we
[02:12:10] are maintaining a table, we can't change
[02:12:13] the table again and again. We have some
[02:12:16] fixed columns, right? We have some fixed
[02:12:19] attributes or columns. We can't add or
[02:12:22] remove different column types in order
[02:12:25] to maintain different kind of data. Now,
[02:12:27] let's say we are going to handle the
[02:12:29] block site. But this time we are going
[02:12:31] for NoSQL database. In this what we can
[02:12:34] do now we can create again an content
[02:12:37] entity and we can basically use any kind
[02:12:40] of content which we want. So we will
[02:12:42] create the first object and maybe we
[02:12:45] will write something. Let's say user ID
[02:12:47] is one. Then we will write the content
[02:12:50] here. The content is an image. So let me
[02:12:52] pass some URL https maybe something
[02:12:56] something dot jpg. Now when we are
[02:12:59] adding next content let's we can add it
[02:13:01] directly into the same content document.
[02:13:04] So what we will do we will again use
[02:13:06] some user ID maybe this time it is two
[02:13:09] and in form of content now we have some
[02:13:12] textual data and we can have some text
[02:13:15] also if you want to use it in a more
[02:13:17] refined way if you want to add some rows
[02:13:20] we can use that right we can use user ID
[02:13:23] as three then maybe heading as anything
[02:13:27] let's say Java and then maybe we can
[02:13:29] have some description this is
[02:13:32] description and like this we can have as
[02:13:35] many fields as we want. So that means in
[02:13:38] a single entity content we can have
[02:13:41] different fields and also we can have
[02:13:43] different number of fields in the same
[02:13:46] document and if we go about relational
[02:13:49] database we can't do that there right so
[02:13:51] in these kind of scenarios where the
[02:13:53] document structure is not fixed this is
[02:13:55] basically called schemalless we need to
[02:13:58] go for nosql options because in SQL we
[02:14:00] don't have this option so that comes to
[02:14:03] our second advantage of using nosql that
[02:14:06] is we can handle schemalessless objects
[02:14:09] as well. So now let's discuss about
[02:14:11] third point. So in NoSQL up to now we
[02:14:14] have seen it is easy to scale then it is
[02:14:17] schemaless and what makes NoSQL more
[02:14:21] feasible is when we don't have to handle
[02:14:24] a lot of linking between different
[02:14:27] entities that is we don't have to
[02:14:29] maintain a lot of relationships between
[02:14:30] different entities and also every entity
[02:14:33] in a NoSQL database stands on its own.
[02:14:36] Think of this as a key value pairs.
[02:14:38] Let's say a course ID. ID is the key
[02:14:42] here. And in the course content we can
[02:14:45] have anything. We can have only name or
[02:14:49] we can have entire object or in third
[02:14:52] place we can have entire course with
[02:14:55] lesson. Of course, there are going to be
[02:14:57] nested lessons in a course structure.
[02:15:00] Again with lessons in fourth place, we
[02:15:02] can have course which will contain some
[02:15:04] lessons as a nested object. And those
[02:15:06] lessons can also contain some comments.
[02:15:09] Now all these things are possible in
[02:15:11] NoSQL which were not there in SQL. If we
[02:15:14] want to have similar structure in SQL,
[02:15:16] we have to maintain different entities
[02:15:18] and we have to maintain different
[02:15:19] relationships between them. Here we
[02:15:21] don't have that struggle. So that makes
[02:15:23] our NoSQL work easy. So this is why we
[02:15:26] use NoSQL over SQL and with time it is
[02:15:29] gaining popularity. For example, in
[02:15:31] Netflix, we use Apache Cassandra in
[02:15:34] order to maintain user activities. In
[02:15:36] Amazon, they use Dynamo DB in order to
[02:15:38] scale their application. In Facebook or
[02:15:41] Meta, they use edgebase in order to
[02:15:43] maintain user messaging and large scale
[02:15:46] storage. In Uber, they use MongoDB in
[02:15:48] order to handle flexible and real-time
[02:15:50] data. And with that, Twitter or X use
[02:15:53] Reddish for caching and timeline
[02:15:56] purposes. So the conclusion is that
[02:15:58] NoSQL is also being used in variety of
[02:16:01] systems nowadays. Let's distinguish it
[02:16:04] for a bit now. So when we should go for
[02:16:07] SQL and when we should go for NoSQL.
[02:16:10] Whenever we are handling payments, we
[02:16:13] don't have so much variety is there. So
[02:16:15] payments can be easily managed through
[02:16:17] SQL. So with payments we can also think
[02:16:20] about transactions or any other feature
[02:16:23] which needs consistency where the data
[02:16:25] is not changing the schema is not
[02:16:27] changing and also we need to handle
[02:16:30] those relationships perfectly in all
[02:16:32] those areas where we need consistency we
[02:16:35] can easily pick SQL. Now when do we pick
[02:16:38] NoSQL? When we are talking about scaling
[02:16:41] and also we can talk about speed because
[02:16:44] as in NoSQL we have a single document to
[02:16:47] search from whether in SQL we have
[02:16:49] different entities or tables who are
[02:16:51] joined through one or more
[02:16:52] relationships. So we have to traverse
[02:16:54] multiple tables in a SQL database and in
[02:16:57] NoSQL we don't have to do that. So by
[02:16:59] that nature the speed of NoSQL database
[02:17:02] is faster than the speed of SQL 1. And
[02:17:05] also one of the core reasons to use
[02:17:07] NoSQL is unstructured data. So in other
[02:17:10] words, whenever the consistency is on
[02:17:13] more priority than availability, we can
[02:17:16] easily pick SQL. And when availability
[02:17:19] and scalability is on more priority than
[02:17:22] strict consistency, we can choose NoSQL.
[02:17:25] With this, I hope you all get why we use
[02:17:28] NoSQL databases also with SQL and in
[02:17:31] what areas will we pick SQL over NoSQL
[02:17:34] and vice versa. Now that we have
[02:17:36] understood what NoSQL database is and
[02:17:38] why do we use that, let's see some
[02:17:40] examples and application areas of NoSQL
[02:17:43] database. Now the thing is in SQL we
[02:17:46] have only considered all the databases
[02:17:49] which will have tables similar
[02:17:51] relationships and in NoSQL there can be
[02:17:54] various ways in which we can store data
[02:17:56] because it is like saying Java and no
[02:17:59] Java. In Java we have Java and in no
[02:18:02] Java we can have many applications right
[02:18:04] so like that let's start by our first
[02:18:07] example which is key value pair. Now if
[02:18:11] you are a developer or developing front
[02:18:13] end, back end or anything you must have
[02:18:15] used cache. We use the format of key and
[02:18:18] value. Whenever we are trying to insert
[02:18:20] some value in cach or maybe cookies or
[02:18:23] in data storage, we use this kind of
[02:18:25] data. So if we talk about key, the only
[02:18:28] feature which a key should have is that
[02:18:31] a key should be unique. And for value,
[02:18:33] we can use any kind of value. We can use
[02:18:36] basically JSON or a string or maybe a
[02:18:41] number. Maybe if you want to add blob,
[02:18:44] we can use that. We can also store it as
[02:18:48] byte array or any array for that matter.
[02:18:51] We can also obviously have objects as
[02:18:53] well. And we can also have the
[02:18:55] combinations of them like a list of
[02:18:57] object can be stored in an array or an
[02:19:00] object can also have nested objects. And
[02:19:02] with that obviously it will be having
[02:19:04] some strings, numbers, blob, byte array
[02:19:07] or any of that values. Now the two
[02:19:10] important points here are we don't have
[02:19:13] to follow any structure because the
[02:19:15] NoSQL database follows schemaless
[02:19:18] structure. So we don't have to follow
[02:19:21] any structure with that. We also don't
[02:19:24] have to maintain any relationships.
[02:19:26] Suppose if you want to add post and
[02:19:28] comments we can simply use any key.
[02:19:31] Let's say post is the key here. Post one
[02:19:33] maybe. And in order to have that object,
[02:19:36] we can have any id post id or any
[02:19:40] content. So these all things are key
[02:19:42] basically of this object. Post id can be
[02:19:45] a number. Post content can be anything.
[02:19:48] And with that we can have comments and
[02:19:51] we can have array of objects in
[02:19:54] comments. We can have multiple comments
[02:19:56] field also. Let's say it can have a
[02:19:59] comment id and the actual content of the
[02:20:02] command like this. It can have multiple
[02:20:04] objects and this all can be done without
[02:20:07] any relationships. So this is a good
[02:20:09] example of key value pair which we
[02:20:11] normally use in our cach a cookies or
[02:20:13] any other places where we don't need to
[02:20:15] maintain any structure. Now let's move
[02:20:17] to the second one columnal DB. So the
[02:20:19] thing is whenever we are having any
[02:20:21] table let's say we have student table
[02:20:23] which have typical ID a unique
[02:20:26] identifier the name and then the marks
[02:20:29] maybe total marks of all the students so
[02:20:32] ID is one name is Aka and marks is maybe
[02:20:36] 90 with that let's have one more record
[02:20:39] the ID is two name is Goro and the marks
[02:20:43] maybe is 95 now what we have to do is we
[02:20:46] have to get the average marks of class.
[02:20:50] So the students is basically maintaining
[02:20:52] a class we are assuming that and all the
[02:20:54] marks if we sum them we will get the
[02:20:56] total marks and if we divide them with
[02:20:58] the total number of students we'll get
[02:20:59] the aggregated marks. Now in order to do
[02:21:02] that if we do it in a SQL manner the SQL
[02:21:04] manner basically reads the data from
[02:21:07] left to right. So even if we don't
[02:21:10] require any name in our data we have to
[02:21:14] still read our table from left to right
[02:21:16] for each and every row. This is a heavy
[02:21:18] task right because we don't need those
[02:21:20] values. Here we have only three columns.
[02:21:23] What if we have 17 columns then also we
[02:21:25] have to read all the rows from left to
[02:21:27] right and which is not mandatory. So in
[02:21:30] order to fix this issue we have column
[02:21:32] DV. What columnary DV does is it gives
[02:21:35] us the flexibility to read the data
[02:21:38] column-wise. So instead of reading it
[02:21:40] row-wise now we can read the data column
[02:21:43] wise. That means if we want to deal with
[02:21:46] only marks we can read only marks data
[02:21:49] column wise and then we can aggregate
[02:21:51] all the marks and if we want some other
[02:21:54] column those can be also read by column
[02:21:57] wise and how we can link them we can
[02:21:59] link them with the common ids. So the
[02:22:02] common ids will be there whenever we are
[02:22:04] reading column wise and then it will be
[02:22:06] easier and faster through our unique
[02:22:09] identifier that is id here where we are
[02:22:12] reading the data but column wise instead
[02:22:14] of row wise. The common examples of
[02:22:17] columnary DV are Google bigquery, Amazon
[02:22:20] red shift and slow bricks. So all in all
[02:22:23] if we have to read a lot of data we can
[02:22:25] go for columnary DB. So it is good for
[02:22:28] analysis and imagine writing the data
[02:22:31] into column DB that is going to take
[02:22:33] again a lot of time because we have to
[02:22:34] write also column wise. So that means we
[02:22:37] have to first maintain an ID and then
[02:22:40] the name will be written and then the
[02:22:42] marks will be written and then the other
[02:22:44] values if we have them those will be
[02:22:46] also written. So in order to read the
[02:22:48] value it is useful and when it comes to
[02:22:52] write it is going to take more time than
[02:22:54] a SQL database. The third kind of NoSQL
[02:22:57] database is graph DB. Imagine we have
[02:23:00] all seen those movies where detectives
[02:23:03] basically pinpoint many photos and join
[02:23:06] them with some thread or something
[02:23:07] right. So like this only we have graph
[02:23:11] DB where we have different nodes and
[02:23:14] they are joined by the threads which are
[02:23:16] called edge. So every edge basically
[02:23:19] represent a common relationships between
[02:23:21] two nodes. Two nodes are basically the
[02:23:24] entities and edge signifies the
[02:23:27] relationship between them. Now what is
[02:23:30] different in graph DB is both nodes and
[02:23:34] edges can have properties. Suppose we
[02:23:37] are creating any node which is student
[02:23:40] maybe and which contain all the student
[02:23:42] information. Now we have another node
[02:23:44] for course maybe and we can name the
[02:23:47] relationship anything. Maybe it is
[02:23:49] enrolled. Now the enroll can also have
[02:23:52] properties in it. It can contain year.
[02:23:54] It can contain marks. It can contain
[02:23:57] year of passing maybe and all of these
[02:24:00] things. The edge or the relationship can
[02:24:02] also have. So this is what makes our
[02:24:05] system unique. Graph DBs are often used
[02:24:07] by data scientists to find patterns
[02:24:09] between different scenarios. It works
[02:24:12] basically in the same level which we see
[02:24:14] in any detective movie as well. So if
[02:24:16] you want to work with graph DB we can
[02:24:19] learn Gremlin or we can go for sparkql
[02:24:24] also we can use cipher in order to work
[02:24:26] with graph DB. As I said it is used in
[02:24:29] huge companies whenever we are dealing
[02:24:30] with a huge amount of data in order to
[02:24:33] face some patterns or basically analyze
[02:24:36] the customer behavior on our site. So as
[02:24:38] we can see the two entities are going to
[02:24:41] have some properties and also the
[02:24:43] relationship between them will also have
[02:24:46] some properties also two entities can
[02:24:49] have different relationships and also it
[02:24:51] can be linked via different entities as
[02:24:53] well. So student basically studies in
[02:24:56] this college we can write all the
[02:24:58] parameters of the studies edge also and
[02:25:01] college provides the course. So in this
[02:25:05] provide relationship also we can have
[02:25:07] multiple properties. So which makes our
[02:25:10] graph DB complex and also since we are
[02:25:13] dealing with multiple entities with
[02:25:15] properties and also multiple
[02:25:17] relationship with different properties
[02:25:19] it is going to be a bit slow with this.
[02:25:22] Let's move to our final and the most
[02:25:24] famous NoSQL database which is document
[02:25:28] DB. So in document DB we will have some
[02:25:31] document and in that document we can
[02:25:34] write JSON and can store data with any
[02:25:37] length. We don't have to follow any
[02:25:38] structure. We don't have to follow any
[02:25:40] schema. So that is flexible in nature.
[02:25:43] Also it is schemalas. So similarly
[02:25:46] document DB also don't have to follow
[02:25:48] any relationship. At this point if we
[02:25:50] think about this the GraphQL is kind of
[02:25:52] an exception or the borderline there
[02:25:54] because we do have relationships between
[02:25:57] them and with relationships we also have
[02:26:00] properties of those relationships which
[02:26:02] makes it entirely unique and different
[02:26:04] from NoSQL and SQL both but on a large
[02:26:06] level it comes under the category of
[02:26:08] NoSQL only. The common examples of
[02:26:10] document DB is couch DB and also MongoDB
[02:26:14] is widely used. So that is also an
[02:26:16] example of our document DB only. Our
[02:26:19] document DB is highly used in logging
[02:26:22] the systems because we need flexible log
[02:26:24] structures. So it is highly used in
[02:26:26] logging logging the error maybe logging
[02:26:28] the warn messages logging any kind of
[02:26:30] stuff also. It can be used to handle
[02:26:33] profile section because the profile
[02:26:35] section can also contain different
[02:26:37] values for different users. Suppose some
[02:26:40] have given all the values, some have
[02:26:41] given less values. So that can be easily
[02:26:43] maintained through profile and with that
[02:26:45] if we talk about content like content on
[02:26:48] any application let's say Instagram we
[02:26:52] have different kind of content we can
[02:26:53] have image we can have video or we can
[02:26:57] have some text if we talk about Facebook
[02:27:00] here now these different kind of posts
[02:27:02] or content don't have to go to different
[02:27:05] tables in document DB we can basically
[02:27:08] create a single document and curate all
[02:27:11] of these content into the same document
[02:27:14] obviously with different attributes and
[02:27:16] values. So again as it is a NoSQL DB it
[02:27:19] is going to be complex and the retrieval
[02:27:21] of any information will be faster easily
[02:27:23] any NoSQL databases can be used for any
[02:27:26] kind of analysis. So this is all about
[02:27:28] the types of NoSQL databases. After
[02:27:31] understanding about databases one thing
[02:27:33] is very sure that each and every
[02:27:35] important information needs to be stored
[02:27:37] in databases and will be retrieved from
[02:27:39] there itself. That means if we have any
[02:27:42] user here who is trying to access let's
[02:27:45] say tlesco.com only from their mobile
[02:27:48] application the request eventually go to
[02:27:51] our back end and from back end if we are
[02:27:54] showing an information it will be
[02:27:56] retrieved from the database and will be
[02:27:59] shown to our user. Now the thing is for
[02:28:02] every information we need to hit our
[02:28:04] database. So even if we have a homepage
[02:28:08] which have let's say three most popular
[02:28:11] courses aligned like this. This is our
[02:28:13] course one, course two and course three.
[02:28:16] Maybe the details of each course are
[02:28:19] visible. One a thumbnail is visible.
[02:28:22] Then with that the name is visible.
[02:28:24] Maybe the price is also visible. And
[02:28:28] with price the discounted price is also
[02:28:32] visible also. Let's say we are showing
[02:28:34] some of the important sections. So yeah,
[02:28:37] these are all the details of every
[02:28:40] course which is visible on our homepage.
[02:28:43] Now this maybe is coming from any DNS
[02:28:46] because that's where we are saving any
[02:28:48] static files. Remember the name will be
[02:28:51] stored in a table. Let's say the table
[02:28:53] name is course or courses. For price, we
[02:28:57] may have the prices in the courses table
[02:28:59] itself. But according to area, according
[02:29:02] to the currency, the price keeps on
[02:29:04] changing. So we will create a separate
[02:29:07] tables for prices. So the price is
[02:29:10] coming from price. Then the discount
[02:29:12] price also based on the locality. So
[02:29:15] these both details are coming from the
[02:29:16] same place. Prices table. And then the
[02:29:19] important section. Important section may
[02:29:21] have some criteria or some course
[02:29:23] content which we need to show. So this
[02:29:26] maybe it is coming from courses section
[02:29:28] only. But courses section normally have
[02:29:30] the course main course details and then
[02:29:33] accordingly we can have different
[02:29:35] sections. So this is maybe courses table
[02:29:37] and we can create some other table which
[02:29:40] will have all the information for
[02:29:42] courses. We can name it as course info.
[02:29:45] So here also the things are coming from
[02:29:48] course info table. So that means in
[02:29:51] order to show these three courses we are
[02:29:54] hitting 1 2 3 and four resources three
[02:29:58] tables and one DNS and that means that
[02:30:01] for every user who is trying to access
[02:30:04] our site tlesco.com it is going to hit
[02:30:07] all of these four resources again and
[02:30:09] again. So if the count increases to
[02:30:12] 10,000 maybe daily active users that
[02:30:16] means we are going to hit the database
[02:30:19] and the DNS 10,000 times for each and
[02:30:22] every user. Also don't forget that the
[02:30:25] courses are three. Maybe in future we
[02:30:28] will increase the number to six. So that
[02:30:30] means 10,000 request multiplied by six
[02:30:34] that is 60,000 requests. In short, for
[02:30:38] every view we are hitting six courses
[02:30:41] and from those six courses, we are
[02:30:43] hitting this four sections. So for every
[02:30:46] user, we are hitting 24 requests. This
[02:30:50] is totally going to break our system
[02:30:52] because 24 requests means it will add
[02:30:55] latency to our homepage. And in these
[02:30:57] fast times where nobody wants to wait
[02:30:59] for any resources, these latency are
[02:31:03] eventually going to affect our business.
[02:31:06] Also, the more the latency, the poor the
[02:31:09] performance. So this is clearly not a
[02:31:11] good sign. We can't keep hitting our
[02:31:13] databases again and again in order to
[02:31:15] fetch the same information for each
[02:31:17] user. We need some other mechanism. So
[02:31:20] this is where cachet comes into the
[02:31:22] picture. Now let's understand what cache
[02:31:25] is. Cache is nothing but a memory
[02:31:29] storage which is away from databases and
[02:31:32] it can either be in our back end or into
[02:31:35] our front end in order to load the
[02:31:37] resources faster. Now how does it work?
[02:31:39] Let's take the same example. Our user is
[02:31:42] trying to access telescope.com
[02:31:44] and is hitting back end to get the
[02:31:47] information and backend eventually is
[02:31:49] hitting database to get the information.
[02:31:51] Now once we understand that these six
[02:31:54] courses are going to be static on our
[02:31:56] homepage right so that means we don't
[02:31:58] want to fetch this information again and
[02:32:01] again from our databases. So what will
[02:32:03] we do we will eventually get that
[02:32:06] particular information and put it onto
[02:32:10] our back end either or we can also put
[02:32:13] the same information on our front-end
[02:32:16] storage as well. So when the user again
[02:32:18] comes on the less.com we don't have to
[02:32:20] hit the entire database again and again
[02:32:23] we have that information handy on our
[02:32:26] back end or front end or in both the
[02:32:28] areas. So whenever we hit our homepage
[02:32:31] again we can get those information
[02:32:33] directly through our cache which is
[02:32:35] stored either on our front end or on our
[02:32:38] back end. Here we are saying that our
[02:32:41] user is accessing mobile device maybe it
[02:32:43] is accessing our site through any web
[02:32:45] application. So there also we can handle
[02:32:48] caching. Okay. These caches which are on
[02:32:51] client side are normally referred as
[02:32:53] client side cache. And the data which we
[02:32:56] stored in backend systems are referred
[02:32:58] as server side caching. In databases
[02:33:02] also there is some mechanisms where they
[02:33:05] can also store the information ahead of
[02:33:07] time that is known as well and we can
[02:33:10] get the most requested information from
[02:33:12] this data only. We don't need to hit our
[02:33:16] database tables. Also, we can have cach
[02:33:18] A in DB as well, which is known as
[02:33:20] database cach A. Up to this point, we
[02:33:23] have understood why do we need cach A
[02:33:25] from a very high level point. Now, let's
[02:33:27] understand how can we implement the
[02:33:29] caches in the real system. In order to
[02:33:31] understand them, first we have to make
[02:33:33] sure that we know some of the terms. The
[02:33:35] first term which we need to know is cach
[02:33:38] a hit. Now, what is cach a hit? Cach a
[02:33:41] hit basically means let's say we have
[02:33:43] any request which is coming from our
[02:33:46] front end to back end. Let's say we have
[02:33:48] cach a installed here and here is our
[02:33:51] final DB. Now whenever we are hitting
[02:33:54] the request and we found the data in the
[02:33:56] cache that is known as a cach a hit
[02:33:59] scenario where the data is present in
[02:34:01] the cach and we don't need to hit our
[02:34:03] database. But if the data which we are
[02:34:06] trying to get is not in cach a and we
[02:34:08] have to hit a database that is known as
[02:34:11] cach a miss. So what is cach miss here?
[02:34:14] Cachm miss is again we are trying to
[02:34:16] access some data from our back end and
[02:34:19] we don't find the data in our cache.
[02:34:22] Instead we have to get to our database
[02:34:25] to fetch that particular data. So from
[02:34:27] where we are getting the data in cache
[02:34:29] miss we are getting it from database and
[02:34:31] from where we are getting the data in
[02:34:33] cach a hit situation we are getting it
[02:34:35] from the cache itself. So whenever we
[02:34:38] hit a cach a hit kind of situation our
[02:34:40] responses will be faster and similarly
[02:34:42] in cashm responses are going to be
[02:34:45] slower with this the next term which we
[02:34:48] need to know is TTL.
[02:34:50] TL basically means time to live. Time to
[02:34:53] live basically specifies for how long
[02:34:56] the data is going to be in the cache. In
[02:34:58] other words, we can also say after how
[02:35:01] much time our data is going to expire
[02:35:03] from cache. Up to now, I hope we have
[02:35:06] understood what cache really is. So how
[02:35:09] do we store data in cach? We store the
[02:35:12] data in cach in normally a key value
[02:35:14] form. And we get these data by using the
[02:35:17] keys obviously and by values we also
[02:35:20] have TTL with them.
[02:35:23] in order to check whether the time is
[02:35:25] expired for that particular key value
[02:35:27] pair or not. If it is expired, this key
[02:35:30] value pair will be eliminated from our
[02:35:32] cache so that it makes room for having
[02:35:35] more data. So at this point, we
[02:35:37] understand that the cach works faster
[02:35:39] than our databases. Then why don't we
[02:35:41] get all the data from our databases and
[02:35:44] put it in cach a so that every request
[02:35:47] which we make will be faster. If you
[02:35:48] understand software development, you
[02:35:50] understand that I'm asking a silly
[02:35:52] question. But if you are new, just hear
[02:35:55] me out. Now, this is those kind of
[02:35:57] question where the answer lies in the
[02:35:58] question itself. We are saying that cach
[02:36:01] is faster. Now, let's understand why it
[02:36:03] is faster because we are only collecting
[02:36:07] the information which is frequently
[02:36:10] used. Okay. Okay. So that's why the size
[02:36:12] of our cach A is way smaller than our DB
[02:36:17] because DB have all the information
[02:36:19] which our site needs. So that means the
[02:36:22] size of cach A is limited and we have to
[02:36:25] keep refreshing the data in cach A so
[02:36:28] that it performs well. Why do we need to
[02:36:30] refresh? Let's say today we have some
[02:36:33] campaign of maybe selling our most
[02:36:35] sellable course maybe Java. We are
[02:36:38] selling on TLES. We are saying mastering
[02:36:41] Java. So you can master Java. This is
[02:36:43] our most prominent course today. But
[02:36:45] tomorrow we change our focus from Java
[02:36:48] to maybe AI. Let's say most students are
[02:36:51] not interested to learn Java at that
[02:36:53] time but are interested to learn AI. At
[02:36:56] that time we have to replace the content
[02:36:58] of Java to AI so that we can get this
[02:37:02] information faster. Why it is faster?
[02:37:05] because it is easy to find something in
[02:37:08] a limited space than in the entire
[02:37:11] database. That is why cache is faster.
[02:37:14] And the second point is if let's say
[02:37:16] somehow we managed to create a large
[02:37:18] size of cache itself and we managed to
[02:37:21] save our entire database into cache in
[02:37:24] that case every search query or
[02:37:26] everything which we are trying to find
[02:37:27] is going to take a longer time into our
[02:37:30] cache itself. So it defeats the whole
[02:37:32] purpose of having a cache that is to
[02:37:34] reduce the latency and to get the
[02:37:37] performance better. So with this two
[02:37:39] points are very clear. First is the size
[02:37:42] of our cach a needs to be way smaller
[02:37:45] than the size of our DB so that we can
[02:37:48] get the responses very faster. And now
[02:37:51] that we have size constraint we need to
[02:37:53] keep updating the cache data in order to
[02:37:55] get the values which are relevant to our
[02:37:58] users. Now I think we are very sure what
[02:38:01] cache is, why the size is limited, why
[02:38:03] do we need to refresh the content again
[02:38:05] and again. Now it's time to go a bit
[02:38:08] deeper. Let's go into the strategies
[02:38:11] through which we can update the cache
[02:38:13] data. The first strategy is read through
[02:38:17] cach. As the name suggest read through
[02:38:20] cach a strategy is designed to handle
[02:38:22] the reads from the cache only, not the
[02:38:24] rights. So let me create a diagram.
[02:38:27] Let's say this is our server. Here we
[02:38:29] have our back end and our cache. And
[02:38:32] with this we have our actual database
[02:38:34] here. So read through the query suggests
[02:38:37] that every time we have a request of
[02:38:40] getting any information we are only
[02:38:43] going to read through cach. We are not
[02:38:46] going to hit database. We are only going
[02:38:49] to read the information from cach. And
[02:38:52] if and only if the data is not present
[02:38:54] in our cache, then only we will need to
[02:38:56] hit our database.
[02:38:59] Again for write we are not going to
[02:39:01] write any value in our cache. We are
[02:39:03] directly going to write our data into
[02:39:06] our database. So in order to read we are
[02:39:09] going to hit our cache and in order to
[02:39:11] write we are going to hit our databases.
[02:39:13] Here clearly we can have two cases. The
[02:39:16] first case is cach a hit. In case of
[02:39:20] cach a hit that means we are trying to
[02:39:22] get some information the back end is
[02:39:24] going to hit our cach a and cach a have
[02:39:26] that value right cach a returns that
[02:39:29] value to our backend system. So this is
[02:39:31] good. This means that we are going to
[02:39:33] have a faster retrieval. Then we have
[02:39:36] our case two for cach a miss. What
[02:39:39] happens here is our back end is again
[02:39:42] going to ask our cache whether they have
[02:39:44] the information or not. And in this case
[02:39:47] as this is cachem is that means we don't
[02:39:49] have that information into our cache. So
[02:39:51] here cache itself is going to ask to our
[02:39:54] database and fetch that particular data.
[02:39:58] So database is going to give that
[02:40:00] information to our cache and then cach a
[02:40:02] will return the data again to be. So
[02:40:05] clearly it adds a next level step to get
[02:40:08] the data from database which is going to
[02:40:11] make this request call slower. So that
[02:40:14] means whenever we are reading any data
[02:40:16] we are not going to go to database
[02:40:18] directly. Our cach a will be connecting
[02:40:21] to database and getting the value which
[02:40:23] is required for our back end. And from
[02:40:26] cache we are going to give that value
[02:40:28] again to back end in order to process
[02:40:29] it. So here if you see what we are doing
[02:40:32] we are not adding any recently added
[02:40:34] data directly to our caching. We are
[02:40:37] adding data directly to our databases
[02:40:39] and only the data which is getting
[02:40:41] retrieved from our users are going to be
[02:40:44] in our cache. Let's say from our back
[02:40:46] end we are making an order placement and
[02:40:49] that data we are not seeing that again.
[02:40:51] So that means that data is never going
[02:40:54] to come to our cache because no one is
[02:40:56] accessing that only the data which user
[02:40:59] is accessing are going to come to our
[02:41:01] cache which makes our cache always ready
[02:41:04] with the information which user wants.
[02:41:06] So this is all about RTC. Let's move to
[02:41:08] the second strategy which is WTC. WTC
[02:41:12] stands for write through cache. As in
[02:41:16] RTC the strategy is only for reading.
[02:41:18] Here this strategy is only for writing.
[02:41:21] So that means we have again our client
[02:41:24] application. Here we have our back end
[02:41:26] and our cach with our database. Now
[02:41:29] whenever we are going to write any data
[02:41:31] we are going to write it into cach a and
[02:41:34] then eventually from cach a data is
[02:41:37] going to be there into our databases. So
[02:41:39] this means whenever we are writing any
[02:41:41] data we are going to write it into our
[02:41:43] cach a first and from cach a data is
[02:41:46] going to be written into databases
[02:41:48] finally. So by doing this our cache data
[02:41:51] is always going to be updated with the
[02:41:53] latest value where it can be used it can
[02:41:56] be used if we talk about stock values
[02:41:58] where we always want to see the latest
[02:42:00] data and with this it can be used to any
[02:42:02] other application where we want to see
[02:42:04] the latest data first. With this let's
[02:42:06] move to the third strategy which is WAC.
[02:42:10] WAC basically stands for write around
[02:42:13] cach. So up to now we have only talked
[02:42:16] about either read or write. With WAC we
[02:42:19] are going to talk about read and write
[02:42:21] both into one strategy. So read around
[02:42:25] cache. So when it comes to write we are
[02:42:27] going to write the data from any query
[02:42:30] from our client. it is going to call our
[02:42:32] backend services and from back end we
[02:42:34] are directly going to write the data
[02:42:37] into our databases. No cache is in
[02:42:40] between. So that means all the rights
[02:42:42] will be directly dumped into our
[02:42:44] database and we haven't updated any
[02:42:46] cache here. So this is about right. And
[02:42:49] with read what we are doing whenever we
[02:42:52] are reading any data we are going to
[02:42:54] read it always from cach a data is there
[02:42:58] in our cach a that is a cach a hit
[02:43:01] situation then we are going to get this
[02:43:03] information directly. So this is good.
[02:43:05] If we get any cache mis kind of
[02:43:08] situation where the data is not there in
[02:43:10] our cache, the cache is going to call
[02:43:12] database and update the value in the
[02:43:14] cach a first and then we'll give the
[02:43:18] value to our back end. So this is how
[02:43:20] WAC works. You may think that it is a
[02:43:23] combination of RTC and WTC which is
[02:43:25] correct. So in RTC and WTC we are only
[02:43:29] talking about read and write
[02:43:31] respectively. But in WAC we are talking
[02:43:34] about the entire flow of data. So it is
[02:43:37] heavily used in applications like
[02:43:39] Twitter. Now it is called X. So here the
[02:43:43] scenario is we have a lot of users who
[02:43:46] are going to create tweets but we can't
[02:43:50] directly create those tweets and save
[02:43:52] them in our cache. Right? And whenever
[02:43:54] the users are trying to access any tweet
[02:43:58] at this point it is decided to keep this
[02:44:00] tweet in cache memory because now it can
[02:44:04] be used by some other users as well. So
[02:44:07] we don't decide the importance of any
[02:44:09] tweet at the time of its creation. We
[02:44:12] decide the importance at the time of
[02:44:14] reading those tweets. Right? So with WAC
[02:44:17] we also have one more strategy which is
[02:44:20] WBC. WBC basically stands for write back
[02:44:25] cache which basically means whenever we
[02:44:27] are trying to write any data it is going
[02:44:30] to be written into our cache and at this
[02:44:33] point our write operation is completed.
[02:44:35] We are going to write this data into our
[02:44:38] database but this is an async process.
[02:44:41] So that means while writing our data we
[02:44:44] don't care about consistency merge but
[02:44:46] we care about speed. We want to get the
[02:44:50] update faster. So whenever we write any
[02:44:52] data into our cache, it is going to give
[02:44:55] us the okay response maybe and after
[02:44:58] that the data will be dropped into our
[02:45:01] databases eventually. Now as this is
[02:45:04] async process, it is very possible that
[02:45:07] we may get some or other error here. So
[02:45:11] we have to handle this kind of scenario
[02:45:13] or strategy very carefully. And now
[02:45:15] let's talk about read. While reading the
[02:45:18] data again we are going to read the
[02:45:20] entire data from our cache itself.
[02:45:22] Right? That is the whole point of having
[02:45:24] a cache. So as most of our data is
[02:45:27] directly written into cach it is most
[02:45:29] likely to have the most updated values.
[02:45:32] So normally it is going to give cach a
[02:45:34] hit and if we get cach a miss kind of
[02:45:37] situation. So we are again going to call
[02:45:40] our database update our cache a and from
[02:45:43] cach a we are again going to read the
[02:45:45] value from our application. So as you
[02:45:48] can see the wac and wvc are pretty
[02:45:50] common but here we are using async to
[02:45:54] write the data that means we are trading
[02:45:57] off between speed and consistency. So
[02:46:01] even if our data is not consistent, we
[02:46:04] are making sure that the speed of
[02:46:06] application remains fast. Now WBC's are
[02:46:10] basically used where we have a high
[02:46:12] right traffic. The most common example
[02:46:15] of this can be any food delivery
[02:46:17] application. Let's say Swiggy or
[02:46:20] Zomemetto. So in Zomemetto or Swiggy
[02:46:22] kind of application what normally
[02:46:24] happens is at a particular time we may
[02:46:26] be handling multiple orders with
[02:46:29] multiple status and the status keeps on
[02:46:32] changing. So instead of saving all the
[02:46:34] data changes into our database we choose
[02:46:37] to save them into cach because we know
[02:46:40] that the status of this particular order
[02:46:43] will change very fast. So we use W here
[02:46:47] because we need to update the
[02:46:49] information fast and also the user who
[02:46:52] have created the order are also going to
[02:46:55] see the latest information through this
[02:46:56] cache only and in the back process or in
[02:47:00] the back end or async manner we are
[02:47:02] going to keep updating our databases. So
[02:47:05] this way it is going to handle million
[02:47:06] of request and status updates at a
[02:47:09] particular time. So up to now we have
[02:47:11] understood that how do we handle the
[02:47:13] data into our cache but we have only
[02:47:16] added the data we haven't deleted the
[02:47:18] data. So now let's understand the cach a
[02:47:21] eviction policies through which we are
[02:47:24] going to remove the data which is not
[02:47:26] used by our cache. Here I'm writing
[02:47:28] policies here we can easily use
[02:47:30] strategies. I just wanted to sound
[02:47:32] little different. So that's why I added
[02:47:33] policies um just for fun you may say. So
[02:47:37] the first policy basically is LRU. LRU
[02:47:42] basically stands for least recent used.
[02:47:47] So as the name suggest least recent
[02:47:50] used. That means the data which is not
[02:47:53] used recently will be evicted from our
[02:47:56] cash in. Suppose Apple launches a new
[02:48:00] iPhone which is 17 Pro Max updated
[02:48:06] something something very acronym
[02:48:07] synonyms of Pro Max ultra something and
[02:48:11] now everyone is keep looking for 17 Pro.
[02:48:14] No one is in today's time looking for
[02:48:17] 11. So that means 11 is a stale data
[02:48:20] which was used earlier by our cache
[02:48:23] maybe. But in today's time, we don't
[02:48:25] need to store that information into our
[02:48:27] cache because a very few clicks were
[02:48:30] there who were still searching for 11.
[02:48:33] Now with this, let's talk about the
[02:48:35] second policy which is Mr. the exact
[02:48:39] opposite of LRU. There we were saying
[02:48:42] least. Here we will say most recent
[02:48:45] used. So here we are going to delete the
[02:48:47] data which is most recently used. This
[02:48:50] sound a bit strange, right? Why do we
[02:48:52] delete something which is most recently
[02:48:53] used? But if you think about it, let's
[02:48:56] say you are surfing through an
[02:48:57] e-commerce application and you already
[02:49:00] apply a particular coupon. So in that
[02:49:02] case, we don't need that particular
[02:49:04] coupon into our cache, right? So we will
[02:49:07] directly remove that. Also, if you think
[02:49:09] about it, we have streaming
[02:49:11] applications. For example, let's say
[02:49:13] this YouTube only. So in YouTube's the
[02:49:16] streaming normally happens in sections.
[02:49:19] When you are watching any video, let's
[02:49:20] say you have watched the video till
[02:49:22] here. At this point, this data gets
[02:49:25] loaded and you may see a white line
[02:49:29] moving forward which denotes that the
[02:49:31] data up to that point is loaded right
[02:49:34] now. Let's say currently we are at this
[02:49:36] point and this data is already loaded.
[02:49:39] Now at this point we don't need the
[02:49:41] previous video information. This can
[02:49:43] easily be deleted from our cache at
[02:49:46] least because in this case the chances
[02:49:49] of me going back into the video is very
[02:49:52] slow. So that's where we remove the most
[02:49:54] recently used data. So I hope you are
[02:49:57] getting all the points. The next part,
[02:49:59] the next eviction policy is LFU. LFU
[02:50:03] basically stands for least frequently
[02:50:07] used. So LFU basically means the data
[02:50:09] which is not frequently used will be
[02:50:12] evicted from our cache. What does that
[02:50:15] mean? Let's say today I opened any ecom
[02:50:18] application and search for plant also I
[02:50:21] am a gadget guy. I basically purchase a
[02:50:25] lot of gadgets. So suppose I have a
[02:50:27] history of seeing any secondary screen
[02:50:31] also with that I also purchase a lot of
[02:50:34] clothes. So clothes section is also
[02:50:36] there. Now between these three I keep on
[02:50:39] seeing about the secondary screen and I
[02:50:42] keep on seeing the clothes in one or the
[02:50:44] other manner but the plant search I only
[02:50:48] did once. Maybe I saw some YouTube video
[02:50:51] or liked some plant into some Instagram
[02:50:53] story of others. Only at that time I
[02:50:56] thought of purchasing a plant and after
[02:50:59] that I didn't think about it again. So
[02:51:02] that means the plant is the least
[02:51:04] frequently used terms for my search
[02:51:06] history of that e-commerce applications.
[02:51:08] So now whenever we are going to evict
[02:51:10] any data it is going to be this. So this
[02:51:13] is another strategy where we remove the
[02:51:16] least frequently used data from our
[02:51:19] cache. After LFU we have two standard
[02:51:22] ways of handling cacher data or removing
[02:51:25] the cacher data. The first strategy is
[02:51:28] FIFO. We all know about it. FIFO
[02:51:30] basically stands for first in first out.
[02:51:33] Suppose we have assigned 180 MB to our
[02:51:36] cach A and we don't want to exceed this
[02:51:39] limit. Now whenever we are trying to add
[02:51:42] any value and and if we have reached our
[02:51:44] limit first data which we are going to
[02:51:47] remove is the first data which we
[02:51:49] entered into the cache without thinking
[02:51:51] about anything without thinking about
[02:51:52] frequency without thinking about how
[02:51:55] recently they are being used. We will
[02:51:57] simply remove the first added data from
[02:52:00] our cache. And with this we have the
[02:52:02] last eviction policy which is LEO. Leo
[02:52:05] basically stands for last in first out.
[02:52:09] You may think of a stack kind of
[02:52:10] situation here, right? Where the last
[02:52:12] object which is inserted will be evicted
[02:52:15] first. So this is how LEO works. So in
[02:52:19] this what we will do again we have 180
[02:52:21] MB memory and here we I have written
[02:52:24] bytes. Here it is bits. Don't worry
[02:52:26] about that. It doesn't matter. Now in
[02:52:29] that 180 MB memory, I don't want to
[02:52:31] store any other information. So what
[02:52:34] information will I remove? I'll remove
[02:52:36] the most recent information which I
[02:52:38] added. Okay. So maybe this information
[02:52:42] which is added first will be there for
[02:52:45] the longest time and we will keep on
[02:52:47] removing this or this or this
[02:52:50] information in order to have more space
[02:52:53] for the added information. So this is
[02:52:55] about LEO and FIFO. I have not added any
[02:52:58] application areas for LEO and FIFO both.
[02:53:01] I want you to explore this a bit and
[02:53:03] tell me in the comments and with this we
[02:53:06] have understood about caches, their
[02:53:07] eviction policies and how do we add the
[02:53:10] data into our cache. I hope you all get
[02:53:13] it. Up to now we have understood how a
[02:53:16] request basically flows through
[02:53:17] different components of our system and
[02:53:20] ultimately provide some information to
[02:53:21] our user. Right? We have seen who our
[02:53:25] customer is. They are going to interact
[02:53:27] with either some web application or
[02:53:29] maybe some mobile application
[02:53:31] from where the request will flow to a
[02:53:34] server where our backend code is and
[02:53:36] through the server we will hit some or
[02:53:39] the other database in order to retrieve
[02:53:41] that information and provide it back to
[02:53:43] the user. With this we have also
[02:53:45] discussed about DNS through which our
[02:53:48] clients are going to get the address of
[02:53:50] our server and then this cycle repeats.
[02:53:53] So this is all we know up to now. This
[02:53:56] all looks very good, works very
[02:53:57] efficiently up to a single point. Why?
[02:54:00] Because here we are using only single
[02:54:03] server and a single server can scale
[02:54:05] only up to certain limits. Suppose we
[02:54:08] are already using 128 GB of our server
[02:54:13] and somehow our processes are consuming
[02:54:16] this much resources. That means we are
[02:54:18] getting more requests than we were
[02:54:20] expecting. Maybe our app is tracking
[02:54:22] attraction now from across the globe and
[02:54:25] at that time we have no choice but to
[02:54:27] scale our system. In order to scale the
[02:54:30] system this is the first step which you
[02:54:32] can think of. So instead of having a
[02:54:35] single server, we need to have multiple
[02:54:37] servers. Let's name them server one and
[02:54:41] server two. So we have two servers. That
[02:54:43] means our client need to give the call
[02:54:46] to either server one or server two. But
[02:54:49] how our client is going to decide where
[02:54:51] to give information to. This is where we
[02:54:54] need to discuss one more component which
[02:54:55] is load balancer. Now let's make the
[02:54:58] diagram again with load balancer. Now
[02:55:00] what happens? Our client or the user is
[02:55:04] going to access the same information
[02:55:06] from any mobile application or website
[02:55:09] and they are going to hit DNS in order
[02:55:12] to get the IP address of server. Up to
[02:55:15] now things are not changing. Everything
[02:55:17] is pretty straightforward. But now our
[02:55:20] DNS is not going to give the IP address
[02:55:22] of the actual server but it is going to
[02:55:24] give the IP address of load balancer.
[02:55:27] And then the load balancer is connected
[02:55:30] to multiple servers. Suppose this is
[02:55:32] server one. This is server two. This is
[02:55:35] server three. And then the load balancer
[02:55:37] basically decides to which server our
[02:55:40] request should go to. Whether it should
[02:55:42] go to S1, S2 or S3. And if it goes to
[02:55:46] S1, S2 and S3, they are basically going
[02:55:48] to connect to a database. Maybe they are
[02:55:51] connected to same database. Or there can
[02:55:53] be a possibility that S3 is managing the
[02:55:56] data in some other database and through
[02:55:58] migration, replication or partitioning
[02:56:00] we are handling the data between those
[02:56:02] databases as well. So this is what the
[02:56:05] actual picture of a micros service
[02:56:07] applications looks like where the load
[02:56:10] balancer is going to play a huge role in
[02:56:13] order to pass those requests from client
[02:56:16] to server. Now if we talk about load
[02:56:18] balancer in brief, our load balancer
[02:56:21] mainly is going to perform two tasks.
[02:56:24] The first task is how do it give
[02:56:26] responses to the perfect server from
[02:56:29] which it can get the response faster.
[02:56:31] Right? So the first thing is choosing
[02:56:34] the server also. If we are giving the
[02:56:36] responsibility of choosing the server to
[02:56:38] load balancer that means load balancer
[02:56:40] should know how our servers are
[02:56:42] performing in the current situation so
[02:56:44] that no server will be overheated and no
[02:56:47] server will be underutilized. So the
[02:56:50] second thing which load balancers are
[02:56:52] going to do is maintaining the health
[02:56:55] checks of our server so that whenever
[02:56:58] any new request comes to load balancer
[02:57:01] they are the one who is going to decide
[02:57:03] whichever server is working in a fine
[02:57:06] condition plus can handle that request
[02:57:08] pretty well. So now let's discuss these
[02:57:11] both points one by one. So in order to
[02:57:13] choose a server we need some algorithms
[02:57:16] right. So there are various algorithms
[02:57:18] and hybrids also from which our load
[02:57:21] server decides where the request should
[02:57:24] go. So let's discuss those algorithms.
[02:57:27] The first algorithm here is roundroin.
[02:57:30] Roundrobin is the most simplistic
[02:57:32] approach in order to pick the web server
[02:57:34] for the next request. So in roundroin
[02:57:37] what do we do? Suppose this is our load
[02:57:38] balancer and we have our server one
[02:57:41] here, server two here and server three
[02:57:44] here. Load balancer is now going to pick
[02:57:47] server one for the first request. For
[02:57:50] second request, it is going to pick
[02:57:52] server two. For third request, it is
[02:57:54] going to pick server three. And where
[02:57:56] will the fourth request go? It will
[02:57:57] again go to server one. Then five for
[02:58:00] server two and six for server three. And
[02:58:03] this is how every request will keep
[02:58:05] generating and going to the next server
[02:58:07] which is in the list. So there is no
[02:58:09] much calculation needed here. We only
[02:58:11] need to know that we are following the
[02:58:13] sequence of S_sub_1, S_sub_2 and S3. And
[02:58:16] if the current request is been processed
[02:58:18] by S_sub_2, the next request is going to
[02:58:20] be on S3. This is how roundroin works.
[02:58:24] So that means roundroin send request one
[02:58:27] by one. Right? Apart from this, it
[02:58:30] doesn't check anything which makes the
[02:58:32] roundroin very easy to implement. That
[02:58:36] means if we are using round robbin
[02:58:37] algorithm each server are going to
[02:58:40] handle almost equal number of requests.
[02:58:42] So we can say the distribution of
[02:58:45] requests are equal and as in this
[02:58:48] algorithm we are not managing any state
[02:58:50] of any server. Basically we'll manage
[02:58:53] only a single counter from which we are
[02:58:56] going to decide where the next request
[02:58:58] is going to be and also we need to
[02:59:00] manage where the current request is. So
[02:59:04] with simple implementation we can easily
[02:59:06] set up round robin into a load balancer
[02:59:09] but there are some demerits to it. What
[02:59:11] if server one server 2 server 3 doesn't
[02:59:14] have equal configurations? What if the
[02:59:17] RAM configuration between them is
[02:59:19] different? What if the storage is
[02:59:22] different? What if the CPU power is
[02:59:25] different? Let's say for S1 RAM is 4 GB.
[02:59:29] For S2 it is 8 GB. For S3 it is 16 GB.
[02:59:35] Again the storage let's say for server
[02:59:38] one we are using maybe 100 GB storage.
[02:59:42] For server two we are using 200 GB
[02:59:44] storage. And for server 3 we are using
[02:59:47] 500 GB of storage. Also the CPU let's
[02:59:50] say it is 16 core, it is 32, it is 64
[02:59:53] core. So the configurations are entirely
[02:59:56] different. And what we are doing in
[02:59:57] round robin we are not checking any of
[03:00:00] these matrixes but we are simply
[03:00:03] following the next counter. So that
[03:00:05] means even if with uneven configurations
[03:00:08] the load on server one, server two and
[03:00:11] server three are going to be same and
[03:00:13] this is unfair because the server 3 may
[03:00:16] do all the task very frequently and can
[03:00:18] sit idle whereas server one will
[03:00:22] struggle to complete the task and it
[03:00:24] will be overboarded maybe heat up maybe
[03:00:26] stop working. So this is the demerits of
[03:00:29] using roundroin. Now let's jump to the
[03:00:31] second algorithm which is geo based
[03:00:34] which basically states that suppose this
[03:00:37] is our load balancer and we have our
[03:00:40] server one again and server two again
[03:00:43] this is in India and this is in US. So
[03:00:48] if the majority of users are from India
[03:00:51] and some users are from US that means
[03:00:54] they need to hit their respective
[03:00:56] servers in order to process the
[03:00:58] information. That way they will get the
[03:01:01] response faster because if I'm sitting
[03:01:04] in India and I'm requesting any
[03:01:06] information from the Indian server, it
[03:01:07] will be faster to process those
[03:01:09] information in the Indian server as well
[03:01:11] with respect to processing the same
[03:01:13] information through US servers because
[03:01:15] the connections are going to take time
[03:01:17] and which will increase the latency of
[03:01:19] the application which the user doesn't
[03:01:21] want. Right? So this is what our second
[03:01:24] algorithm implies. It is based on go
[03:01:27] addresses of the particular user. So
[03:01:30] here also we are not maintaining any
[03:01:31] matrices for server specifications. We
[03:01:34] are only maintaining two matrices. The
[03:01:37] number one matrix is where the server is
[03:01:40] and the second matrix is from where are
[03:01:42] we getting the request or we can say
[03:01:44] where the user is. Now this algorithm is
[03:01:47] used by many applications across the
[03:01:50] world whichever have the global
[03:01:52] appearance. Whenever we are trying to
[03:01:54] hit google.com or facebook.com or any
[03:01:57] other global applications, our request
[03:01:59] basically moves to the server whichever
[03:02:02] is closest to us. Maybe we are residing
[03:02:05] in this area. Here we have some server
[03:02:08] and also here we have some server. Maybe
[03:02:10] this is US server. This is Indian
[03:02:12] server. So our server needs to be
[03:02:15] situated near us so that we get the
[03:02:18] response faster and all the requests are
[03:02:20] maintained through the same server. So
[03:02:23] whenever I'm trying to access any
[03:02:24] information they are going to be
[03:02:26] addressed through the same server. So
[03:02:28] that means our session and other
[03:02:30] informations are also will be in sync
[03:02:33] for this particular user. In this
[03:02:36] algorithm there are some disadvantages
[03:02:38] as well right because now our load
[03:02:41] server needs to manage more information.
[03:02:44] Now it needs to know from where the
[03:02:46] requests are coming and it needs to know
[03:02:48] where each and every server is located.
[03:02:52] So this is a lot of information to be
[03:02:54] seen by load balancer. And now as our
[03:02:57] servers are distributed across the
[03:02:58] globe, we also need to maintain
[03:03:01] databases accordingly. So every region
[03:03:04] may have their own databases for faster
[03:03:06] retrieval. So that will include the
[03:03:08] computation power of replication and
[03:03:10] partitioning which we will be covering
[03:03:12] in further series. Also let's say if we
[03:03:16] are using Indian server or this server
[03:03:19] particularly maybe there are two servers
[03:03:21] in India this is India B server this is
[03:03:23] India A server for some reason this
[03:03:26] server breaks down then we need to
[03:03:29] reroute our request to this particular
[03:03:31] server which is again needs all the
[03:03:33] information which we are accessing
[03:03:35] through this server. That means the data
[03:03:37] or the application on which we are
[03:03:39] working on should transfer the data
[03:03:41] immediately to this server as well. Even
[03:03:44] if the server A doesn't crash then we
[03:03:46] need all the information which is being
[03:03:48] tracked by server A but this is a
[03:03:51] necessity in gobased location algorithm.
[03:03:53] Now the third point here is if any user
[03:03:56] is using VPN or other proxy servers to
[03:03:59] change their location that means VPN or
[03:04:02] proxies can mislead the traffic. With
[03:04:05] this let's move to our next algorithm
[03:04:07] which is least connection algorithm. So
[03:04:10] in this what happens is we have our load
[03:04:12] balancer in place and suppose we have
[03:04:15] two servers server one and server two
[03:04:18] and server one and server two at current
[03:04:21] times are managing multiple requests
[03:04:23] right suppose sub_1 is maintaining 30
[03:04:27] request or 30 connections at this
[03:04:29] particular time and sub_2 is maintaining
[03:04:32] 50 connections now whenever we get a new
[03:04:35] request it is going to be addressed by
[03:04:38] s_sub_1 Why? Because S1 currently is
[03:04:41] having least connections.
[03:04:43] So this is how our least connection
[03:04:45] algorithm works. Whichever server have
[03:04:48] the least connections, our next request
[03:04:50] is going to that particular server. In
[03:04:53] this algorithm also, we are not
[03:04:54] considering any of the matrices of
[03:04:57] server. We are also not maintaining any
[03:04:59] of the requests or response time. We are
[03:05:02] only maintaining the number of
[03:05:04] connections. Let's say if these 30
[03:05:07] request are heavy request and these 50
[03:05:10] are lightweight then also the next
[03:05:13] request is going to be taken care by S1
[03:05:16] which is wrong and it is going to take
[03:05:18] time but this is how our least
[03:05:20] connections work. Then why do we use
[03:05:22] this? Basically the least connection
[03:05:24] elos works very well when there are
[03:05:26] sticky sessions. Now what is sticky
[03:05:29] session? where we have to maintain a
[03:05:32] proper channel for a particular
[03:05:33] communication. Let's say we are using
[03:05:36] websockets for maintaining any kind of
[03:05:38] application. Let's say we are
[03:05:39] maintaining a chat application or a
[03:05:42] video streaming application or maybe we
[03:05:44] are handling some gaming kind of setup.
[03:05:47] In all of these cases, we needs the
[03:05:49] request and response to be faster. So we
[03:05:52] will pass our request to those servers
[03:05:55] who are having least connections
[03:05:57] currently so that we can get the
[03:06:00] response faster. Now if we talk to
[03:06:03] disadvantages, the first disadvantage is
[03:06:05] this only heavy and lightweight. Maybe
[03:06:07] these calls are for AI calls which are
[03:06:09] going to take time and these calls are
[03:06:12] basically chat calls or maybe some webtr
[03:06:15] calls or maybe some rest API calls which
[03:06:18] are lightweighted normally. So they are
[03:06:20] working faster. Then also we will send
[03:06:22] the next request to 30 until the number
[03:06:25] of connections drops from 50 to maybe
[03:06:27] 29. Then only we will consider S2. So
[03:06:30] this is how we are going to work. Now if
[03:06:32] we talk about disadvantages of least
[03:06:34] connections, the first we already
[03:06:36] discussed. The second disadvantage is
[03:06:39] that our load balancer basically needs
[03:06:41] to maintain the number of connections
[03:06:43] for each web server. So if S1 is
[03:06:46] maintaining 50 connections at that time
[03:06:49] and it give response to one of them that
[03:06:51] means currently it is maintaining 49
[03:06:53] connections it needs to be updated to
[03:06:56] load balancer. So our node balancer will
[03:07:00] keep updating the number of connections
[03:07:02] again and again which is of course a
[03:07:04] radius task. The third disadvantage is
[03:07:07] we are only considering least number of
[03:07:09] connections. What if our server one is
[03:07:12] of very low configuration than server
[03:07:14] two and it is maintaining eight
[03:07:17] connections at that time or request at
[03:07:19] that time and this is maintaining 16. It
[03:07:22] is easy for S2 to maintain 16
[03:07:24] connections or maybe 100 connections and
[03:07:26] it is hard to maintain 10 connections
[03:07:28] for S1. Then also we will send the next
[03:07:31] request to S1 because we are not
[03:07:33] checking anything apart from number of
[03:07:35] connections. So this is how our least
[03:07:38] connection algorithm is going to work.
[03:07:40] After least connections come least time.
[03:07:43] So it is our fourth algorithm least time
[03:07:47] go. Suppose load balancer is maintaining
[03:07:50] two web servers s_sub_1 and sub_2. The
[03:07:54] response time of s_ub_1 is nearly about
[03:07:59] 50 ms. The average response time
[03:08:01] basically it is handling some thousand
[03:08:03] request and for server two it is
[03:08:06] currently 10 ms. So in this scenario the
[03:08:09] next request is going to be handled by
[03:08:11] server two because the average response
[03:08:14] time of server two is lesser than the
[03:08:17] average response time of server one. Now
[03:08:19] if we talk about response time if any
[03:08:22] server is having less response time that
[03:08:24] means the configurations of those
[03:08:26] servers are high right that's why the
[03:08:29] response time is low. So this algorithm
[03:08:32] basically takes care of the actual
[03:08:33] matrices of the server by taking the
[03:08:36] response time into measure. Now the
[03:08:37] lease time algorithm is used in those
[03:08:40] applications where we can't handle more
[03:08:42] latency that can be our realtime
[03:08:44] applications like the trading app or
[03:08:47] even our search engines. In both of
[03:08:50] these areas we want the responses to be
[03:08:52] very fast and that's why we use lease
[03:08:54] time algorithms there. And now if we
[03:08:57] talk about lease time algo's
[03:08:58] disadvantage that is our load balancer
[03:09:02] needs to calculate the average response
[03:09:04] time. So with each request they are
[03:09:07] sending to server also the average
[03:09:09] response time will be calculated and
[03:09:11] based on this our load balancer needs to
[03:09:14] manage where the next request is going
[03:09:16] to be. So calculating these things can
[03:09:18] be really complex because if we are
[03:09:20] calculating average time that means we
[03:09:22] need to know number of maybe requests
[03:09:26] and also the response time of each and
[03:09:29] every response then only our load
[03:09:32] balancer is going to calculate the
[03:09:33] average response time. So this is for
[03:09:36] sure complex. Now in this scenario if
[03:09:39] our web servers maintain any kind of
[03:09:42] spike it is going to affect the
[03:09:43] calculations of our load balancer. So we
[03:09:45] need to be very careful there. Now let's
[03:09:48] talk about the fifth algorithm which is
[03:09:50] IP hash. Here as the name suggests the
[03:09:53] IP of every request is going to be
[03:09:57] processed by our load balancer and will
[03:09:59] be given a unique number and according
[03:10:02] to those numbers our servers are going
[03:10:05] to decide. Let's say our server one is
[03:10:07] maintaining the hash values from 1 to
[03:10:09] 10. So that means all the IPs which
[03:10:12] results between this range are going to
[03:10:14] be addressed by S1 and maybe from 11 to
[03:10:17] 20 are addressed by S_UB_2. So this is
[03:10:20] how a IP hash algorithm works. Every
[03:10:23] request is associated with some of the
[03:10:25] other IP. They are going to process
[03:10:27] through a hash function. And suppose the
[03:10:30] result is five. Then it is going to be
[03:10:32] addressed by S1 because S1 is
[03:10:34] maintaining 1 to 10. As we all know the
[03:10:37] IP of any user normally doesn't change.
[03:10:40] That means this user for at least one
[03:10:42] session is going to be addressed through
[03:10:44] the same server and it will help
[03:10:46] basically if we are maintaining any
[03:10:48] session data it is going to help because
[03:10:50] we don't need to replicate this data to
[03:10:51] other servers. We are only handling
[03:10:54] these request through the same server.
[03:10:56] So it is very easy. Now if the
[03:10:58] connection breaks in between the session
[03:11:01] then we are in problem. In that case,
[03:11:04] this next request will go to S2 and we
[03:11:07] need all the session data here. And if
[03:11:09] that data is not maintained, our user
[03:11:11] may need to address or add the same data
[03:11:14] again into server 2, which is a loss
[03:11:16] case, which is not recommended at all.
[03:11:18] So for this to work efficiently, our
[03:11:20] server basically needs to be healthy
[03:11:22] enough to maintain a proper session.
[03:11:25] Plus even if the session breaks due to
[03:11:27] any reason due to any server crash it is
[03:11:30] very important to replicate those data
[03:11:32] to other server as well. The major
[03:11:35] disadvantage of this is as we are
[03:11:37] basically focused on IP functions and
[03:11:40] hash functions. So scaling is
[03:11:42] challenging here. Let's say we are
[03:11:44] adding S3 here. Then we again needs to
[03:11:47] reconfigure our hash function so that it
[03:11:50] consider S3 as well. And also we need to
[03:11:53] reassign these values also. Maybe next
[03:11:56] time it is only handling 1 to 8 and
[03:11:59] maybe it is handling
[03:12:01] uh 9 to 12 maybe and this one is
[03:12:04] handling 12 to 20. So whenever any
[03:12:06] server is down or we are adding any new
[03:12:09] server basically the function will get
[03:12:11] affected and it will reassign all the
[03:12:13] values to the entire server. This is
[03:12:16] hard to scale in this manner and that's
[03:12:18] why it is not recommended for most of
[03:12:21] the microservices architecture we have
[03:12:23] today. It is basically used where the
[03:12:25] data was used in the old kind of
[03:12:28] applications where the applications were
[03:12:30] monolithic and mostly were legacy apps
[03:12:34] like in today's scenario if you want to
[03:12:36] maintain a session of a particular user
[03:12:38] we don't only stick for that particular
[03:12:40] session we use many other tools like JWT
[03:12:42] token we use right so this is how we are
[03:12:45] going to maintain an entire connection
[03:12:48] through a server and a client we don't
[03:12:50] only rely on giving the request to the
[03:12:52] same server again and Even if the server
[03:12:54] changes, it is going to recognize us
[03:12:56] through our JWT token. And this is going
[03:12:59] to work excellently with our distributed
[03:13:01] systems, microservices and also if we
[03:13:05] use radius. In all these scenarios, we
[03:13:07] now don't need IP hash functions. We
[03:13:10] don't need our request to be handled
[03:13:12] through same server. Even if the server
[03:13:15] changes, our request or our session
[03:13:17] should be consistent. Also there is
[03:13:20] another algorithm which is extension of
[03:13:22] roundrod robin which is called weighted
[03:13:24] roundrod robin. So in which the
[03:13:27] roundroin as it was discussed is working
[03:13:29] same but we added weight. So that means
[03:13:33] let's say this is s1 this is s_sub_2 and
[03:13:36] this is s3. Let's say the ram capacity
[03:13:39] of s_sub_1 is 8 GB for s_ub_2 it is 16
[03:13:43] and for s3 it is 32 GB. Now what we are
[03:13:46] doing we are adding a weight to our
[03:13:49] request. So more the configuration more
[03:13:53] is going to be the weight. So if our
[03:13:55] load balancer basically keeps track of
[03:13:58] this so it knows that the S3 may have
[03:14:01] weight three s_ub_2 may have weight two
[03:14:04] and subs may have weight one. So
[03:14:06] whenever a new request arrives at load
[03:14:09] balancer it is going to be addressed by
[03:14:12] the one which have the most weight. So
[03:14:15] here the weight of S3 is maximum. So it
[03:14:17] is going to be addressed by our S3
[03:14:19] server and then based on the weight and
[03:14:22] round robin fashion our request are
[03:14:24] going to be answered. So with weighted
[03:14:26] round robin algorithm also added in the
[03:14:28] list we have now covered all the
[03:14:30] algorithms major algorithms basically
[03:14:32] which we needs to know when we talk
[03:14:34] about load balancers also in real based
[03:14:38] no one algorithm basically works. We
[03:14:40] always work with hybrid approach and
[03:14:42] load balancer basically balances
[03:14:45] multiple algorithms. It is very possible
[03:14:48] that we are using maybe IP hash with the
[03:14:51] combination of roundroin and also other
[03:14:54] combinations are also possible. Maybe we
[03:14:56] are combining two maybe we are combining
[03:14:58] all six at the same time. Like here we
[03:15:01] were talking about least time algorithm
[03:15:04] and least connection algorithm. we can
[03:15:06] combine these two algorithms in order to
[03:15:08] get a better algorithm. So in order to
[03:15:10] fulfill our requirement, we normally
[03:15:12] don't rely on a single algorithm. We
[03:15:14] rely on multiple hybrid algorithms. So
[03:15:18] after discussing all the algorithms, we
[03:15:20] know now how the load balancer basically
[03:15:22] chooses a server for the next request.
[03:15:24] The second thing which load balancer
[03:15:26] does is doing the health checks. Let's
[03:15:29] understand how load balancer basically
[03:15:31] manages the health checks. Here the
[03:15:34] thing is we have two approaches how a
[03:15:36] load balancer can check the health
[03:15:37] checks of entire servers. Let's say we
[03:15:40] have a load balancer here again and we
[03:15:43] have server one and server two. The
[03:15:46] first way how we can check any
[03:15:48] performance is by simply seeing how
[03:15:51] server one and server two are
[03:15:52] performing. We are not adding any new
[03:15:54] request in server one or server two. We
[03:15:57] are just observing how they are
[03:15:59] responding to the actual requests. This
[03:16:01] is the passive way of checking the
[03:16:03] health. By this we don't add any new
[03:16:06] request to the servers. We don't
[03:16:07] basically increase the load of any
[03:16:10] server but we simply observe by we I
[03:16:13] mean load balancer. The load balancer
[03:16:15] simply observe how the server one is
[03:16:18] responding to request and maintain that
[03:16:21] track. And let's say at a particular
[03:16:23] point if server one breaks or stops
[03:16:25] responding at that time the load
[03:16:28] balancer knows about this by again
[03:16:30] tracking the actual request. It doesn't
[03:16:33] add any new request to server one. So
[03:16:35] this is what the passive way is. Now
[03:16:38] there is another way which is active
[03:16:40] way. In active way what a load balancer
[03:16:42] does is it adds additional requests to
[03:16:45] our servers and based on the responses
[03:16:48] on those requests it checks the actual
[03:16:51] health of the server. So these are the
[03:16:53] two ways of checking the health of
[03:16:56] servers. One by simply observing the
[03:16:59] request and second by actively adding
[03:17:01] the request to the servers. It is very
[03:17:04] important to check the health of every
[03:17:06] server. Why? because it gives us the
[03:17:08] pattern to take decisions like when to
[03:17:11] scale or when to scale down. Both of
[03:17:14] these cases are very usual by working on
[03:17:16] any application on a day-to-day basis.
[03:17:18] Let's suppose if we are maintaining our
[03:17:20] application only for India region, in
[03:17:23] that case also we know that in daytime
[03:17:25] the requests are going to be heavy.
[03:17:28] Maybe in evening time it will be heavier
[03:17:30] and in night time it is going to be
[03:17:32] little or lesser in count. So at that
[03:17:35] time we can maybe scale down our server
[03:17:37] in the nighttime in order to save some
[03:17:40] cost. So let's see what are the other
[03:17:42] parameters of health checks. The first
[03:17:44] parameter of health check is interval.
[03:17:47] This means how often do we check our
[03:17:50] server. For example, it can be maybe 5
[03:17:53] seconds. So if the case is active, every
[03:17:56] 5 seconds I'll monitor all the requests
[03:17:58] I have sent to the server and see how
[03:18:01] the performance is going. And also in
[03:18:03] the passive case we'll see the responses
[03:18:06] and calculate the matrices every 5
[03:18:08] seconds. The second params can be time
[03:18:10] out. So time out basically means for how
[03:18:13] long do we wait to get the response.
[03:18:16] Suppose there is any server who normally
[03:18:18] takes from maybe 50 milliseconds to the
[03:18:22] maximum of maybe 5 seconds in order to
[03:18:26] process any request from a long time.
[03:18:29] And now suddenly it is taking 10
[03:18:31] seconds. So this should be an alarming
[03:18:34] case and we should immediately check
[03:18:36] what went wrong okay with that
[03:18:37] particular web server. What is that
[03:18:39] particular request which is taking 10
[03:18:41] seconds. Is there any issue with the
[03:18:43] code? Is there any issue with the
[03:18:45] request? Does do we change any
[03:18:47] configuration or does our server is
[03:18:50] managing some other task because of
[03:18:51] which are this request is being
[03:18:53] affected. We need to know the answers of
[03:18:56] all of these questions in order to make
[03:18:57] a better decision. We also need to know
[03:19:00] about the threshold. Threshold can be
[03:19:02] like healthy and unhealthy both. Right?
[03:19:04] In unhealthy, we basically take care of
[03:19:07] the failed calls. So we will basically
[03:19:10] maybe set an alarm after 20 failed
[03:19:13] calls. Okay. We can configure them based
[03:19:16] on a particular region, based on a
[03:19:18] particular area of our code, maybe
[03:19:20] particular route, particular subdomain
[03:19:23] of our route or maybe randomly at a
[03:19:25] particular time. If 20 call fails, that
[03:19:28] is an alarming situation for us. In
[03:19:30] normal scenario, many application may
[03:19:33] give a faulty response based on various
[03:19:35] factors. It happens on a day-to-day
[03:19:37] basis. But after that n threshold after
[03:19:40] that count of threshold we should start
[03:19:43] investigating the cause and similarly we
[03:19:46] have our healthy threshold where we
[03:19:48] should put our markup maybe after every
[03:19:52] some calls. So maybe after every 100
[03:19:55] calls 100 positive calls we need to
[03:19:57] check is everything fine with those
[03:19:59] calls the response was expected and the
[03:20:01] system is working the way it should
[03:20:03] work. So these are the three health
[03:20:06] parameters of our web servers which our
[03:20:08] load balancer needs to check and time in
[03:20:11] order to make sure that our web servers
[03:20:13] are working fine and with this we now
[03:20:16] understand the two major factors of load
[03:20:18] balancer. How it gives request to the
[03:20:20] other server and plus how do it check
[03:20:23] the health of every server. Now that we
[03:20:25] have understood load balancer it is very
[03:20:28] important to know that in terms of
[03:20:30] scaling we also need to scale our
[03:20:31] databases right. So in databases what
[03:20:34] normally happens is suppose we have 100
[03:20:36] GB of data and we have a storage of
[03:20:38] maybe 200 GB this is still fine right
[03:20:41] maybe we have 1 TBTE of data maybe 100
[03:20:44] TB of data doesn't matter the thing
[03:20:46] which matter is this data will
[03:20:48] eventually get full and there will come
[03:20:52] a stage where you can't expand your
[03:20:54] databases vertically you have to add
[03:20:57] more databases into your system whenever
[03:21:01] it comes to scaling Also now that we
[03:21:03] know about load balancers, we know that
[03:21:05] our server can be placed into different
[03:21:08] regions of our world, right? This can be
[03:21:10] placed into US region, this can be
[03:21:13] placed into India region only. And what
[03:21:15] we were doing is we were adding both of
[03:21:17] these data into single database. This is
[03:21:19] effective if the user count is one, the
[03:21:21] request we are catering are minimal. But
[03:21:24] if the user increases, the traffic
[03:21:26] increases, the data increases, it will
[03:21:28] be hard to cater both of these servers
[03:21:30] from the single database. This is where
[03:21:33] we need to segregate this data into
[03:21:36] multiple databases. One may be catering
[03:21:38] Indian server and the other might be
[03:21:40] catering the US server. Now this way we
[03:21:43] segregated our data into two databases
[03:21:45] so that the requests can be faster and
[03:21:47] also with that the data will be
[03:21:49] segregated in such a manner that it will
[03:21:51] be easy to maintain. Now this can be one
[03:21:54] of the case where we don't need to have
[03:21:56] same data into two databases. In this
[03:21:59] case what we are doing we are assuming
[03:22:01] that the data in this data table will be
[03:22:03] different from the data into this
[03:22:05] database. Normally this is not the case
[03:22:08] right? Normally what can happen is
[03:22:10] suppose we have multiple servers for
[03:22:12] Indian region only. So this is also
[03:22:15] Indian region this is also Indian region
[03:22:17] and we can have multiple databases to
[03:22:19] cater the same server. Why? Because if
[03:22:21] we have a single database and if that
[03:22:24] fails we don't have anywhere to go and
[03:22:26] recover the data from. That's why we
[03:22:28] manage multiple databases in order to
[03:22:30] recover the data maybe maintain the data
[03:22:32] and also it increase the efficiency of
[03:22:35] our system by reducing the latency and
[03:22:37] also we may have some portion of data
[03:22:39] here and some portion of data here. Both
[03:22:42] of these things are possible. These
[03:22:44] things are basically named as
[03:22:46] replication and partitioning. In
[03:22:49] replication what we do, we basically
[03:22:52] copy the data from one database to other
[03:22:54] database. So that even if anything
[03:22:57] happens to database one, we are able to
[03:22:59] retrieve that data from database 2.
[03:23:01] Also, if database one is handling so
[03:23:03] much calls, we can redirect those
[03:23:05] requests to database 2 as well. And in
[03:23:07] partitioning, what we do is we basically
[03:23:10] divide the data into single database and
[03:23:12] put one part here into other database
[03:23:15] and the other part anywhere else. So
[03:23:17] that if they are getting different
[03:23:19] request it will be easier to cater each
[03:23:21] and every request with their specific
[03:23:23] database. We are going to cover both of
[03:23:25] these topics but for now let's talk
[03:23:27] about replication. So we have understood
[03:23:29] the replication basically means keeping
[03:23:31] the copy of data. And why are we doing
[03:23:33] this? Why are we making copies? The
[03:23:36] first point is we are avoiding or
[03:23:38] improving our single point of failure
[03:23:40] issue. We don't want our database to
[03:23:42] fail and our system to collapse. we want
[03:23:44] some other database at that time so that
[03:23:46] our system will be working. The other
[03:23:48] reason of this is availability. By
[03:23:51] having data into multiple databases, our
[03:23:53] availability as a system can increase.
[03:23:56] We can have different data centers and
[03:23:58] it will increase our performance. Also,
[03:24:01] as we discussed, if we talk about
[03:24:02] different localities or different
[03:24:04] regions of area, we are increasing the
[03:24:06] performance by adding particular
[03:24:08] database into that site. So that will
[03:24:10] keep the data close to our server and
[03:24:12] will be retrieved faster and also with
[03:24:15] all this we are eventually increasing
[03:24:17] our read throughput. So suppose with a
[03:24:20] single database we were catering maybe
[03:24:22] 10,000 requests per second. Now with two
[03:24:25] databases of same storage and data we
[03:24:27] can cater two times of the previous one.
[03:24:29] So this is how the three throughput will
[03:24:31] also increase. So after understanding
[03:24:34] what replication is and why do we use it
[03:24:36] let's talk about how can we achieve
[03:24:38] replication. So we are going to talk
[03:24:40] about three algorithms. The first
[03:24:43] algorithm is single leader replication.
[03:24:47] That means there will be a database
[03:24:49] which will be our leader and from the
[03:24:52] leader only we will replicate the data
[03:24:54] to other follower nodes or follower data
[03:24:56] centers. Suppose there is any user who
[03:24:59] is maybe updating their profile picture
[03:25:02] and when they are updating their profile
[03:25:04] picture the request from our client
[03:25:06] basically moves to a server and from
[03:25:09] server we are only sending that request
[03:25:12] to our leader only. We don't directly
[03:25:14] communicate to our followers because it
[03:25:17] is the leader who is going to then
[03:25:19] replicate our data to followers. So
[03:25:21] every request will go to our leader to
[03:25:23] be specific every right request will go
[03:25:25] to our leader and then the data will be
[03:25:28] replicated to our followers. This is how
[03:25:30] a single leader approach works. Let's
[03:25:32] understand this through an another
[03:25:34] diagram. This is our user. Maybe this is
[03:25:37] our leader and we have our F1 follower
[03:25:41] database and follower two. Assume this
[03:25:44] as a timeline. Okay. Now what we are
[03:25:46] going to do suppose at this point the
[03:25:48] user is requesting to update the profile
[03:25:51] picture and this request will eventually
[03:25:54] go to our leader node and once the
[03:25:56] request is taken care by leader they
[03:25:59] will send the same request to our
[03:26:01] follower nodes as well. Follower node
[03:26:04] one maybe it is taking longer time
[03:26:05] because it is far. So at this point the
[03:26:08] request went to follower one and
[03:26:10] follower two. At this point two things
[03:26:13] can happen. First thing is if the calls
[03:26:16] from leader node to follower node are
[03:26:18] async in that case leader will do its
[03:26:21] work and update the user that the task
[03:26:24] is done and in the back processes the
[03:26:27] follower nodes can continue updating the
[03:26:29] profile picture and will eventually
[03:26:31] update our leader that the task is done.
[03:26:34] This type of request where leader
[03:26:36] updates the user directly after updating
[03:26:38] the data without getting the
[03:26:40] acknowledgement from these follower
[03:26:41] nodes is called async operation. Async
[03:26:44] basically means once the request is
[03:26:47] catered by a leader, it will directly
[03:26:49] update our user and in the back end it
[03:26:52] will also share the same request for
[03:26:54] follower one and follower two node to
[03:26:56] perform the same task and update our
[03:26:58] leader in the back end. In this case,
[03:27:00] even if our F_sub_1 fails to update,
[03:27:03] F_sub_2 fails to update or anything went
[03:27:05] wrong with these other nodes, the leader
[03:27:07] have already given the confirmation to
[03:27:08] our user. So the task is done and
[03:27:11] eventually when the nodes are recovered,
[03:27:14] these operations will be performed again
[03:27:16] on F1 and F2 to keep the sync alive.
[03:27:19] After async, let's also talk about sync
[03:27:21] approach where the user updates the
[03:27:23] profile picture. The request basically
[03:27:25] carried by our leader and it sends the
[03:27:28] update request to our follower nodes as
[03:27:31] well F_sub_1 and F_sub_2 and the leader
[03:27:34] in this case will not give any
[03:27:36] confirmation until it get the okay
[03:27:39] response from both of our followers. So
[03:27:42] this gives okay and again this gives
[03:27:45] okay. Once it get confirmation from both
[03:27:48] of these follower nodes then only our
[03:27:51] database is going to update our server
[03:27:53] and eventually our user that the task is
[03:27:56] done. So this kind of approach is called
[03:27:58] sync approach where the leader will
[03:28:00] provide the same operations to be
[03:28:02] performed by f_sub_1 and f_sub_2. It
[03:28:05] will wait for the responses and once the
[03:28:07] response is taken then only it will
[03:28:10] update the user. So this is going to
[03:28:12] take a lot of time because our databases
[03:28:14] can be placed into multiple places.
[03:28:16] There can be two follower nodes as we
[03:28:18] have mentioned here or more. So in that
[03:28:20] case our time will increase and
[03:28:22] eventually it will update the user after
[03:28:25] getting the confirmation from each and
[03:28:27] every follower. Now let's talk about
[03:28:29] advantages and disadvantages of both of
[03:28:32] these approaches. If we talk about
[03:28:34] synchronized approach, sync approach,
[03:28:36] the advantage is all of the followers
[03:28:38] will always have the updated values. The
[03:28:41] other advantage of sync can be even if
[03:28:43] our leader fails, it will be easier to
[03:28:46] select another leader because every node
[03:28:48] we know have the current updated data.
[03:28:51] So it will be easy to migrate our leader
[03:28:53] to any of the follower nodes. Maybe
[03:28:55] follower one, maybe follower two. The
[03:28:57] disadvantages
[03:28:59] will be it is going to take a longer
[03:29:01] time and also after getting any request
[03:29:04] our leader is waiting for the responses
[03:29:07] from other follower nodes. it is going
[03:29:09] to block that particular resource and
[03:29:12] other operations on that particular
[03:29:13] resource is also be blocked because of
[03:29:15] our asset principles. Right? And because
[03:29:18] of these two disadvantages,
[03:29:20] we can say that the sync operation here
[03:29:23] while replication is an impractical
[03:29:25] approach. Any leader can't wait for all
[03:29:28] the followers to update them first and
[03:29:30] then they will update the user. So we
[03:29:33] always prefer async approach here. In
[03:29:35] async approach as we can see clearly no
[03:29:38] resources are blocked right and the
[03:29:40] responses will also be faster and if we
[03:29:43] talk about disadvantages we are
[03:29:45] basically trading off our consistency
[03:29:48] that means our data will be mismatched.
[03:29:51] Suppose if a user is updating any data
[03:29:54] to leader node and leader provides the
[03:29:56] response to user our user will assume
[03:29:59] that the task is done. So even if the
[03:30:01] read from any other follower nodes the
[03:30:04] data should be reflected and in the
[03:30:06] async approach it is very possible that
[03:30:08] if user is trying to access the data and
[03:30:10] it get connected to any follower nodes
[03:30:13] it will see the stale data which is
[03:30:15] eventually going to update by a leader
[03:30:17] but currently they are seeing the stale
[03:30:19] data. So this is the issue in our async
[03:30:21] approach. Now before moving to the other
[03:30:24] algorithms let's first talk about how
[03:30:26] can we add a new follower. So let's say
[03:30:29] we already have a system where we have a
[03:30:32] leader and we have maybe follower one
[03:30:34] and follower two already in our system.
[03:30:37] Now we need to add our follower three.
[03:30:39] How can we add it? Now in order to add a
[03:30:42] new node into our system, we need to
[03:30:45] perform some operations. Our follower
[03:30:47] three will also need to have all the
[03:30:49] data which our leader have. So for that
[03:30:53] what we do we create snapshot of the
[03:30:56] data from leader or maybe we can create
[03:30:58] it from follower as well but we need to
[03:31:01] make sure that if we are picking
[03:31:03] follower 2 in order to do the
[03:31:04] replication we will again need to use
[03:31:07] f_sub_2 only to update the data. Let's
[03:31:10] say the current time is 12:55 p.m. and
[03:31:13] we are taking the snapshot of f_sub_1 or
[03:31:16] f_sub_2 at this point. So that means
[03:31:18] whatever the state of our f_sub_2 is at
[03:31:21] this 12:55 p.m. we are only capturing
[03:31:25] the current state of that particular
[03:31:27] database and we are that dumping it into
[03:31:30] our new node which is f3. Now this
[03:31:33] process is going to take time for sure.
[03:31:36] So this is our snapshot one which is at
[03:31:39] 255. So this will contain the entire
[03:31:42] state of our f_sub_2 node. Now what will
[03:31:46] happen again is suppose the replication
[03:31:48] process took 2 hours or 3 hours maybe
[03:31:52] because the data is huge and everything.
[03:31:55] Now we need to know what changes did the
[03:31:58] f_sub_2 went through in this 2 and 3
[03:32:00] hours. So in that case what we will do
[03:32:02] we will again take the snapshot but this
[03:32:04] time we don't have to capture the entire
[03:32:06] state. We only need to capture the
[03:32:08] difference between the snapshot and the
[03:32:11] current time. So we will create another
[03:32:14] snapshot which will include the changes
[03:32:17] from 12:55 to current time. And finally
[03:32:20] we are going to dump this data also in
[03:32:22] F3. Once we get to know that the F3 is
[03:32:25] completely in sync with F_sub_2 and
[03:32:27] F_sub_2 is already in sync with leader
[03:32:29] we will make the connections of leader
[03:32:32] to our F3 also. And with this we will
[03:32:35] have a new follower node into our system
[03:32:37] with all the updated data. After this
[03:32:40] what happens if the leader only fails?
[03:32:42] Let's say we are having this topology
[03:32:44] again leader F_sub_1 and F_sub_2. Again
[03:32:48] we have some database is linking the
[03:32:51] replication process is working fine.
[03:32:53] Then suddenly our leader fails. In this
[03:32:56] case we need to elect a new leader. Now
[03:32:59] how will we elect? Basically we will
[03:33:02] take care of two factors. The first
[03:33:04] factor is which of these f_sub_1 and
[03:33:07] f_sub_2 have the latest information. So
[03:33:09] we can take care of that by seeing the
[03:33:11] time stamp of the latest update. So
[03:33:13] whichever we will see we will pick from
[03:33:16] f_sub_1 and f_sub_2 and we will see
[03:33:18] which one is updated recently. And the
[03:33:22] second step is we need to update f_sub_1
[03:33:24] to become a leader and our f_sub_2 to
[03:33:28] see f_sub_1 as a leader now. So this is
[03:33:30] the process of electing a new leader
[03:33:33] when the leader goes down. With this you
[03:33:35] may have also heard these terms like FS
[03:33:37] image or maybe edit logs. These things
[03:33:40] are highly used in the replication
[03:33:42] process. FS image basically contains the
[03:33:45] full metadata snapshot and edit logs is
[03:33:48] used to update the current changes. So
[03:33:51] these both are also used while doing the
[03:33:53] replication and while choosing the new
[03:33:56] leader or adding a new follower. These
[03:33:59] two things are also helpful. Now that we
[03:34:01] understand how to add new leader, how to
[03:34:03] add new follower, how to take care of
[03:34:05] things, let's move to our second
[03:34:07] algorithm which is multileg.
[03:34:10] So as the name suggests it is having
[03:34:12] multiple leaders instead of one. So that
[03:34:14] means there is a possibility that every
[03:34:16] data center be it DS1 and DS2 will have
[03:34:20] their bunch of leaders and followers. So
[03:34:23] maybe for DS1 we have this leader and we
[03:34:26] have follower like f_sub_1 here also
[03:34:30] here we have another leader and
[03:34:32] follower. So for DS2 the leader is L2
[03:34:36] and for DS1 the leader is L. Now what is
[03:34:39] going to happen? Let's say the user is
[03:34:41] maintaining their records through DS1.
[03:34:44] So every record which DS1 handles will
[03:34:47] eventually first go to their leader and
[03:34:49] then the leader will update their nodes
[03:34:52] with this. Now leader also needs to
[03:34:54] update the other leader into other data
[03:34:56] centers and then this leader is going to
[03:34:59] update these nodes. This is how the
[03:35:01] process flows. And similarly if any
[03:35:04] request is being made to this data
[03:35:06] center too our leader two is going to
[03:35:08] update their followers and also we'll
[03:35:11] send some query to other leader to
[03:35:13] update the leader as well as their
[03:35:15] followers. So this is how a multi-
[03:35:18] leader replication works where the
[03:35:19] leader will not communicate to each and
[03:35:22] every nodes but it will communicate to
[03:35:24] leader nodes and maybe their follower
[03:35:26] nodes. So this is going to increase our
[03:35:30] performance. Also we have multiple
[03:35:32] leaders that means even if a leader node
[03:35:35] breaks we can use the other leaders to
[03:35:37] update the other nodes. So we have more
[03:35:40] tolerance to threats. Now since we have
[03:35:42] two leaders we can also perform
[03:35:44] collaborative operations like they can
[03:35:47] be working on the same file. Now we can
[03:35:49] work on the same Google file, same
[03:35:52] Google sheet. Those kind of operation
[03:35:53] also we can perform because one request
[03:35:56] will not block that resource and the two
[03:35:58] request can eventually work
[03:35:59] simultaneously. Now when we are saying
[03:36:01] that both of these resources are going
[03:36:04] to perform actions on a singular table
[03:36:06] or single data that is going to increase
[03:36:08] our chances of conflicts let me explain
[03:36:11] it through another diagram. Let's say
[03:36:13] this is user one. This is leader one.
[03:36:15] Here we have leader two and then we have
[03:36:17] another user. Let me create the
[03:36:19] timelines again. Let's say user one and
[03:36:22] user two both working on the same file
[03:36:24] which is named as A. Now user one wants
[03:36:28] to rename that file to B and user two
[03:36:31] want to rename that file to maybe C. Now
[03:36:34] these both will eventually hit their
[03:36:37] request to their particular leaders and
[03:36:39] based on the async approaches we have
[03:36:42] seen our leaders can eventually give the
[03:36:44] okay response to our users right that
[03:36:47] okay it is renamed and here also it can
[03:36:50] give the response that okay it is
[03:36:52] renamed. So these two users will see two
[03:36:55] different data. This is not possible
[03:36:57] right? And also our leader is going to
[03:36:59] communicate with each other. So this
[03:37:01] will send the request to update the data
[03:37:04] with C. And also this leader will also
[03:37:07] send the same request to update it to B.
[03:37:10] Now this is the conflict and how do we
[03:37:12] resolve it? Basically there are three
[03:37:14] ways of resolving it. The first way of
[03:37:16] resolving is the last right when so that
[03:37:19] is this right is performed let's say at
[03:37:22] this point and this right is performed
[03:37:25] at this point so as this operation is
[03:37:28] performed later so that means our L2
[03:37:32] needs to update our file to C. So
[03:37:35] eventually the file name will be C. This
[03:37:37] is our first approach. The second
[03:37:39] approach here is while working with
[03:37:41] different leaders we assign some ids to
[03:37:43] each and every leader. Suppose leader
[03:37:46] one have ID 10 and leader two have ID
[03:37:49] 11. Now based on the ID we can decide
[03:37:53] which leader is more powerful and which
[03:37:55] leader we have to follow. Ultimately if
[03:37:58] leader 2 is of higher ID that means we
[03:38:00] have to follow leader two. And now it
[03:38:02] doesn't matter if the last write was
[03:38:04] performed by L1 or L2 it is going to
[03:38:07] update it with the value of L2 only. So
[03:38:10] here instead of the last right we are
[03:38:12] going to focus on the ID. So we can say
[03:38:15] replica with higher ID wins. Replica is
[03:38:20] nothing but a replication like every
[03:38:22] node which have the replica of content
[03:38:24] can be called replica. So we can write
[03:38:26] leader also here. Okay no issues. The
[03:38:29] third approach basically is the approach
[03:38:31] which we also see sometimes on git when
[03:38:33] we try to solve merge requests. So the
[03:38:36] same approach is used by the replication
[03:38:37] process as well. So whenever there are
[03:38:40] conflicting situations, our leaders or
[03:38:42] any other nodes are not going to solve
[03:38:44] it. In this case, we will prompt our
[03:38:46] user directly that the file name is been
[03:38:49] changed to C and the last change which
[03:38:52] you have made was B. So do you want to
[03:38:54] keep the current changes or do you want
[03:38:56] to update it to C? It is up to user. So
[03:39:00] in this case we need to add the
[03:39:01] application logic to basically pass our
[03:39:04] conflict to the users and eventually
[03:39:06] user will update it.
[03:39:09] After this the third algorithm is
[03:39:12] leaderless replication. So in this
[03:39:14] replication we don't assign a specific
[03:39:16] leader to any data center or to any
[03:39:19] other node. We don't have any kind of
[03:39:21] leader in this leaderless replication as
[03:39:24] the name suggests correctly. So here
[03:39:26] what do we do here? Let's say we have
[03:39:29] any client here. So he is our user. And
[03:39:32] now we have some databases. Let's say
[03:39:34] this is our node one. This is our node
[03:39:36] two. This is our node three. So these
[03:39:39] are the three databases onto which our
[03:39:42] data needs to be replicated. So this
[03:39:44] time whenever a user request for any
[03:39:47] update, let's say again this user is
[03:39:50] updating the profile picture but this
[03:39:52] time the request basically goes to all
[03:39:54] of the nodes and eventually all will
[03:39:57] update the data and provides a okay
[03:40:00] response to the user. Here the thing is
[03:40:03] in other applications where we had a
[03:40:05] leader we can basically rely on that
[03:40:07] leader replica and based on the response
[03:40:09] which we get from leader we can
[03:40:11] eventually decide that whether the
[03:40:12] operation is performed correctly or not
[03:40:15] but here we don't have any leader. So
[03:40:17] what can we do? Do we wait for all the
[03:40:19] replicas to answer us and at this point
[03:40:22] we update our user or there is some
[03:40:24] other method. Let's talk about that in a
[03:40:26] bit but before that let's jot down some
[03:40:29] points. So the first point here is we
[03:40:31] don't have any leader here. So here we
[03:40:34] are bound to send our queries to more
[03:40:37] than one replicas right more than one
[03:40:40] nodes. So every query when I say every
[03:40:43] query I mean both read as well as write
[03:40:46] queries we'll go to multiple nodes and
[03:40:49] then collaborately we will get the
[03:40:52] response. When I say read also that
[03:40:54] means let's say in this database only if
[03:40:57] there is some other user who is also
[03:40:59] trying to access some values and while
[03:41:01] accessing some values the user can use
[03:41:04] this replica at this point or this
[03:41:06] replica at this point or this replica at
[03:41:08] this point. In all of these three
[03:41:11] scenarios the user is going to get
[03:41:13] different values. So here the user will
[03:41:16] get updated profile and from here they
[03:41:18] will get the stale data. So based on
[03:41:20] multiple entries, we have to decide
[03:41:22] whether to give this user updated data
[03:41:24] or the stale data. So this is our
[03:41:26] struggle with this kind of replication.
[03:41:28] But apart from the struggles which we
[03:41:30] see here, most of the applications in
[03:41:32] databases use this setup. It is used by
[03:41:35] various applications like Amazon Dynamo,
[03:41:37] React, Cassendra, VM all of these use
[03:41:40] leaderless application. So now the only
[03:41:42] issue is should we wait for each and
[03:41:44] every node to give us confirmation so
[03:41:46] that we can proceed to tell any user any
[03:41:49] response or is there any other way. So
[03:41:52] as you may have guessed definitely we
[03:41:54] can't wait for this long. There is a way
[03:41:56] that way is basically termed as cororum.
[03:41:59] So in cororum what do we do? Suppose we
[03:42:01] have total number of nodes as three. We
[03:42:03] denote them by n and for reading we have
[03:42:07] to use more than half of the total
[03:42:10] nodes. So it should be more than n by2.
[03:42:13] Again for writing we should get the
[03:42:15] confirmation from more than the half
[03:42:17] nodes. This way we maintain the quorum
[03:42:20] and we will get the responses which we
[03:42:22] want for. So in the same example if I
[03:42:24] redraw it. Suppose the user is again
[03:42:27] going to update any information. So
[03:42:29] updating profile picture again maybe and
[03:42:32] the request went like this for first
[03:42:34] node for second node. Maybe the network
[03:42:36] is faster here and for the third node.
[03:42:39] Now this is the time each node took in
[03:42:42] order to perform the operation. So here
[03:42:45] we don't have to wait for this response
[03:42:47] because we already got the responses
[03:42:49] from more than the half of the nodes. So
[03:42:52] we can easily say that profile picture
[03:42:54] is updated. So here we can confirm that
[03:42:57] the operation of updating profile
[03:42:58] picture is done. Again if a new user
[03:43:01] appears here and the user is trying to
[03:43:04] access the value. So it can basically
[03:43:06] sends a read operation from these all
[03:43:09] nodes. Maybe at this point, maybe at
[03:43:11] this point. Suppose this point gives a
[03:43:14] result here. Then this point also gives
[03:43:16] a result here. So in these two
[03:43:18] responses, the user is getting different
[03:43:20] values because this is giving them stale
[03:43:22] data and this is giving them updated
[03:43:24] data because the updation is already
[03:43:26] done here. Right? So in this case there
[03:43:28] are various other mechanisms also. You
[03:43:30] can go for time stamp or they can go for
[03:43:32] any other mechanisms. But let's say they
[03:43:35] don't go for any other mechanism. There
[03:43:36] is one more mechanism here where that is
[03:43:39] if the requests are equal and we are
[03:43:41] still getting the different data. We
[03:43:43] will consider the third request and
[03:43:45] response and then again calculate the
[03:43:48] results. So here we are getting updated
[03:43:50] value from two of the nodes and we are
[03:43:53] getting stale value from one of them. So
[03:43:55] we will move ahead with the updated
[03:43:57] value and this user will get the updated
[03:44:01] profile picture. So there can be various
[03:44:03] ways of solving this conflicts. But the
[03:44:05] thing is ultimately the user don't have
[03:44:08] to wait for each and every response.
[03:44:10] This is a special case where half of the
[03:44:12] nodes are saying that things are done
[03:44:14] and half are saying things are not done.
[03:44:15] We don't have three servers also. We
[03:44:17] have more than 10 or 12 servers in a
[03:44:20] large system. So this case becomes a
[03:44:22] rare case. So yeah this is all about the
[03:44:24] replication which we needs to know at
[03:44:26] this point. So after replication the
[03:44:28] other way of segregating our data into
[03:44:30] multiple nodes in order to scale them
[03:44:32] properly is partition. Now before moving
[03:44:35] to partition first see what can be the
[03:44:37] issue with replication. Replication
[03:44:39] basically suggests that we will copy
[03:44:41] entire data to other node. What if the
[03:44:44] data is so huge that we can't have them
[03:44:46] in one node? With this the second
[03:44:48] concern is what if the data is so huge
[03:44:51] that even with secondary indexes a time
[03:44:54] of searching any element is getting
[03:44:57] worse and worse. So with these two
[03:44:59] concerns we can't really have all of the
[03:45:01] data in one database and same data in
[03:45:04] other database. What can we do then? We
[03:45:07] can easily or through some logic break
[03:45:10] the system. we will do the partitioning
[03:45:12] of data and maybe place some amount of
[03:45:15] data here and other amount of data in
[03:45:18] some other node and then we can
[03:45:20] replicate this partitioned data. Why?
[03:45:22] Because this data is comparatively
[03:45:25] smaller and it will be easier to manage.
[03:45:28] Let's say in a particular node we are
[03:45:30] only saying that we will store up to
[03:45:33] 10,000 records and then once we hit this
[03:45:36] point we will again create a new
[03:45:39] partition and we'll add the new records
[03:45:41] there or maybe divide these records into
[03:45:44] 5,000s. So these all things can be done
[03:45:47] only when we have an partitioning the
[03:45:50] data. So this is what partition really
[03:45:52] is. While partitioning the data there is
[03:45:54] only a single rule that is if we are
[03:45:58] doing the partitions
[03:46:00] like this then if we combine them it
[03:46:03] should give us the entire data set. This
[03:46:06] is the only condition which is required
[03:46:08] for partition and this makes sense too.
[03:46:11] We don't want to lose any data. Right?
[03:46:13] So this is our first condition and the
[03:46:15] second condition is that let's say we
[03:46:18] have again two partitions. Now we want
[03:46:20] our data to be equally distributed among
[03:46:23] them. We don't want any nodes to get
[03:46:26] let's say consumed by 90% of data and
[03:46:28] here we only have 10% of data because
[03:46:31] this basically beats the reasoning of
[03:46:33] partitioning. We are doing partitioning
[03:46:35] so that every node will be able to
[03:46:37] access some data and will be able to
[03:46:39] work frequently. So basically we are
[03:46:41] saying that the data should be evenly
[03:46:44] distributed. So these are the two major
[03:46:47] conditions of partitioning. Apart from
[03:46:50] this everything works fine. So the first
[03:46:52] condition makes sense. It will take care
[03:46:54] of itself. And in order to fulfill
[03:46:55] second condition, we have to basically
[03:46:57] maintain some system where we will
[03:47:00] protect the database to get overloaded
[03:47:02] or to get underutilized like this. So
[03:47:05] now let's talk about those solutions. So
[03:47:07] the first thing here is we will
[03:47:09] partition using key. Let's say we have
[03:47:12] some table maybe user table. we are
[03:47:15] handling these entities and then we have
[03:47:18] some ID here user one or user two and
[03:47:21] the series gurus like this. So what we
[03:47:23] will do we will basically in the
[03:47:25] partitioning based on the keys we'll
[03:47:28] insert the values. Let's say this user
[03:47:30] entity can hold up to 10,000 or maybe
[03:47:34] 100,000 values. So what we will do? We
[03:47:37] will divide these 100,000 to 50,000 here
[03:47:40] and 50,000 here. So that means from user
[03:47:43] 1 to user 50,000 these data will go to
[03:47:46] the node one or we can say partition one
[03:47:49] and the users from user ID maybe 50,0001
[03:47:54] to user ID 100,000 will go into
[03:47:58] partition two. So this is how we will
[03:48:01] segregate our data so that it will be
[03:48:03] easier to retrieve the data afterwards
[03:48:05] as well. This may looks fair on the
[03:48:07] surface value but it is quite messy.
[03:48:10] What if these users are from different
[03:48:12] regions? What if half of them from 1 to
[03:48:16] 50,000s are from India and half of them
[03:48:19] are from US? Maybe here also they are
[03:48:21] distributed like this only. So half of
[03:48:24] them are from India and half of them are
[03:48:26] from US. So in that case both of these
[03:48:29] nodes will be busy. This is a good
[03:48:31] scenario because both of the nodes will
[03:48:32] be used and will be busy in order to
[03:48:34] provide the information. And also it is
[03:48:37] possible that the node one is only
[03:48:39] taking care of India request and the US
[03:48:43] request are being taken care by
[03:48:45] partition 2 or node 2. So in this case
[03:48:47] what happens? Let's say the application
[03:48:50] is very popular in US but is not that
[03:48:53] popular in India. So maybe P1 is getting
[03:48:56] maybe 100 requests per second and on the
[03:48:59] other hand our partition 2 is getting
[03:49:02] maybe 10,000 requests per second. Now
[03:49:05] earlier this was looking good on the
[03:49:07] surface level but now this is messy
[03:49:09] because one partition here is clearly
[03:49:12] becoming the hot spot. Now what is
[03:49:15] hotspot? A hotspot is that partition
[03:49:18] which is getting more request compared
[03:49:20] to other ones. So it is our duty to
[03:49:23] maintain this hotspot as well. We don't
[03:49:25] want any node to become hotspot because
[03:49:28] eventually a hotspot can leads to the
[03:49:31] node failure and if that node fails we
[03:49:34] have to basically distribute the data
[03:49:36] into multiple nodes then and then do the
[03:49:38] configuration again or maybe change this
[03:49:41] node or maybe transfer this data to
[03:49:43] other node all the things we have to
[03:49:45] manage but that thing is surely not
[03:49:47] recommended. So we avoid any node from
[03:49:50] becoming a hotspot. I hope this is
[03:49:53] making sense to you. So one way of
[03:49:55] handling the hotspot is let's say for
[03:49:58] every request we also attach time stamp
[03:50:02] and if most of these requests are going
[03:50:05] to node one and very less are going to
[03:50:08] node two that means the data
[03:50:10] distribution which we did is not good.
[03:50:13] So we have to rearrange our data with
[03:50:16] some other methods. So let's see what
[03:50:19] the other points are. The second
[03:50:20] approach here can be partitioning the
[03:50:23] data with hash value of key. What we
[03:50:27] will do here is let's say we have user
[03:50:29] one, user 2, maybe user 3 as the ID or
[03:50:34] unique identifier of the data and now we
[03:50:36] have to put that data into different
[03:50:38] partitions. We will not here choose ID
[03:50:41] but we will use any hash function to
[03:50:44] basically transfer the ID to a unique
[03:50:47] number. Maybe this is one, this is two
[03:50:50] and user three belongs to maybe one
[03:50:52] again because of the hash function which
[03:50:53] we are using. So based on this one and
[03:50:56] one will go to partition one and two
[03:50:59] will go here or maybe we are catering
[03:51:02] some range here. So maybe 1 to 10 can go
[03:51:04] into one direction and 10 to 15 can go
[03:51:06] into other direction. So this is also
[03:51:09] one way of doing the partition. The
[03:51:11] challenge here is still same. If the
[03:51:14] request bombarded at P1, we don't have
[03:51:17] any other way but we have to rearrange
[03:51:19] like we discussed in the previous
[03:51:20] example. So based on our discussion so
[03:51:23] far, the hotspot is becoming a real
[03:51:26] issue. Before solving it for partitions,
[03:51:28] let's first see how do we solve this
[03:51:30] issue in a local DB. Let's say we have a
[03:51:33] table for products. And in products, we
[03:51:36] have various attributes. Let's say we
[03:51:38] have some name and color or maybe price.
[03:51:42] We can have more filter values, right?
[03:51:44] And like this we can have as many
[03:51:46] attributes as we want. So name, color,
[03:51:48] price, material, all these attributes
[03:51:50] basically are used in order to filter
[03:51:52] these products. Name can be used in
[03:51:55] query parameters. Other than that color,
[03:51:58] price and range can be used in filter
[03:52:01] easily. So what we will do in normal
[03:52:03] scenario, we will create indexes based
[03:52:06] on material, based on color, maybe based
[03:52:10] on price as well. I'm not sure about it
[03:52:12] because price normally goes into a range
[03:52:15] but we can easily make a secondary index
[03:52:18] out of this and by that whenever any
[03:52:21] user basically tries to search that
[03:52:23] particular product with material maybe
[03:52:25] material is wood. So what will happen?
[03:52:27] We will not go to our table or this huge
[03:52:30] table directly where we will redirect
[03:52:32] this query to it is going to redirect it
[03:52:35] to our second query which is maintained
[03:52:37] for material. And if that data or that
[03:52:40] value is here, we will then rewrite
[03:52:43] those records particularly to our
[03:52:46] display. So this is how we manage the
[03:52:48] queries to find out if we have the data
[03:52:50] or not. And if we have the data, where
[03:52:52] is that data particularly. This is how
[03:52:55] we solve it in local DB or a single
[03:52:57] instance. Now we are going to use the
[03:52:59] same way into partitioning as well. So
[03:53:02] what we are going to do? We are going to
[03:53:04] do the partitioning by the secondary
[03:53:06] index. What do we mean by this is we are
[03:53:09] going to maintain secondary indexes in
[03:53:13] each partition. So that means all the
[03:53:16] secondary indexes will be present in
[03:53:18] each partition respectively. This way is
[03:53:21] also used by Cassandra and also by
[03:53:24] elastic search. What we are going to do
[03:53:26] here is let's say this is our partition
[03:53:28] one which have some data. Maybe this
[03:53:30] partition have car data from ID let's
[03:53:34] say 200 to 400 and we have partition two
[03:53:38] where also we have some car data from ID
[03:53:41] let's say 500 to 700 here we are
[03:53:45] maintaining some secondary indexes maybe
[03:53:47] we are maintaining color as a secondary
[03:53:50] index and for color we know that the
[03:53:52] blue color is for car maybe with ID 209
[03:53:56] and 305 similarly For red we can say the
[03:54:01] ID is 350
[03:54:03] or 359 anything right. For P2 also we
[03:54:08] are maintaining it like this only. Again
[03:54:10] for color we know that the blue color
[03:54:12] cars are maybe ID 509
[03:54:16] and 609 and red cars are 610 690. So
[03:54:21] these are the indexing which is done in
[03:54:23] both of these partitions. So whenever a
[03:54:26] query comes for a blue car, we don't
[03:54:28] have to scan to all the records but we
[03:54:31] can directly see the blue car here
[03:54:33] belongs to 209 and 305 and here we have
[03:54:37] blue car for 509 and 609 only. Let's say
[03:54:41] a new request come for silver car. So we
[03:54:45] don't have to basically indulge into all
[03:54:47] the records but by seeing secondary
[03:54:49] indexes on colors only we will get that
[03:54:52] this partition doesn't have any car
[03:54:54] which is of silver color. So we don't
[03:54:56] scan this partition entirely and this
[03:54:59] request can now go to some other
[03:55:00] partition. So this is how we are
[03:55:02] maintaining the request so that our data
[03:55:05] doesn't get overloaded with a lot of
[03:55:07] request but based on the request if they
[03:55:10] are present in our secondary indexes
[03:55:12] then only we will entertain them and
[03:55:14] show them the records or fetch some
[03:55:16] records otherwise we will directly skip
[03:55:18] them. Now this kind of setup also have
[03:55:20] its challenges right because
[03:55:22] partitioning is done but secondary
[03:55:25] indexes are also present in each
[03:55:27] partition that means even if the
[03:55:30] partition doesn't have any value we
[03:55:33] still have to send a request to that
[03:55:35] particular partition. This is again a
[03:55:37] drawback of the system which can make
[03:55:39] the system heavy which can send the
[03:55:42] request to many partitions where the
[03:55:44] data is not there and we are still
[03:55:46] getting the request. So this is also
[03:55:48] wrong. So that's why we have a fourth
[03:55:50] and final way of solving this which is
[03:55:53] by having common global index. What we
[03:55:57] will do here is instead of having
[03:56:00] secondary indexes in each and every
[03:56:02] partition we will choose a partition or
[03:56:04] any data center where we will maintain
[03:56:07] the secondary indexes. So if we are
[03:56:10] saying that we want the car with color
[03:56:13] blue, we should know that the blue car
[03:56:15] colors according to the previous
[03:56:17] examples are only 209 305 and here we
[03:56:21] have 509 and 609. And basically this
[03:56:24] belongs to our P1 and this belongs to
[03:56:26] our P2. So we should know this
[03:56:29] firsthandedly so that whenever anyone is
[03:56:32] requesting to get any information about
[03:56:35] blue color car we will directly redirect
[03:56:38] it to P1 and P2 and suppose we have some
[03:56:41] other partitions P3 P4 and others we
[03:56:46] don't send the request there so that
[03:56:48] these partitions can take care of other
[03:56:51] requests. So this is our fourth way of
[03:56:53] maintaining the global index. So with
[03:56:56] this definitely we are going to improve
[03:56:58] our reading but the writing becomes a
[03:57:01] challenge. Why? Because even if we are
[03:57:04] working with partition 79 where we are
[03:57:07] adding some values and again have to
[03:57:09] update that okay we have some new car
[03:57:11] maybe 1011 which is of blue color. So
[03:57:15] like this it is handled. So these are
[03:57:17] the ways of handling partitioning in to
[03:57:19] our system. After understanding about
[03:57:21] partitioning, replication and load
[03:57:24] balancing, we now know that we need to
[03:57:27] segregate our data into multiple nodes
[03:57:29] in order to scale them. We can't scale
[03:57:32] them into a single database after an
[03:57:34] extent. So after understanding this,
[03:57:36] let's see what cap theorem basically
[03:57:39] says. Cap theorem is one of those
[03:57:42] theorems which you have to know whenever
[03:57:44] you think about trade-offs between
[03:57:46] capacity and availability. So first see
[03:57:49] what cap theorem really stands for. In
[03:57:51] cap theorem there are three terms
[03:57:54] basically. C stands for consistency
[03:57:57] whereas A stands for availability and P
[03:58:00] stands for partition tolerance. So CAPS
[03:58:03] theorem basically states that you can
[03:58:05] only provide two of these three
[03:58:07] variables which means if we talk about
[03:58:10] consistency what does it mean?
[03:58:12] Consistency basically means providing
[03:58:14] latest information to every user. So
[03:58:17] consistency stands for latest
[03:58:19] information. Now if we are providing
[03:58:21] latest information, let's see what it
[03:58:23] really means. Let's say this is our
[03:58:25] partition one. This is our partition
[03:58:27] two. Some data is updated on partition
[03:58:31] one and someone is reading that data
[03:58:34] immediately after the updation. So this
[03:58:37] updation from partition one and
[03:58:39] partition two will also take some time
[03:58:42] and at that time we basically show
[03:58:44] something like system is loading or data
[03:58:47] is loading kind of thing to user until
[03:58:50] the change is completed on P2 then only
[03:58:53] we can show the latest data. So this
[03:58:55] means that we will trade off our
[03:58:57] availability of that particular
[03:58:59] information for consistency. The second
[03:59:02] thing is availability. Availability
[03:59:04] basically states that we will always
[03:59:07] respond to every request. Now what does
[03:59:10] this mean? In the same scenario if it is
[03:59:13] taking time to upload a data from P1 to
[03:59:15] P2 and while updating someone request in
[03:59:18] between so they will not see loading
[03:59:21] icon instead they will see the stale
[03:59:23] data. So this is what availability
[03:59:25] means. Now the third term which is
[03:59:27] partitioning. Partitioning we all know
[03:59:29] now we need to divide our data into
[03:59:32] multiple nodes. Right? Now with
[03:59:34] partition we can also see tolerance
[03:59:36] here. What does it mean? Let's say there
[03:59:38] are some nodes attached or linked to
[03:59:41] each other. Now this is partition
[03:59:44] tolerant when the network of this node
[03:59:47] is completely broken. So this can't be
[03:59:50] updated from any other method. We can
[03:59:52] either wait to basically fix this
[03:59:54] partition connection and update the
[03:59:56] value or we can keep it working to
[03:59:59] provide the information but then the
[04:00:01] information we are going to provide is
[04:00:03] going to be stale data. Why? Because the
[04:00:06] connections between this node and the
[04:00:07] other nodes are broken. Now let's talk
[04:00:10] about the combinations one by one. So
[04:00:12] first combination is CA which means we
[04:00:15] are saying that our data will be
[04:00:17] consistent and it will be available
[04:00:19] also. In this case, we can't provide the
[04:00:21] partitioning part because if we are
[04:00:24] saying that our data is consistent and
[04:00:25] available, that means we are maintaining
[04:00:28] a single database. We can't basically
[04:00:30] have two data centers or two nodes and
[04:00:33] think about consistency and availability
[04:00:35] at the same time. Suppose we have
[04:00:37] updated any data here, it is going to
[04:00:39] take at least some fraction of time to
[04:00:41] update the data to other node. So in
[04:00:44] that meantime if someone request about
[04:00:46] that particular data we can't decide
[04:00:49] basically whether to show that data or
[04:00:51] not because if we show that data that
[04:00:53] means we are compromising our
[04:00:54] consistency there and if we don't show
[04:00:57] the data and wait for the update that
[04:00:59] means we are compromising with the
[04:01:00] availability. So this combination is
[04:01:03] only possible when we are working with a
[04:01:06] single database or a single node. We
[04:01:08] can't do partitioning here. With this
[04:01:10] let's move to our second combination
[04:01:12] which is CP. CP means we are choosing
[04:01:15] consistency over availability. So here
[04:01:18] we are saying consistency and
[04:01:20] partitioning will be there but we will
[04:01:22] trade off availability. Now we have
[04:01:24] understood this term. Let me take the
[04:01:26] example again. These are our two nodes
[04:01:29] and the partition happens. Basically the
[04:01:31] connection between these nodes break.
[04:01:33] Now this doesn't have the updated value.
[04:01:36] Now when we are choosing consistency we
[04:01:38] have to let go of the availability. So
[04:01:41] we are saying no request will be
[04:01:43] processed by this node until when until
[04:01:46] it gets updated with the latest data. So
[04:01:48] this is what happens when we are working
[04:01:49] in a partition environment and choose
[04:01:51] consistency over availability. That
[04:01:54] means the request which are calling this
[04:01:56] node will be redirected to some other
[04:01:58] nodes which have the latest or
[04:02:00] consistent data. With this let's see the
[04:02:02] third combination as well which is AP.
[04:02:06] In AP we are providing availability to
[04:02:08] every request right so we are providing
[04:02:11] availability with partitioning. So what
[04:02:14] is going to happen here when there are
[04:02:16] two nodes and the partition tolerance
[04:02:19] happen that means this node doesn't have
[04:02:21] updated no updates at that time also
[04:02:24] because we have chosen availability over
[04:02:26] consistency we will keep addressing the
[04:02:29] request by showing them the stale data
[04:02:31] and that means we are compromising with
[04:02:34] consistency. So why are we learning this
[04:02:36] cap theorem? The cap theorem basically
[04:02:38] states that you have to do some
[04:02:40] tradeoffs in order to keep your
[04:02:42] application working. Suppose we are
[04:02:44] working on Instagram. In Instagram, the
[04:02:46] availability matters over consistency.
[04:02:49] Suppose you have updated a video or a
[04:02:51] photo, it doesn't matter for your
[04:02:53] followers to see that photo immediately.
[04:02:56] They can wait for one or two seconds
[04:02:57] basically. So in Instagram, we will be
[04:03:00] following AP. But in any application,
[04:03:03] let's say banking application where each
[04:03:06] transaction matters to us, where each
[04:03:08] change matters to us. So if I have sent
[04:03:11] 100 rupees to any other account the
[04:03:14] person will have to wait in order to
[04:03:16] process that transaction and after that
[04:03:18] only they will be able to see. So here
[04:03:21] CP matters and for CA will be there if
[04:03:25] we have a single data that means for
[04:03:27] every small application CA can work but
[04:03:30] when the system scales we don't have an
[04:03:32] option to pick CA that's when we have to
[04:03:35] choose between consistency and
[04:03:37] availability. So this is what cap
[04:03:38] theorem is. I hope you all understand
[04:03:40] it. Now let's understand one of the most
[04:03:43] important component of our system design
[04:03:45] which is message Q. Now before going
[04:03:47] into depth of message Q, let's first
[04:03:49] understand the type of request we deal
[04:03:51] with. We normally deal with two type of
[04:03:53] request or we can also say requests or
[04:03:56] maybe processes. Some requests are sync.
[04:04:00] That means whenever the request is
[04:04:02] received, we have to immediately provide
[04:04:04] them some output or response for the
[04:04:07] system to keep working. On the other
[04:04:09] hand, we have async calls, request or
[04:04:12] processes in which we get the request
[04:04:15] but there is no hurry for our responses.
[04:04:18] Also, it is also possible that we don't
[04:04:21] give any response at all. So, so that
[04:04:24] means our system only takes the request
[04:04:28] and basically fulfill the requirement in
[04:04:30] the backend processes. So, in case of
[04:04:32] sync type of calls, request or
[04:04:34] processes, we can't do anything. Our
[04:04:37] system needs to be concentrated on these
[04:04:39] request and have to provide the
[04:04:41] responses as soon as possible which we
[04:04:44] have discussed throughout this courses.
[04:04:46] Now comes the second part which are
[04:04:48] asyncing request. So let's understand
[04:04:50] async process or request with some
[04:04:53] example. Let's say we are an e-commerce
[04:04:56] application. We have some store maybe
[04:04:58] some product is there and finally
[04:05:00] someone purchased this particular
[04:05:02] product. So at the time of purchase what
[04:05:05] are the operations we need to perform.
[04:05:07] First is we need to send some email to
[04:05:10] the user that order is confirmed and
[04:05:12] here are your details. We have to also
[04:05:15] update the inventory so that if let's
[04:05:18] say only one product is left that
[04:05:19] product should immediately be out of
[04:05:21] stock so that there will be no confusion
[04:05:24] for any other record. Other than this we
[04:05:26] also have to inform our delivery partner
[04:05:28] right so that they will start packaging
[04:05:30] and moving the order further now out of
[04:05:33] these three processes or request which
[04:05:36] do you think is the most immediate
[04:05:38] action? So let's see updating inventory
[04:05:41] is one of the crucial task which have to
[04:05:43] be performed immediately. We can't wait
[04:05:45] for it right otherwise it can create
[04:05:47] blunders. So this is definitely a
[04:05:50] synchronous task. But other than that we
[04:05:53] can use some third party email service
[04:05:56] to process the email right. We don't
[04:05:58] have to send the emails immediately.
[04:06:00] Even if the email goes let's say 1
[04:06:02] minute late that is also fine and our
[04:06:05] system will be keep working. Similarly
[04:06:08] for delivery we can say that delivery
[04:06:10] also is an async operation because we
[04:06:12] are not in an hurry. Also our system
[04:06:15] doesn't need to take care of delivery as
[04:06:17] well. So we will simply pass this
[04:06:19] information to any delivery service and
[04:06:21] our current system can basically focus
[04:06:23] on some other task. So this is how a
[04:06:26] distributed environment works. Basically
[04:06:29] we have multiple services who
[04:06:32] communicate with each other in order to
[04:06:34] fulfill the requirement. So if the
[04:06:36] services are different and we have to
[04:06:38] use let's say email with email we can
[04:06:40] also use SMS service or maybe WhatsApp
[04:06:44] service we can use them and these all
[04:06:47] are async kind of calls we don't have to
[04:06:51] stop our system in order to process this
[04:06:53] request so I hope up to now we have
[04:06:56] understood about async and sync kind of
[04:06:58] request and in async why we can use some
[04:07:01] other services and for sync we have to
[04:07:04] wait for the response in order to show
[04:07:06] some immediate data like out of service
[04:07:08] product. Now let's talk about some of
[04:07:10] the examples for sync. Every financial
[04:07:13] application can be an example here.
[04:07:15] Wherever we are concerned about
[04:07:17] security, we can't rely on async kind of
[04:07:21] operation. We have to basically provide
[04:07:23] the communication immediately. The third
[04:07:25] area can be dependent. Wherever there is
[04:07:28] a dependency on one or the other task to
[04:07:31] be performed after a particular task in
[04:07:33] a synchronous manner, we have to
[04:07:35] complete this task in a synchronous
[04:07:37] manner so that the dependent processes
[04:07:40] can also work. For example, we can't
[04:07:43] process any emails for order details
[04:07:46] before processing the order. Once the
[04:07:48] order is processed and confirmed, then
[04:07:50] only we can put down the emails or other
[04:07:53] notifications. So after this let's talk
[04:07:55] about async also. Async request
[04:07:58] basically works wherever we need to
[04:08:00] simply fire our request and our system
[04:08:04] can then forget about that. So this is
[04:08:06] the golden rule to understand what
[04:08:08] system is async or what request is async
[04:08:11] versus sync. Whenever we get the feeling
[04:08:14] or we get the components where we can
[04:08:16] simply fire a request and then our
[04:08:18] system can forget about that we can
[04:08:21] easily move to async calls which will
[04:08:24] not only speed our systems but also free
[04:08:26] our system in order to work on different
[04:08:28] tasks. So some examples on free and
[04:08:31] forget can be broadcasting. Broadcasting
[04:08:34] can be of anything like email
[04:08:35] broadcasting even the matches the live
[04:08:37] matches which we see online on any
[04:08:39] application there also we can feel some
[04:08:42] latency. The latency can be from 0
[04:08:44] seconds to 7 or 8 or 10 seconds also
[04:08:47] based on the network connections you
[04:08:49] have. So broadcasting we have discussed
[04:08:51] email we can write here also we have
[04:08:53] seen SMS or WhatsApp basically any
[04:08:58] communication can be held asynchronously
[04:09:00] also the OTP applications in all the OTP
[04:09:04] application there is a timer and that
[04:09:06] timer is mostly more than 30 seconds why
[04:09:09] because in 30 seconds our system can
[04:09:12] handle this request in an async manner
[04:09:15] so now we have understood sync and async
[04:09:17] let's talk about message cues In order
[04:09:19] to understand message Q, let's take the
[04:09:21] same example. So this is our e-commerce
[04:09:24] application and we are using the service
[04:09:27] for emails. Now on our e-commerce
[04:09:30] application, we are getting some order
[04:09:32] and based on that order we have to send
[04:09:34] emails but in between we will implant
[04:09:38] message Q. In diagrams, message Q is
[04:09:41] denoted like this because it is
[04:09:42] basically a Q and each of these order
[04:09:46] request or email request can be hold in
[04:09:49] the message Q and then through our
[04:09:51] message cues it can go directly to our
[04:09:54] email services. So what our application
[04:09:57] needs to do it will simply dump all the
[04:10:00] email request to our message Q and from
[04:10:02] there the message Q will take care of
[04:10:04] those requests. It is like a buffer or
[04:10:07] we can say broker in between two apps or
[04:10:10] services. Now whichever party or
[04:10:12] application is putting the request into
[04:10:15] message cues are known as producers and
[04:10:19] whichever service is taking the request
[04:10:21] from message cues are called consumers.
[04:10:25] With this producers can also be called
[04:10:27] publishers and consumers can also be
[04:10:30] called subscribers because publishers
[04:10:32] are publishing the message to message Q
[04:10:35] and then subscribers are the message who
[04:10:38] are subscribed to take those request
[04:10:40] from our message Q. So this is how a
[04:10:43] message Q basically works. You may think
[04:10:45] now that why are we using message Q?
[04:10:47] Can't we directly call the consumer or
[04:10:50] the email service from our application?
[04:10:52] Yes, we can call but that will keep our
[04:10:54] system busy. We don't want to keep our
[04:10:57] system busy and we also want that
[04:10:59] whatever request we are sending should
[04:11:01] be taken care. So this two things can
[04:11:04] only be done by a message Q. Now if we
[04:11:07] talk about qualities of message Q before
[04:11:10] writing the qualities I just want to say
[04:11:12] that if you still don't get what message
[04:11:13] cues are just bear with me for some
[04:11:15] minutes and you will be absolutely get
[04:11:18] why do we use message cues. So the first
[04:11:20] quality here is that our message cues
[04:11:23] can basically hold the request.
[04:11:26] Withholding the request, our message
[04:11:28] cues will have to communicate those
[04:11:30] requests to our servers. So they can
[04:11:32] communicate to servers or we can say
[04:11:35] services. Here with this why do we use
[04:11:37] message Q? The reason is it can also be
[04:11:40] used to handle the failed calls. And
[04:11:43] with this one of the major reason of
[04:11:45] using message q is handles the load
[04:11:47] which we are giving to the third party
[04:11:49] or the service application here email
[04:11:51] service. At this point let's talk about
[04:11:54] direct communication again. If we again
[04:11:56] send the request directly from our
[04:11:58] e-commerce application to email services
[04:12:00] that means every time a new order is
[04:12:03] placed this call is going to be there.
[04:12:05] If our email server is down or anything
[04:12:08] that call is going to handle the failure
[04:12:10] case also that will be responsibility of
[04:12:13] our e-commerce application but now since
[04:12:16] we are using message Q these both
[04:12:18] queries and these both troubles will be
[04:12:20] handled by our message Q itself. So we
[04:12:22] don't have to care about the failed
[04:12:24] request also. So now what happens is
[04:12:26] there are various ways of sending
[04:12:28] requests from message Q to the server.
[04:12:31] Normally our message cues follows FIFO.
[04:12:34] We all know about FIFO. FIFO basically
[04:12:36] means first in first out. That means
[04:12:39] whatever request comes first will be
[04:12:42] delivered first to our consumer and this
[04:12:45] is how the series will follow. So in
[04:12:47] this case the first request will be
[04:12:50] taken care and then after that second
[04:12:52] after then third and so forth. So this
[04:12:55] is what the first in first out principle
[04:12:57] is and it is used by our message Q in
[04:12:59] order to process the request. So in FIFO
[04:13:02] we have two approaches. First is strict
[04:13:05] order approach which basically means
[04:13:07] let's say this is our message Q again
[04:13:10] and while processing the orders or
[04:13:12] request let's say first process is
[04:13:15] processed by our consumer done. After
[04:13:18] that we will come to the second one. So
[04:13:20] the second one is also processed. Then
[04:13:22] while processing the third request it
[04:13:25] breaks down. So maybe something is wrong
[04:13:27] with the request or maybe our consumer
[04:13:29] is down for some time. Because of any
[04:13:32] reason our request was not processed. So
[04:13:36] if we are following strict order even if
[04:13:39] anything fails at this level our Q will
[04:13:42] not proceed. Our consumer even if it
[04:13:45] starts working again can't process the
[04:13:48] fourth request. So this is not
[04:13:50] recommended at all because of obvious
[04:13:52] reasons because we want our process to
[04:13:55] keep continue even if one or other
[04:13:58] request fails.
[04:14:00] So the second part solves this issue
[04:14:02] which is unordered Q. So in unordered Q
[04:14:06] what we'll do we will again create like
[04:14:09] this only structure of our message Q. So
[04:14:12] every time our consumer or subscriber
[04:14:14] takes back a request. So 1 2 and even if
[04:14:19] there is some issue with the third
[04:14:20] request our system will jump to the
[04:14:23] other request in order to fulfill that.
[04:14:25] So our consumer will get the request to
[04:14:28] or found the operations. Our system will
[04:14:30] not break. What will happen to the
[04:14:32] thread request? Let's talk about that in
[04:14:34] a bit. So after unordered queue it is
[04:14:36] also possible that the things which we
[04:14:38] are getting in request in the message
[04:14:41] cues maybe our first request, second
[04:14:45] request, third request and fourth
[04:14:47] request between all of them our fourth
[04:14:50] request is like very important to us is
[04:14:53] of high priority and maybe second
[04:14:56] request is also of high priority but not
[04:14:58] first and third. So in this case we
[04:15:00] can't follow FIFO principle right. So
[04:15:02] our consumer needs to get the second and
[04:15:04] the fourth request first. This is where
[04:15:07] we used priority Q. What we will do? We
[04:15:10] will attach a priority like number or
[04:15:14] some ID to every call and whose priority
[04:15:17] is higher those calls will be picked
[04:15:20] first by the consumers. So in this
[04:15:22] structure if we talk about if the
[04:15:24] priority of every call is set let's say
[04:15:27] the priority of first call is 10 the
[04:15:30] priority of second call is maybe three
[04:15:32] the priority of third call is 8 and
[04:15:35] priority of fourth call is 1. So that
[04:15:38] means the first call which are C is
[04:15:40] going to cater is fourth one. After
[04:15:43] fourth it will cater the second call.
[04:15:45] After second it will cater the third
[04:15:48] call and after third it can cater the
[04:15:51] first call also these numbers are in
[04:15:54] ascending order. I have created my
[04:15:56] system in that way that one will be the
[04:15:59] most important priority request but you
[04:16:02] can reverse the order as well. So this
[04:16:04] is how our priority Q is going to take
[04:16:06] request. After understanding priority Q
[04:16:09] there are two more concepts here. So the
[04:16:11] one concept is pull request. So in pull
[04:16:15] request or pull based request what
[04:16:17] happens is whenever we have some data in
[04:16:20] our que let's again put 1 2 3 or some
[04:16:23] random values. Now these request are in
[04:16:27] Q which means that the Q message Q will
[04:16:30] take care of them but the consumer here
[04:16:34] will decide when to pick the request.
[04:16:36] Maybe our consumer is working with some
[04:16:38] other task and the moment it gets free
[04:16:41] it can pull the request. So message Q
[04:16:44] will not send the request to consumers
[04:16:47] or consumer will pull the request
[04:16:49] accordingly. Again the reverse of this
[04:16:52] is pushbased request. In pushbased
[04:16:55] request what happens is the opposite of
[04:16:58] pullbased request which means if we have
[04:17:01] some request in our que message Q is
[04:17:05] going to start the communication with
[04:17:07] consumer and going to push our request
[04:17:09] to the consumers. So here the
[04:17:12] communication starts from message Q and
[04:17:14] in the previous case of pullbased it
[04:17:16] will start with consumer also I can
[04:17:19] change the uh direction of our request.
[04:17:22] So because it is pulling so request will
[04:17:25] come from here. So I hope up to now the
[04:17:27] things are clear. Now let's talk about
[04:17:30] pubs sub models. So in pubsub kind of
[04:17:32] architecture what normally happens is we
[04:17:35] have publishers here who are like
[04:17:37] sending the message to our message cube.
[04:17:40] we have message Q in between and here we
[04:17:43] can have multiple subscribers as well.
[04:17:45] So what we are going to do these public
[04:17:47] shares are going to send some or the
[04:17:49] other message to our message Q which
[04:17:51] will be taken care by our message Q by
[04:17:53] providing them to the subscribers. Maybe
[04:17:56] this is using push and this is using
[04:17:58] pull. So this is how the system works in
[04:18:01] pubsub model. Pubsub is nothing but the
[04:18:03] understanding of our message cues only.
[04:18:05] So in this model we include subscribers
[04:18:08] and publishers as well. Now as discussed
[04:18:11] in the previous example our message Q
[04:18:14] needs to perform some operations in pubs
[04:18:16] model as well. First thing is it will
[04:18:18] hold the request. It will send these
[04:18:21] requests one by one to the subscribers
[04:18:24] and also in case of any failed response
[04:18:28] message Q needs to take care of that.
[04:18:30] With this our message Q is also
[04:18:32] responsible in a way to take care of
[04:18:35] subscribers as well. By taking care I
[04:18:37] mean our message Q needs to check
[04:18:40] subscriber is working or not. If it is
[04:18:42] not working our message Q will not send
[04:18:45] the request to that particular
[04:18:46] subscriber and it will redirect the
[04:18:48] request to maybe some other subscriber.
[04:18:51] This is how the things work. So our
[04:18:53] message Q basically maintains or the
[04:18:55] hold state of the request as well. send
[04:18:59] the request to subscribers. Take care of
[04:19:01] the failed request by using DLQ. We will
[04:19:05] see that in a minute. And also take care
[04:19:07] of the subscribers health. Also keep
[04:19:10] checking whether subscriber is it still
[04:19:12] alive to work or not. We can also say
[04:19:14] that with still alive or not. We can
[04:19:16] also say that our message Q takes care
[04:19:18] of request and takes the response from
[04:19:21] subscribers as well. So that means our
[04:19:23] message Q know which subscriber is
[04:19:25] working fine or fast and which is not
[04:19:28] working that delicately. So every time
[04:19:30] we get a priority queue or a priority
[04:19:32] task, it will be sent to the subscriber
[04:19:34] who is working efficiently. So this is
[04:19:37] what popsup basically is. Let's talk
[04:19:39] about some of the factors which can
[04:19:41] affect popsup. The first thing which you
[04:19:43] can talk about is message order. Let's
[04:19:46] talk about message order. So we are
[04:19:48] saying that all the calls which are
[04:19:50] going to message Q are async calls. Then
[04:19:53] why do we need to maintain order? Okay,
[04:19:55] first thing is that even if we want to
[04:19:57] maintain some order, we know that we can
[04:20:00] use priority Q and this is the only way
[04:20:03] of maintaining any kind of order and
[04:20:05] message Q. There is no other way. Maybe
[04:20:07] it is handled by our application or
[04:20:09] maybe we can add some additional
[04:20:11] information of order in the request
[04:20:13] itself. This is how we can handle
[04:20:15] message orders. Other than that it is
[04:20:17] for async calls where the order doesn't
[04:20:19] matter. The second thing we can talk
[04:20:22] about is how our messages are going to
[04:20:25] be consumed. So we know that publishers
[04:20:28] publish the message and they will store
[04:20:29] in message Q and consumers are going to
[04:20:31] consume this. But how they are going to
[04:20:33] consume this? We are not maintaining any
[04:20:35] order. That means these consumptions are
[04:20:39] random. Maybe out of 100 request the
[04:20:43] consumer can pick up the 100 request
[04:20:45] first. Even if we are using priority Q,
[04:20:48] we can make the priority of 100 requests
[04:20:50] first. So there is no particular order
[04:20:52] in which the requests are going to be
[04:20:54] fulfilled. Consumers can pick any of the
[04:20:58] request any time. Also message Q can
[04:21:00] send any of the request any time based
[04:21:02] on the priority either or it is
[04:21:04] completely random. Let's talk about the
[04:21:06] third factor which is poison message.
[04:21:10] So all the poison messages means all the
[04:21:13] messages that subscribers are not able
[04:21:16] to process maybe because they are bad
[04:21:19] request or maybe invalid. It is also
[04:21:23] possible that they are failing like
[04:21:25] after multiple attempts as well. Also if
[04:21:27] we think about it let's say a request
[04:21:30] failed at the consumer side and then if
[04:21:33] we send those request again and again
[04:21:35] those are going to use or consume the
[04:21:37] consumer's energy and will do nothing.
[04:21:40] Those requests are basically our poison
[04:21:42] request who are taking time and resource
[04:21:44] from our consumer as well as message Q
[04:21:46] but are not able to fulfill. Now at this
[04:21:49] point let's talk about DLQ. So this is
[04:21:52] our message Q. This is our publisher or
[04:21:54] producer we can say and here we have our
[04:21:57] consumer or subscriber. Now let's say we
[04:22:00] have a request which is not being
[04:22:02] processed by our subscriber due to any
[04:22:04] of the reasons. So in this case our
[04:22:07] message Q can't stop. It will send the
[04:22:09] next request but this first request will
[04:22:13] go to a different Q for retry or to
[04:22:17] maintain that this request was failed.
[04:22:19] This Q basically which is maintained by
[04:22:21] our message Q only is called DLQ. DLQ
[04:22:26] stands for dead Q or dead later Q. So
[04:22:30] our message Q maintains this DLQ in
[04:22:32] order to keep track of the failed
[04:22:34] request as well. So that even if the
[04:22:37] publisher have put the async operations
[04:22:40] eventually they will have to know that
[04:22:42] these cases are failed. So we will see
[04:22:45] the failed logs or failed requests
[04:22:47] through any logs from which we will see
[04:22:49] okay this request was failed or other
[04:22:52] than that we can also send some or the
[04:22:54] other information to our publisher in a
[04:22:56] async manner or in a report kind of
[04:22:59] manner where we will give the stats of
[04:23:00] these many requests are passed these
[04:23:02] many requests are failed and here are
[04:23:05] the reasons of the failed request. So
[04:23:07] this DLQ is the mechanisms through which
[04:23:09] our message Q will take care of the
[04:23:12] failed requests as well. I hope you get
[04:23:15] it now. Also poison. Poison means any
[04:23:18] request which can't be processed which
[04:23:20] is using or consuming the resources but
[04:23:22] can't be processed. So with this let's
[04:23:25] move to our fourth factor. Fourth factor
[04:23:28] basically is duplicacy. So if let's say
[04:23:32] our message Q have processed this
[04:23:35] request when it is already processed by
[04:23:37] subscriber one then it should not travel
[04:23:40] to subscriber 2 by any other way because
[04:23:44] the request is already processed it
[04:23:46] should not be processed again. What if
[04:23:49] this request contains some important
[04:23:50] information which can't be done twice.
[04:23:54] So in order to maintain duplicacy our
[04:23:57] message Q only takes care of this thing.
[04:24:00] So with taking care of each request and
[04:24:03] dead request it is also duty of message
[04:24:06] Q that whenever a process is done it
[04:24:09] should be deleted from our message Q so
[04:24:12] that we don't perform any operation on
[04:24:14] that particular request it should be
[04:24:16] deleted and if configured our message Q
[04:24:19] keeps an track of this that there was
[04:24:21] some request which was obtained from P1
[04:24:24] producer and was handled by our S1
[04:24:27] subscriber. So this is how our message Q
[04:24:30] will take care of the duplicacy of the
[04:24:32] request as well. After discussing all
[04:24:35] these things, let's talk about some of
[04:24:36] the use cases like where we can use
[04:24:39] message Q easily and where we should
[04:24:42] avoid using message Q. Let's say if we
[04:24:44] are working on any async kind of
[04:24:46] environment, any async operations, any
[04:24:49] async request, we can easily go for
[04:24:52] message Q. There is no doubt about that.
[04:24:54] Similarly, if we talk about any
[04:24:56] decoupling activity which can be like
[04:24:59] taking care of user analytics, we want
[04:25:01] to see and capture maybe we want to
[04:25:02] capture where our user lands, if our
[04:25:05] order is failing, why they are failing
[04:25:07] and all the log systems. We can easily
[04:25:10] do this with our message Q as well.
[04:25:12] There is no doubt about this. The third
[04:25:15] area can be our load balancing acts. So
[04:25:18] if we think about it, our message Q does
[04:25:21] everything what a load balancer does,
[04:25:23] right? So our message cues can be used
[04:25:27] as load balancers as well where it will
[04:25:30] take care of all the requests. It will
[04:25:32] keep them in a queue and it will provide
[04:25:34] those requests to servers respectively.
[04:25:37] Also we can use the message Q with this
[04:25:39] with the deferred system where we have
[04:25:42] some operations but we can basically do
[04:25:44] them later like generating reports and
[04:25:47] everything after every day we can
[04:25:49] generate some reports or maybe there can
[04:25:51] be any schedule processes for doing
[04:25:53] anything. Let's say we are adding
[04:25:55] products into our catalogs like whole
[04:25:57] day and in the evening we want them to
[04:25:59] be live. So we will schedule a process
[04:26:01] in order to work with them. So the
[04:26:03] message cues can be used with load
[04:26:05] balancer as well as they can be used by
[04:26:07] a deferred system. Now message cues are
[04:26:10] a costly service. So if we don't have a
[04:26:13] lot of request, we should not use
[04:26:15] message cues, right? Because it is a
[04:26:18] costly service and why waste our cost
[04:26:21] when we can use them in a synchronous
[04:26:23] manner or maybe if the request count is
[04:26:25] low, we will directly call the
[04:26:27] subscriber from producers. Like for
[04:26:29] emailing we will directly send the
[04:26:31] request for our email service with this.
[04:26:34] If we are using any realtime application
[04:26:36] we can't use message cues basically.
[04:26:38] Why? Because we need the response to be
[04:26:41] in a synchronous manner. We need the
[04:26:43] response to be immediate and if we are
[04:26:45] using message q our request can take
[04:26:48] some time to basically respond from any
[04:26:51] email service or any other services
[04:26:53] which we are using. So in these cases we
[04:26:55] should avoid using message cues and also
[04:26:57] we should avoid using message cues
[04:26:59] whenever we need some acknowledgement
[04:27:04] because if we need some acknowledgement
[04:27:05] that means our server or our system is
[04:27:09] waiting for some response to get but
[04:27:11] message Q normally doesn't do it in this
[04:27:13] example where we are sending some
[04:27:15] reports this will be also done by some
[04:27:17] or the other intervention of our code
[04:27:20] only so that we can see the processes
[04:27:22] but if we want response from every
[04:27:24] request it can't be done by message Q.
[04:27:26] So whenever we need acknowledgement we
[04:27:29] don't use message cues here and with
[04:27:31] this we have covered about message cues.
[04:27:33] Now let's talk about faults. Whenever we
[04:27:36] think about faults or error we basically
[04:27:39] while building any system or while
[04:27:41] building any software as well we have to
[04:27:43] take care of each and every fault and
[04:27:44] error. Now while studying system design
[04:27:47] we have encountered very components and
[04:27:49] we know what the complexity our software
[04:27:51] also holds. So let's talk about faults
[04:27:54] and error. So our faults or errors can
[04:27:57] be called as in any condition. If our
[04:28:00] system is not responding in a way it
[04:28:02] should respond that means we have some
[04:28:05] issue or some fault or some error with
[04:28:08] our system. We can easily categorize
[04:28:10] them into three categories. The first
[04:28:12] category is hardware. So hardware faults
[04:28:15] are basically belongs to our server.
[04:28:18] Maybe we are using databases. So DB can
[04:28:20] also crash. We are using message cues.
[04:28:23] We are using each and every components
[04:28:24] and every component can fail our system
[04:28:27] if they stops working. So this hardware
[04:28:30] issue or hardware fault is our first
[04:28:32] type. And the nature of our hardware
[04:28:34] failures is it can be random, right?
[04:28:37] Like our system can fail entirely
[04:28:39] anytime. There can be various reasons of
[04:28:42] its failure. We can have like a disk is
[04:28:45] full or something out of memory issue or
[04:28:47] let's say our server is down. We also
[04:28:50] use network cables. So maybe they are
[04:28:52] damaged. Maybe there is an issue with
[04:28:54] the power supply. Maybe one or the other
[04:28:56] node is not configured correctly or
[04:28:58] maybe it is experiencing some spike in
[04:29:00] request. So it is down because of
[04:29:02] overheating also we are using databases.
[04:29:05] So database can also be compromised.
[04:29:07] Right? These all things are basically
[04:29:09] the fault of our hardware. We do have
[04:29:11] some control over it like we can pass
[04:29:13] some alerts whenever we are sensing any
[04:29:16] risk out of them but they are like
[04:29:19] inevitable. Whenever a hardware fails,
[04:29:22] it mostly fails abruptly. That's why we
[04:29:25] use multiple systems in databases as
[04:29:27] well and in terms of servers as well. So
[04:29:30] that if any server crashes or adding
[04:29:32] databases goes down, we can use our
[04:29:35] system by using the other database or
[04:29:37] other server maybe. So this is what the
[04:29:39] hardware issue is. Now let's talk about
[04:29:42] the second category of our issues which
[04:29:45] is software issue. Now our software
[04:29:48] issue can be caused through anything.
[04:29:50] Maybe the code which we are working on
[04:29:52] is written badly. Maybe we have forgot
[04:29:55] to handle any exception or anything.
[04:29:57] Maybe while testing our application, we
[04:29:59] tested all of the cases. But there are
[04:30:01] some edge cases which comes to our
[04:30:03] picture when the user actually uses the
[04:30:05] application. So there can be some edge
[04:30:08] cases. Also while coding in
[04:30:10] microservices or using APIs, we also
[04:30:12] configure them into our configurations.
[04:30:15] Maybe there can be some issue with the
[04:30:17] configuration itself that our systems
[04:30:19] stops responding or maybe not responding
[04:30:21] in a way which it should be responding.
[04:30:24] Other than that we can have some
[04:30:25] deployment issues as well. There can be
[04:30:27] some issues with the development
[04:30:29] environment and the production
[04:30:30] environment mismatch. So something is
[04:30:32] working on production but not working on
[04:30:34] our development or vice versa. These
[04:30:36] things come on a day-to-day basis in a
[04:30:38] life of a software developer. So don't
[04:30:40] worry about this but we have to take
[04:30:41] care of this and this is our software
[04:30:44] issue or software fault we can say with
[04:30:46] this if I have to write any other thing
[04:30:49] uh one of the major pain points can be
[04:30:51] merge requests. So let's say two
[04:30:53] developers working on similar feature or
[04:30:55] same file parallelly and when the code
[04:30:58] compiles of both of them we need to
[04:31:00] thoroughly test both of the
[04:31:02] functionalities so that it doesn't break
[04:31:04] down each other on the production or on
[04:31:06] staging or on any environment. So this
[04:31:09] is one of the most painoint thing of any
[04:31:11] developer. Other than that a software
[04:31:13] fault or software issue can be let's say
[04:31:16] our request are taking too much time. So
[04:31:18] the performance is also something which
[04:31:21] software should take care of. But the
[04:31:23] good and the bad thing about software
[04:31:25] issues is that it is not random. There
[04:31:28] has to be something in the configuration
[04:31:30] or code file which we can find out and
[04:31:32] solve that issue also. This is not
[04:31:35] random. This is a good thing so that we
[04:31:37] can find out the issue. But with node
[04:31:39] random it is also deterministic which
[04:31:42] means by following the same steps we can
[04:31:45] get that proper error again and again
[04:31:48] and if that error is not fixed sooner
[04:31:50] that can basically break our system or
[04:31:52] give a bad experience to our users. So
[04:31:55] we need to fix software issues very
[04:31:58] carefully and ASAP. Now the third fault
[04:32:01] is not really a fault but it comes into
[04:32:04] the category of fault and is considered
[04:32:06] the most important faults in our system
[04:32:09] which is human fault. We know that every
[04:32:12] human is unpredictable and we don't have
[04:32:15] any control over oursel. We can do
[04:32:17] basically anything. So this kind of
[04:32:20] issue or error can cause
[04:32:22] unpredictability.
[04:32:23] Why? Because humans are considered to be
[04:32:26] most unreliable components of software
[04:32:29] development among all every component
[04:32:31] whenever they are failing or not working
[04:32:34] give us an alert beforehand. But with
[04:32:37] humans it is sometimes possible
[04:32:39] sometimes not possible based on the
[04:32:40] value of that particular developer or
[04:32:43] anyone attached to the software
[04:32:44] development cycle. But with saying these
[04:32:46] all things about developers or humans,
[04:32:49] we also need to know that it is one of
[04:32:51] the most powerful component or person in
[04:32:54] the software development life cycle. If
[04:32:57] human stops working, nothing is going to
[04:32:59] work. Even if the code is written by AI
[04:33:02] agents or AI anything cloud, open AI or
[04:33:05] any other open source, it is still needs
[04:33:08] to be rectified by human only because we
[04:33:11] need some accountability over that code
[04:33:14] because that code is going to build a
[04:33:16] project which is going to be used by
[04:33:17] humans only. So we need human in between
[04:33:20] all these processes. So this is one of
[04:33:23] the most powerful thing that means that
[04:33:25] makes us responsible for handling the
[04:33:28] code even more. So these are the three
[04:33:30] categories in which we divide our faults
[04:33:32] normally into the software issue, the
[04:33:34] hardware issue and the human fault or
[04:33:37] human error. Human issues can be solved
[04:33:40] by having good behavior or not doing the
[04:33:42] bandage fixes or quick fixes in the
[04:33:45] wrong manner but going deep into the
[04:33:47] system and fixing the thing entirely for
[04:33:50] each and every area. Also by software
[04:33:52] issues we should not write bad code.
[04:33:54] Handle exceptions properly. See the edge
[04:33:57] cases. Maybe do testing thoroughly of
[04:33:59] each and every component every time you
[04:34:01] make a build. It can be solved right.
[04:34:04] Also deployment issues can be solved if
[04:34:05] you configure each and every environment
[04:34:07] variable carefully. There can be other
[04:34:09] configurations for databases or for
[04:34:11] other APIs which can be configured on
[04:34:14] development environment as well in order
[04:34:16] to replicate that issue and eventually
[04:34:18] solve it. Now if we talk about
[04:34:20] hardwares, hardwares are something which
[04:34:22] we don't have any control on. So if any
[04:34:24] hardware is going down, it is mostly
[04:34:27] unpredictable. So this is also a danger
[04:34:30] point. That's why we have to scale our
[04:34:32] system in order to handle the system
[04:34:34] perfectly or in a better manner. So this
[04:34:37] is all about faults and errors. Now
[04:34:40] let's understand about the last topic of
[04:34:42] system design which is most important
[04:34:45] but many playlist skip this one. This is
[04:34:48] our monitoring and observability. We all
[04:34:51] know that in our product life cycle, our
[04:34:53] product is once developed will be
[04:34:55] deployed to any of these servers and
[04:34:58] then will be maintained. Now creating a
[04:35:01] product is entirely different from
[04:35:03] maintaining that product. Here we don't
[04:35:05] have to maybe change a lot of code and
[04:35:08] add lot of features but we have to keep
[04:35:10] monitoring whether our product is
[04:35:13] working fine or not. So we have to take
[04:35:15] care of these following things. Are
[04:35:17] there any errors in our system or not?
[04:35:19] Is every component basically is working
[04:35:21] fine or not? How is the health of each
[04:35:24] and every server, every component, every
[04:35:26] database? If there are coming edge cases
[04:35:29] or any errors in our system, are we
[04:35:31] recording them correctly? Do we have
[04:35:32] logs in place so that each and every
[04:35:35] customer request can be tracked and can
[04:35:37] be seen whether they are working fine or
[04:35:39] not? And if there is any error can we
[04:35:41] like go to the RCA of that particular
[04:35:44] error so that our developer can debug
[04:35:46] and perform the required operation and
[04:35:48] also if any other component is going
[04:35:51] down or basically down at this
[04:35:53] particular moment. Do we have other
[04:35:55] systems in place who will take care of
[04:35:56] the system and also do we have proper
[04:35:59] alert systems so that we can rectify or
[04:36:01] get these messages beforehand so that we
[04:36:04] can take care of the situation in a
[04:36:05] better way. So we need to take care of
[04:36:07] all of these things plus more in the
[04:36:09] maintenance phase or while maintaining
[04:36:11] our application. For example, let's talk
[04:36:13] about microservices. So one micros
[04:36:16] service can do two operations, right?
[04:36:18] Either it can handle a request and work
[04:36:21] on it or the other thing it can do is it
[04:36:24] can even redirect the request to any
[04:36:26] other microservices. So in this case we
[04:36:28] have to monitor two things. The first
[04:36:30] thing is how our APIs are performing.
[04:36:33] And while handling any request or
[04:36:35] whenever a micros service or a server is
[04:36:38] working on anything, we need to also
[04:36:40] check how it is affecting our machine
[04:36:43] like how much memory it is consuming,
[04:36:45] what are the consequences of this
[04:36:47] particular request. If it gets
[04:36:49] overloaded or something so we have to
[04:36:51] take care of the machine as well as the
[04:36:53] APIs at the same time. Now let's talk
[04:36:55] about both of them one by one. So if we
[04:36:58] talk about API monitoring the first
[04:37:00] thing we need to check is our
[04:37:02] throughput. Now what is throughput?
[04:37:04] Throughput basically means how many
[04:37:06] request can our server handle. Let's say
[04:37:09] our server can handle 10k request per
[04:37:12] second. So that means if our server is
[04:37:16] already hitting 9k or maybe 8k
[04:37:19] responses, we have to configure some
[04:37:21] alerts in order to know whether we are
[04:37:23] going to hit our throughput or not. and
[04:37:25] maybe we will migrate the data or the
[04:37:27] request to some other servers at that
[04:37:29] particular time because we need this
[04:37:31] server to perform or to be alive. The
[04:37:34] other thing which we can monitor while
[04:37:36] using the APIs can be our error codes
[04:37:39] like we all know about 500 issues and
[04:37:43] 400 issues and maybe we are using some
[04:37:46] redirects also. So 300 issues as well.
[04:37:49] We need to know how many 500s are we
[04:37:51] getting? How many 400 requests are we
[04:37:53] getting? How many 300 requests are we
[04:37:56] getting? So the first thing is when we
[04:37:57] are getting too many error things, we
[04:38:00] need to know the RC of it. So that means
[04:38:03] our logging should be in places so that
[04:38:05] our developer can work. One thing is
[04:38:06] that also we need to put some alert
[04:38:09] whenever the count increases after a
[04:38:11] particular point so that we can get to
[04:38:13] know about the 500 issues or 400 issues
[04:38:16] or 300 issues and fix them accordingly.
[04:38:18] Third thing is our health check. So in
[04:38:21] order to check health of any components
[04:38:24] we have already seen that we can do it
[04:38:25] by two ways passive and active. So we
[04:38:28] have to constantly monitor the 200
[04:38:31] responses as well and see if our
[04:38:34] component is in a working condition or
[04:38:36] not and is giving the positive replies
[04:38:38] or not. The fourth thing is to check our
[04:38:41] latency. Latency is a very good metrics
[04:38:44] in order to check the performance of any
[04:38:46] system. How can we check the latency?
[04:38:48] Suppose we have some 10 requests and
[04:38:51] suppose these values are the response
[04:38:53] time of those APIs. Now we need to know
[04:38:57] the response time of our particular
[04:38:59] server of our particular API system. So
[04:39:03] how do we calculate them? If we use
[04:39:05] let's say average the average gives the
[04:39:07] wrong value because let's say our
[04:39:09] average value for this will come to 6.8
[04:39:12] seconds right? But if we see most of our
[04:39:16] requests are being handled in a much
[04:39:18] lower rate. So this average value
[04:39:20] basically gives a wrong impression of
[04:39:23] our services. So apart from average we
[04:39:26] check P values. What is P? P basically
[04:39:29] stands for percentile. So what is a
[04:39:32] percentile? Percentile basically says if
[04:39:34] we are writing P90 we are saying that
[04:39:38] our 90% of the request can be handled in
[04:39:42] a particular seconds or maybe
[04:39:44] millisecond whatever the time is in our
[04:39:46] current example if we arrange them in an
[04:39:48] ascending order uh something like this
[04:39:50] we can see that we have 10 requests and
[04:39:52] P90 will be calculated here and all of
[04:39:56] the requests like 90% of the request
[04:39:58] will take lesser time than this time so
[04:40:01] this is a 12 seconds maybe. So let me
[04:40:04] also remove this milliseconds for a bit.
[04:40:06] 12 seconds should not be idle time for
[04:40:08] any API response. This is just for the
[04:40:10] example. Okay. Similarly, if we talk
[04:40:12] about let's say P50 here, P50 will be 4
[04:40:16] seconds, right? So that means 50% of our
[04:40:19] request are currently covered under 4
[04:40:22] seconds. So we can see that P50 is 4
[04:40:25] second and somehow P90 is 12 second.
[04:40:28] That means something should be off
[04:40:29] between these two. We have to check all
[04:40:31] the APIs which are giving us the
[04:40:33] response of near 12 seconds and we have
[04:40:36] to basically optimize them and improve
[04:40:38] the performance of our entire system.
[04:40:41] Again these P90, P50, P70, P maybe 99.9
[04:40:47] when we have a large system and a lot of
[04:40:49] calls. So all these matrices and values
[04:40:52] percentiles help us in jot down how our
[04:40:55] system is working in a majority version
[04:40:58] and also we can optimize the performance
[04:41:00] of our system by checking the
[04:41:02] differences of different P values. So it
[04:41:05] is very useful in case of optimizing our
[04:41:07] code as well and also we need to know
[04:41:09] how our system is eventually working. So
[04:41:12] so this is what percentile is used for
[04:41:14] and we use it to calculate the latency
[04:41:17] of our project. Again here also we can
[04:41:19] provide some alert system. Let's say our
[04:41:22] P90 here is 12 seconds and if our
[04:41:25] responses are taking 50 second or
[04:41:27] something we should get an additional
[04:41:30] alert because this is an unusual
[04:41:32] behavior for us now. So this is how we
[04:41:34] take care of latency of our system as
[04:41:36] well. So after APIs let's talk about
[04:41:39] machine monitoring. By machine I mean
[04:41:41] hardware right? The factors of measuring
[04:41:44] how our hardwares are working. The first
[04:41:46] factor if we talk about it can be our
[04:41:49] CPU usage like how much power has been
[04:41:51] consumed by that particular operation or
[04:41:54] that particular hardware while doing
[04:41:56] some particular operation and if that
[04:41:58] usage basically exceeds any limit let's
[04:42:01] say I'm taking an example of 75 maybe
[04:42:03] you can take 70 90 accordingly we should
[04:42:06] get an alert that your CPU usage is
[04:42:09] already attained a 75% so you need to
[04:42:12] take care of the systems again the other
[04:42:14] thing can be memory usage Let's say
[04:42:17] already we have consumed 90% of the
[04:42:19] memory. So we know now that our database
[04:42:23] will not be able to hold more values. So
[04:42:25] we need to immediately either scale our
[04:42:27] system or we need to see whether we are
[04:42:30] getting some error or not. Similarly we
[04:42:32] have a lot of input output operations as
[04:42:35] well. So we have to take care of disk IO
[04:42:37] operations as well as network also. In
[04:42:40] both of these cases, we can set the
[04:42:42] limit and once the limit is exceed, we
[04:42:45] can send alerts accordingly. So this is
[04:42:47] all about monitoring our APIs and
[04:42:50] machine. Now let me give you a quick
[04:42:52] recap of all the things which we have
[04:42:53] discussed so far. We have discussed
[04:42:55] about system design. What is system
[04:42:57] design? What are the different
[04:42:59] components of system design? Then we
[04:43:01] have discussed about data inensive and
[04:43:03] compute intensive applications. Then
[04:43:05] functionality and non-functionality
[04:43:07] requirements. What is DNS APIs? We have
[04:43:11] also understood REST APIs in details.
[04:43:13] After that we move on to DB or SQL and
[04:43:16] NoSQL DB with detail also cach and their
[04:43:20] strategies of eviction as well as how do
[04:43:22] we store the data in cach. We have
[04:43:24] completed all the cache part very
[04:43:26] extensively so that we don't get any
[04:43:28] issues afterwards. We have also covered
[04:43:30] load balancing and load balancer in
[04:43:32] which we have talked about how a load
[04:43:34] balancer acts as a mediator between the
[04:43:37] coming request and the request which
[04:43:39] bends to server. Also it works as an
[04:43:42] orchestration between different servers
[04:43:44] and take care of each and everyone's
[04:43:46] health. With that we have covered
[04:43:48] various forms of replication
[04:43:49] partitioning. Ultimately one of the most
[04:43:52] important theorems which you are going
[04:43:54] to cover in each and every interview
[04:43:56] that is cap theorem. whether you'll
[04:43:58] choose availability over consistency or
[04:44:01] vice versa. After cap theorem, we have
[04:44:04] covered message cues, fall tolerance and
[04:44:07] then we had a brief discussion about
[04:44:09] monitoring and observability also. So
[04:44:11] with all these topics, now we are ready
[04:44:14] to give any interview or to design any
[04:44:18] system design component which we want
[04:44:19] to. We have a solid foundation now. Now
[04:44:22] we can design any system. So
[04:44:25] congratulations, you have unlocked a new
[04:44:27] trick, a new component, a new system in
[04:44:30] your resume, in your abilities. Also, if
[04:44:33] you feel like I have missed any point or
[04:44:35] any topic, please mention that in the
[04:44:37] comment. I may make a video of it in the
[04:44:40] coming days. With this, let's move to
[04:44:42] the last part of our video, which is
[04:44:44] designing a system. So whenever you
[04:44:47] appear in an interview of system design
[04:44:49] or maybe you will design a system by
[04:44:51] yourself, it is very important to think
[04:44:54] out loud. So you have to take your
[04:44:56] decisions very specifically. No one is
[04:44:58] looking for the perfect solution. But
[04:45:00] everyone here is looking for what are
[04:45:02] the tradeoffs you make, what are the
[04:45:04] components you use. Also when I'm
[04:45:06] talking about components, whenever you
[04:45:09] are using a component, it is very
[04:45:11] important that you use it for the right
[04:45:13] reasons. Just because you know about all
[04:45:15] the components, it is not recommended to
[04:45:18] add all the components into your system
[04:45:20] because remember every component you add
[04:45:23] will add the costing of your system
[04:45:25] also. So we have to use the component
[04:45:27] and design the system very efficiently
[04:45:30] so that it can be cost efficient as well
[04:45:32] as work efficiently to solve our
[04:45:35] purpose. So for now let's design a video
[04:45:38] streaming application. So see we already
[04:45:41] have a lot of applications. We have
[04:45:43] YouTube for streaming. We also have
[04:45:46] let's say Hot Star, Netflix, Prime.
[04:45:50] Also, if we talk about streaming
[04:45:51] applications, we can also say Gme is
[04:45:54] also a streaming application because we
[04:45:56] can do the live streaming. Uh we can
[04:45:58] call it a Zoom call or a Ge also. So,
[04:46:01] Zoom can also come into this category
[04:46:03] where we stream our video live to other
[04:46:06] members. So, a call is basically also an
[04:46:10] example of a streaming application. Now
[04:46:12] with this we can also use LMS or any
[04:46:14] other software for streaming our data.
[04:46:17] We can have more applications. I'm just
[04:46:19] jotting this down so that you get the
[04:46:21] idea of the applications which use
[04:46:23] streaming. Now before starting it is
[04:46:26] very important to jot down the
[04:46:27] requirement. So for our video we doesn't
[04:46:30] care about user login. We don't care
[04:46:33] about their reviews and maybe rating
[04:46:36] also. We don't care about any other
[04:46:39] operation but we only need to know how a
[04:46:42] video basically process from one system
[04:46:45] to finally our client system. This is
[04:46:49] what we need to know in this particular
[04:46:51] example. Now whenever you appear on an
[04:46:54] interview also it is very important to
[04:46:55] jot down the requirement because let's
[04:46:58] say they give you an example of
[04:47:00] designing any software like Netflix. You
[04:47:03] need to know what are the features the
[04:47:05] interviewer is interested in with that
[04:47:08] while creating your systems also you
[04:47:10] need to know specifically what you are
[04:47:12] designing because you may be designing
[04:47:14] an entire LMS but for that moment you
[04:47:17] need to pick feature by feature and
[04:47:19] design each component and at the end
[04:47:22] maybe collect all the findings and
[04:47:24] create a system. This is how every
[04:47:26] system is built. Now here we only are
[04:47:29] talking about this process of getting a
[04:47:32] video to our client system from any
[04:47:34] server or from any other source. Okay.
[04:47:37] So let's start from very basic. What is
[04:47:40] a video? A video is nothing but a
[04:47:42] collection of different images we can
[04:47:45] say and with this we also have some
[04:47:47] audio here. So different images are
[04:47:50] combined with audio to create a video.
[04:47:52] Okay. So in order to calculate different
[04:47:54] images we can see FPS or frame per
[04:47:57] second. We can have 30 or 60. These two
[04:48:01] things are available also we can use 120
[04:48:03] or 240 if they are available. I'm not
[04:48:05] that sure about it but yeah these two
[04:48:08] frame rates are quite common in our
[04:48:10] day-to-day life. So what does it mean to
[04:48:13] have 30 and 60 fps? Basically in 1
[04:48:16] second if we are using 30 fps our video
[04:48:20] will be divided into 30 images and if we
[04:48:24] are using 60 for 1 second it will be
[04:48:26] divided into 60 images. So that means
[04:48:29] the size of 60 fps will be more than
[04:48:33] that of a 30 fps video. But if we talk
[04:48:35] about the video smoothness also the
[04:48:38] 60fps video will be more smoother than a
[04:48:42] 30fps video. Now with this let's stick
[04:48:44] to 30fps thing. Let's say a size of a
[04:48:48] normal video let I like I am recording a
[04:48:51] video in 30 fps right now. My recording
[04:48:55] let's say went for 1 hour and for the 1
[04:48:58] hour recording video the size of my
[04:49:00] recording is basically around 2 GB. So
[04:49:05] if let's say you are watching this video
[04:49:07] and if you want to download the entire
[04:49:10] video in the start before playing and
[04:49:12] then you play what will happen it will
[04:49:16] add latency to our system because
[04:49:18] downloading 2GB will take time for sure
[04:49:21] also you have to see buffer and let's
[04:49:24] say you downloaded all the 2GBs of
[04:49:26] content into your system just to see a
[04:49:28] particular section or maybe you see the
[04:49:30] first 10 second of the video and didn't
[04:49:32] like it so you wasted your internet and
[04:49:34] storage. So this is not a good option to
[04:49:37] download 2GB entirely first hand and
[04:49:39] then see a video. It is completely waste
[04:49:42] of time. So we have to think about
[04:49:43] something else. So the thing is here we
[04:49:46] have to use some network which is
[04:49:48] suitable for our system. So in order to
[04:49:51] process information in video or images
[04:49:53] form we normally go for TCP because TCP
[04:49:56] maintains a sequence of things. Why do
[04:49:59] we need sequence? Let's see in a bit. So
[04:50:01] in TCP we have two protocols. One is
[04:50:05] RTMP which is realtime messaging
[04:50:07] protocol and the other one is RTSP which
[04:50:10] is realtime streaming protocols. Both of
[04:50:12] these protocols basically help us in
[04:50:14] order to stream a particular video to
[04:50:16] our device. Now what this protocol does
[04:50:19] is let's say we have a complete video
[04:50:21] here. It is going to divide our video
[04:50:24] into different chunks called as
[04:50:26] segments. And our client machine or the
[04:50:29] server from which we are watching is
[04:50:31] going to pull these segments one by one.
[04:50:34] Now in message cues we have talked about
[04:50:36] pull and push. This time I'm saying
[04:50:38] pull. So just connect the dots. Keep
[04:50:40] connecting the dots while I'm saying
[04:50:41] things. Okay. So this is going to pull
[04:50:43] our segments one by one based on the
[04:50:46] network. Now we'll come to this part in
[04:50:48] a bit. So this will solve our issues.
[04:50:51] This will give us a low latency because
[04:50:54] we don't have to download the entire
[04:50:55] video. We can download some segments
[04:50:57] also. With this, we'll now be able to
[04:50:59] stream in a much better way and it will
[04:51:02] be more efficient than downloading the
[04:51:04] entire video which was consuming our
[04:51:06] resources and network bandwidth. Now
[04:51:09] this time we have to only download some
[04:51:11] segments which is going to be more
[04:51:13] efficient because this time we are
[04:51:15] downloading in parts. So suppose we are
[04:51:18] watching one video first 10 second is
[04:51:20] over and now we don't want to watch the
[04:51:23] entire video. So maybe some or the other
[04:51:25] sections will be pre-downloaded for us
[04:51:28] so that if we go ahead we don't see
[04:51:30] buffer but we don't have to download the
[04:51:32] entire video which will save us a lot of
[04:51:34] space and not of network bandwidth as
[04:51:37] well. Now with FPS we also have one more
[04:51:40] factor which change the game entirely
[04:51:42] which is resolution. With videos we have
[04:51:46] different resolutions right? We can use
[04:51:48] 4K, we can use HD, we can use maybe
[04:51:52] 720p,
[04:51:53] we can use 480p or 240 or even 144p.
[04:51:59] Even 64p was an option. I'm not sure
[04:52:01] whether our video will be able to render
[04:52:03] in that quality or not. I have like way
[04:52:06] before when I was in school maybe I saw
[04:52:09] that after that I didn't. So yeah, these
[04:52:11] are all the resolutions on which we can
[04:52:14] see our video. 4K will obviously have
[04:52:16] better quality and 144p is going to have
[04:52:21] bad quality. But why are we talking
[04:52:23] about resolutions is even if let's say
[04:52:26] we are streaming a 4K video which I
[04:52:30] already said for 1 hour video we need to
[04:52:33] store it in 2GB space. Suppose we divide
[04:52:36] this into multiple segments for each
[04:52:39] second then 1 second will be 0.57
[04:52:42] MB. Now this looks small but is a huge
[04:52:45] size. If we talk about network, what if
[04:52:47] we have a poor network? What if we are
[04:52:50] traveling? So our network is keep on
[04:52:52] fluctuating on a different level. Also
[04:52:54] if we sit by working on an office or on
[04:52:56] a system, our networks keep on
[04:52:58] fluctuating as well. So that means we
[04:53:01] are not going to have a common bandwidth
[04:53:04] throughout our video viewing experience.
[04:53:06] So our network will keep on increasing
[04:53:08] and decreasing. So we have to take care
[04:53:10] of that also. Let's say I record videos
[04:53:13] in HD only and if I start recording in
[04:53:17] 4K that means the size of 2GB can become
[04:53:21] big right the 2GB can go to 4GB maybe I
[04:53:25] use multi-cam setups at that time the
[04:53:27] 4GB can also go up to 8 GB maybe also in
[04:53:31] my videos I'm not doing much activity
[04:53:33] the frames are pretty still only my hand
[04:53:36] movements can be shown once in a while
[04:53:38] I'm sitting still I'm just facing the
[04:53:40] camera or the screen I'm not doing much
[04:53:42] activities also the screen you are
[04:53:44] seeing is black on which I am writing in
[04:53:46] white so there are no colors also so
[04:53:49] this is pretty easy video to see but if
[04:53:52] I start recording outside or maybe I
[04:53:54] start recording any action sequence so
[04:53:56] in that case the size can also get to 16
[04:53:59] GB for the same 4K video of 1 hour so
[04:54:03] this size can also be increased to four
[04:54:06] times so that will be around 4 MB so the
[04:54:09] issue here is for Even 1 second video we
[04:54:12] are using 4 MB and if our network is not
[04:54:15] that good we are still going to see
[04:54:17] buffer or face loading issues which is
[04:54:20] going to basically ruin the experience
[04:54:22] of our viewer and they will leave the
[04:54:24] application. This is not what we want
[04:54:27] entirely right so we have to do
[04:54:29] something about it also if you think
[04:54:30] about it there are different screens on
[04:54:32] which we work on. We may be watching
[04:54:34] something on TV. We may be using our
[04:54:36] laptop screen. Uh also we can use our
[04:54:39] mobile screen. Maybe our watch as well.
[04:54:42] Maybe we are seeing it on iPad. We don't
[04:54:44] want 4K qualities in all of them. Right?
[04:54:47] Let's say we are watching on watch. We
[04:54:49] don't want 4K. Maybe on watch 480 works
[04:54:53] fine. And also on iPad also I don't
[04:54:56] think 4K is required. Maybe we can show
[04:54:58] them in HD and it will be enough. On TV
[04:55:01] we basically require 4K like we don't
[04:55:03] have to compromise here. But on laptop
[04:55:06] also we can switch between HD and 4K. We
[04:55:09] can choose we can pick based on the
[04:55:11] requirement or based on the
[04:55:12] configuration based on the network also.
[04:55:14] On mobile also we can work pretty well
[04:55:17] with HD. We don't need 4K here as well.
[04:55:20] So that means not only network but based
[04:55:22] on our screen size we can change the
[04:55:25] resolution of our video. So why are we
[04:55:27] changing? because it is going to reduce
[04:55:29] the size of our segment and the lesser
[04:55:32] the size the faster it will be to show.
[04:55:34] So in order to maintain streaming we
[04:55:36] have one mechanisms which is adaptive
[04:55:39] bit rate streaming. What it basically
[04:55:41] conveys is let's say you start watching
[04:55:43] a video on 300 Mbps and your networks
[04:55:47] keep on fluctuating maybe it went down
[04:55:49] till 10 Mbps. So when the network
[04:55:52] fluctuates we can't download with the
[04:55:54] same consistency and if we are not able
[04:55:56] to download with the same consistency
[04:55:58] there is high chance of seeing the
[04:56:01] buffer icon and we don't want that. So
[04:56:04] in order to achieve this what can we do?
[04:56:06] We have a source video of 4K right we
[04:56:10] have to divide this video into different
[04:56:13] segments that we know also we have to
[04:56:16] divide those segments into different
[04:56:18] qualities. So for example this 4K video
[04:56:21] is divided into 10 segments of 4K
[04:56:24] quality. But now also we have to divide
[04:56:26] these segments into more configurations
[04:56:28] the lower configurations. Now our basic
[04:56:32] resolutions and segments are ready. Now
[04:56:34] let's see in real time how our function
[04:56:37] really works. So let's say here we have
[04:56:39] our client who is watching something on
[04:56:42] our desktop screen. In starting the
[04:56:44] network connection was 300 Mbps. So we
[04:56:48] start showing them the 4K video. So it
[04:56:51] sees segment one, maybe segment two also
[04:56:54] watches and then the network drops to 10
[04:56:57] Mbps. So at this point maybe this is
[04:57:00] already loaded into their system in the
[04:57:02] form of cach. So they can still see this
[04:57:04] section into 4K but after that we need
[04:57:07] to load the data again and the network
[04:57:09] is now at 10 Mbps. So we can't load the
[04:57:13] 4K data. What we will do? we will load
[04:57:16] the lower configuration data. Maybe
[04:57:18] according to this we will pick 480B.
[04:57:22] So we will start downloading this data
[04:57:24] and once the network restores to maybe
[04:57:26] 300 or 150 Mbps we will start switching
[04:57:30] our configurations accordingly. So we
[04:57:33] can go to 1080p as well. And if it then
[04:57:37] drops to 50 Mbps, we can still give them
[04:57:40] 720p. And at the end, if network
[04:57:44] basically restores to 300 Mbps, we can
[04:57:47] show them the last segment in 4K again.
[04:57:50] So this is how any YouTube or any other
[04:57:53] stream basically works. They will keep
[04:57:55] switching our quality based on our
[04:57:57] network bandwidth because we are mostly
[04:57:59] seeing that entire video on a single
[04:58:02] screen and based on our network they
[04:58:05] will keep switching the qualities and we
[04:58:07] see the entire video into one go without
[04:58:10] seeing the much difference there because
[04:58:12] normally the network doesn't drop so
[04:58:14] drastically. We just keep these segments
[04:58:17] in order to show them into different
[04:58:18] devices. If you pay attention in most of
[04:58:21] the streaming applications where you are
[04:58:23] seeing the video in the side corner you
[04:58:26] also see a segment where you can switch
[04:58:28] your configurations. Again you can
[04:58:31] choose between auto maybe HD or maybe
[04:58:35] they will directly use the configuration
[04:58:37] that is 720p or 480p
[04:58:40] something like this. So you can choose
[04:58:43] between them and if you choose auto they
[04:58:46] are going to perform this orchestration
[04:58:48] or this game while you watch the entire
[04:58:50] video. So what did we see here? If the
[04:58:54] network throughput that means our
[04:58:55] network speed is greater than the bit
[04:58:58] rate of the downloaded segment that
[04:59:01] means we have downloaded in a lower
[04:59:03] quality and now network is greater than
[04:59:06] that. So we can now switch to a better
[04:59:10] quality. Similarly, if the network
[04:59:12] throughput is less than the bit rate of
[04:59:18] downloaded segment. So in this case,
[04:59:20] what we will do? We will switch down the
[04:59:23] quality of our video. So after getting
[04:59:26] all this knowledge, after discussing all
[04:59:28] these things with your interviewer or
[04:59:30] with your team, then you start deciding
[04:59:33] what components do you use in your
[04:59:34] system design. Now the path is very
[04:59:37] clear, right? We need to store the
[04:59:39] current data or the actual data
[04:59:42] somewhere. Maybe this is our CDN where
[04:59:44] the actual data or the actual video is
[04:59:47] uploaded and it is uploaded from where?
[04:59:49] From any server. Now from here we need
[04:59:51] to create the segments. So that means we
[04:59:53] need to give this data to a service
[04:59:56] which can basically transform our video.
[04:59:59] So we can name that we can say it is a
[05:00:01] transformation service. Now after this
[05:00:03] we have to send the segments to our
[05:00:06] queue. We can use priority Q here right?
[05:00:09] So we can create a Q and why we are
[05:00:12] using priority Q you need to answer
[05:00:13] yourself. Now from this message Q our
[05:00:17] system is going to use the services of
[05:00:20] downgrading each and every quality. So
[05:00:23] we use worker term here. Worker is
[05:00:26] basically used in order to denote
[05:00:27] another service. So we may be using
[05:00:30] worker one for downgrading it to HD.
[05:00:33] Also we can use worker 2 for maybe
[05:00:36] downgrading it to 720p and so forth. So
[05:00:40] after working with these resolutions
[05:00:42] again we need a message Q to store the
[05:00:44] results into segments and again we need
[05:00:47] a priority queue here. Okay with this we
[05:00:50] will send this request to a distributed
[05:00:52] CDN kind of services from where it can
[05:00:55] go into different part of our servers.
[05:00:57] So if someone is watching from India,
[05:01:00] they can access the data from this
[05:01:02] server and they can watch it from US
[05:01:04] server and the other servers are for
[05:01:06] other regions. Now by doing this we have
[05:01:09] completed the entire system design of
[05:01:11] our video streaming application and from
[05:01:14] this server eventually we are going to
[05:01:17] access it on a client machine on which
[05:01:19] our user is going to watch their video.
[05:01:22] So now after creating this diagram let's
[05:01:24] also do some maths. Let's say our source
[05:01:27] video is of 50GB and it is of 20
[05:01:31] minutes. So it is a high quality video
[05:01:34] maybe 4K and it is having 60 fps. So
[05:01:37] that's why the size is too big. So this
[05:01:39] is we are taking as an average size of
[05:01:42] the video which we are going to stream.
[05:01:43] Maybe we are streaming an entire match.
[05:01:45] So this is the size which we are going
[05:01:47] for a 20inut video. Now let's decide how
[05:01:50] many segments can we divide it to. So
[05:01:52] I'm doing an easy match. So 20 minutes
[05:01:55] multiplied by 60 that will convert it
[05:01:59] into seconds. So it will be 1 12 0 0
[05:02:03] seconds. And also I am making the
[05:02:05] segments also equal. So that means 1
[05:02:07] 1200 0 segments as well. Also with this
[05:02:11] let's talk about different resolutions.
[05:02:13] So let's say 4K is of 50GB which will be
[05:02:17] divided by our segment. So here the size
[05:02:20] of our segment is too large right
[05:02:22] because it is a 4K video. Maybe we can
[05:02:24] divide it into more segments. So, but
[05:02:27] for this example, let's stick to it.
[05:02:29] Let's say our 1080 pixel video, let it
[05:02:32] be for 20 GB and again we are going to
[05:02:35] divide it by 1200. It is going to be
[05:02:38] again 16.6 MB with this. Let me write
[05:02:42] all the resolutions. Now, this is what
[05:02:44] the calculation looks like if we divide
[05:02:46] it for each segment. For each
[05:02:48] resolution, for 720, it will be 8.3 MB.
[05:02:51] For 480 it will be 4.17 and for 250 it
[05:02:55] will be 2.08 MB. That means if we
[05:02:58] combine them all it is going to be 72.65
[05:03:02] MB approximately. So that means the size
[05:03:05] of one segment of our video is going to
[05:03:08] be 72 MB which is too huge I feel. So
[05:03:11] maybe we can divide it into further
[05:03:13] segments. But for now, this is going to
[05:03:16] be the size of our one segment. And
[05:03:19] accordingly, we need to load the data
[05:03:21] into our stream. Also, while calculating
[05:03:24] the size, we should also take care of
[05:03:25] our user. That means we should know how
[05:03:28] many users are going to see the screen.
[05:03:30] So, if the user count is let's say 100,
[05:03:33] we can use the same server or a single
[05:03:35] server only, right? For 100 number, if
[05:03:38] we count this, it will comes down to
[05:03:40] 87.5GB.
[05:03:42] So we can store 87.5GB
[05:03:46] into a single server and from which
[05:03:48] these 100 users can view our streaming
[05:03:51] easily. What if the user changes from
[05:03:54] 100 users to 100,000 users? Now this
[05:03:58] will change our picture. Now this is
[05:04:00] where we will know that our one server
[05:04:03] is maybe not enough to cater so much
[05:04:05] requests. So we will divide our servers
[05:04:08] into two maybe and based on the number
[05:04:11] of users we have to keep increasing the
[05:04:13] count of servers. Maybe we'll use
[05:04:15] message cues. Maybe we'll add some
[05:04:17] caching algorithms and all of this will
[05:04:19] be managed through our diagram here. I
[05:04:22] have not used any caching but we can use
[05:04:25] the caching on CDN level or we can use
[05:04:29] the cachet on our browser level which is
[05:04:32] going to hold the segments of the coming
[05:04:34] part. So this is what the design look
[05:04:36] like. This is what the calculation is.
[05:04:38] And this is what is the logic behind the
[05:04:41] system design of my system which will
[05:04:44] stream our video to a 10,000 or 100,000
[05:04:48] user. Now this diagram can be different
[05:04:51] in your case also. It is very possible
[05:04:54] that you will design a system better
[05:04:56] than me and it is also possible that you
[05:04:58] will see some other YouTube video who
[05:05:00] have designed the video better than me
[05:05:02] or maybe worse than me. So these designs
[05:05:05] are basically your practice. The more
[05:05:08] you practice, the more you see other
[05:05:10] designs, the more you read different
[05:05:12] papers, your designs are going to
[05:05:14] improve and more your design improves.
[05:05:17] The quality of your system or your
[05:05:19] workflow increases with time. So with
[05:05:21] this I end the discussion of system
[05:05:23] design and I really hope you all enjoyed
[05:05:26] this series so far. This was a long
[05:05:28] video and we covered a lot of topic. I
[05:05:31] hope you all enjoyed it. Now you can
[05:05:34] like this video or comment the most
[05:05:36] interesting section you found out in
[05:05:37] this video. Also you can comment out any
[05:05:40] topic which you want to see in future on
[05:05:43] telescope. With this my name is Aksha
[05:05:46] Garval signing off. Thank you.