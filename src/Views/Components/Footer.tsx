import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-block">
            <p className="cop">
            Nội dung được tổng hợp và sưu tầm trên Internet, Chúng tôi không chịu trách nhiệm đối với bất kỳ nội dung nào được đăng tải trên trang web này.
            <br/>
            Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.
            </p>
            {/* <p className="sitemap">
              <a target="_blank" href="/index.php/rss/index.xml">SiteMAP</a><span className="space-line-bold" />
              <a target="_blank" href="/index.php/rss/baidu.xml">Baidu</a><span className="space-line-bold" />
              <a target="_blank" href="/index.php/rss/baidu.xml">Google</a><span className="space-line-bold" />
              <a target="_blank" href="/index.php/rss/bing.xml">Bing</a><span className="space-line-bold" />
              <a target="_blank" href="/index.php/rss/so.xml">so</a><span className="space-line-bold" />
              <a target="_blank" href="/index.php/rss/sogou.xml">Sogou</a><span className="space-line-bold" />
              <a target="_blank" href="/index.php/rss/sm.xml">SM</a>
            </p> */}
          </div>
        </div>
      </footer>
  )
}

export default Footer