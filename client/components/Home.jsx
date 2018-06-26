import React from 'react'
import styles from './Home.scss'

const Home = () => (
  <div>
    <div className={styles.headline}>
      <img src="/img/capturing-the-human-heart-227847-unsplash.jpg" />
      <div>
        <h1>{'Transition Colonies'}</h1>
        <h2>{'Creating new opportunities for displaced people in transition'}</h2>
      </div>
    </div>
    <div className={styles.content}>
      <h2>{'Motivation'}</h2>
      <p>
        {'According to UNHCR, there are approximately 65.6 million forcibly displaced people worldwide, among them there are nearly 22.5 million refugees and 10 million stateless people. "We are now witnessing the highest levels of displacement on record." (UNHCR, "Figures at a Glance")'}
      </p>
      <p>
        {'Providing blockchain services for displaced people can help establish records for a smoother transition back to normal life. In Jordan, Azraq Refugee Camp replaced the need for expensive financial service providers by creating virtual accounts on the blockchain to make cheap and secure transactions at a supermarket. Transactions are locked on a digital ledger that can be moved across borders, making it possible for the refugees to establish a credit history for small business loans when they resettle. (Huffington Post, "How Blockchain Technology Is Helping Syrian Refugees")'}
      </p>
      <p>
        {'How else can we help displaced people build a better future with blockchain technology? What other records for displaced people can blockchain technology help establish?'}
      </p>
      <h2>{'Goal'}</h2>
      <p>
        {'The goal of Transition Colonies is to provide opportunities for displaced people to learn and develop professional skills through the completion of educational programs, community projects and business milestones. Their skills and experience will be recorded on the blockchain to establish records that will help make a smoother transition back to normal life.'}
      </p>
      <p>
        {'Target communities include self-organized communities and communities created with humanitarian assistance, such as refugee camps and camps for internally displaced people.'}
      </p>
      <h2>{'Implementation'}</h2>
      <ul>
        <li>{'Community organizers (admin) can create a token and a transition colony (colony)'}</li>
        <li>{'Community organizers (admin) can create educational programs (tasks in "education" domain)'}</li>
        <li>{'Community organizers (admin) can create community projects (tasks in "service" domain)'}</li>
        <li>{'Community organizers (admin) can create business milestones (tasks in "business" domain)'}</li>
        <li>{'Community members (admins) can complete educational programs, community projects and business milestones (tasks) to earn tokens and build their reputation'}</li>
      </ul>
    </div>
  </div>
)

export default Home
