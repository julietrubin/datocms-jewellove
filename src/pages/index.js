import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const Index = () => (
  <Layout>
  <article className="sheet">
      <div className="sheet__inner">
        <div
          className="sheet__body"
        />
        <ul>
            <li class="buttons">
                <a class="button" href="https://onlyfans.com/jewel_love" target="blank">Only Fans</a>
            </li>
            <li class="buttons">
                <a class="button" href="https://teespring.com/stores/jewellove" target="blank">Store</a>
            </li>
            <li class="buttons">
                <a class="button" href="https://www.amazon.com/hz/wishlist/ls/252KJ23H2U8FA?ref_=wl_share" target="blank">Wishlist</a>
            </li>
            <li class="buttons">
                <a class="button" href="https://slink.bigovideo.tv/w3d5H3" target="blank">Bigo</a>
            </li>
        </ul>
      </div>
    </article>
  </Layout>
)

export default Index
