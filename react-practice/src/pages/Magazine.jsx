import React from "react";
import Issue from "../components/Issue";
import "../css/magazine.css";

function Magazine() {
  const [years, setYears] = React.useState([]);

  React.useEffect(() => {
    async function getYears() {
      const response = await fetch(
        "https://api-sandbox.thekono.com/KPI2/titles/golf_digest/years"
      );
      const result = await response.json();
      setYears(result.reverse());
    }
    getYears();
  }, []);

  return (
    <>
      {years.map(({ year }) => (
        <Issue key={year} year={year} />
      ))}
    </>
  );

  /*
  return (
    <div className='wrap'>
      <div className='magazine-wrap'>
        {years.map(({ year }) => (
          <h2 key={year} className='issue-year'>
            {year}
          </h2>
        ))}
        <hr className='issue-line'/>
        <div className='issues-wrap'>
          <div className='issue'>
            {covers.map(({ bid, covers }) => (
              <img
                key={bid}
                className='issue-cover'
                src={covers}
                alt='issue-cover'
              />
            ))}
            {issues.map(({ bid, issue }) => (
              <h3 key={bid} className='issue-title'>
                {issue}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  */

  /*
  return (
    <div className='wrap'>
      <div className='magazine-wrap'>
        <h2 className='issue-year'>2014</h2>
        <hr className='issue-line' />
        <div className='issues-wrap'>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/53e626caa79c3/300/1421869208.webp?BscSignature=d4063d4e690430ab70d32a9fa16083b646ed32cbded0c9c49298d27b3c96af87&Expires=1735689599&Signature=MRkyIbFvJten3aTRymNlX-Ekw~3sUWgD2WCU-LG~aX-zb-rtynmgI0IzHjKvAI1QtRjI~oWsi9t7I2QmVVWwBHdi1XOVu1SMQCCsXNucCwXYjLzP4eCXkOs47fqVGMIKLsDbQxGzeUDJx0Ev3~FVr5ngQo15fR-D8TkJARLAU8Q_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2014/8月號 第301期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/53bb9f1207570/300/1421870061.webp?BscSignature=e02f0d0a6a46c7561425141bfec6a5a6ef46bcb2b4a5a3eee6b36a70cf79396b&Expires=1735689599&Signature=k84H6BzW6rr8TGh0ipK6YKMXd2CUt72z-P9pUvyscRkteRF2V9wWLr44pIa1dXsoH4uZXzlt5EsRbXnEST-v~MucmrL-vBab2BWFaB-fW-2W18Lw5qsz24ot~msRMCdvSI78pFL58ICFuzsY89LG3Phsu1k-1JcAqMGaaJcmIvw_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2014/7月號 第300期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5393513aa0689/300/1421868460.webp?BscSignature=cbbd110de7c96cab127df2d87c735b1cbf48ab154e7c866d46dcaa82866aafee&Expires=1735689599&Signature=cpTIoY956nA6ZJE5kP2O7hSzJ3pJIRKzeRjBjlDWYPTP74VfqHvniY2VD8Q3dreGqPzHN5hNKRqWPRztcKzXkAP1Uwio-PJbV1L15RUMoAN7c0DgtzMrAoZCcTGiiAjsh9CJTBLl~SgdBV3DaGFt7Esk2aDmNk1bEP-VUeB0jv8_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2014/6月號 第299期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/536b15434b02d/300/1421869045.webp?BscSignature=9258f62537a6331846fefcec51cb9a95276542ae90120df164f4b6feb63d4302&Expires=1735689599&Signature=YUn~RafNKHrsxIt7pBnM1NDThIbz-HEs13vDp7u5xSCpdHnb6q8bv7t9SRhqQSECOIHzPpjJgr8GF4pSa-s-kgWmFXFnUxxCrIGMxlmYC4r905mA1TaJQMMhdPmRa6qx098c6KQPNUf-nRw3gzl5zy6h2NLRBqQYe4HfVwCGJB0_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2014/5月號 第298期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/53421ed6d8c86/300/1421871056.webp?BscSignature=33012906faa8016eb013a2a6d01bd32c329d775fc39a4eabe8e5fd8d5d5c39ab&Expires=1735689599&Signature=YvEbRu3qwwANz3~aC~SuzAhPbrkitmOIjJBGjfoWHGNqBqDm16fJIVA0bXPPH2jIhunYq5BeTdbaewbqAoURWeC9yk8OlichWxyM1Su5c-uzXJoD0tSV18yPgmQe6MifQsUjddkUNy~oabFT91fFK14Llqq~PvZHrMorPtKLaF8_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2014/4月號 第297期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5325bf08170a3/300/1421877810.webp?BscSignature=d2ec43dd35d25ec812b6c1e07485a5953843082ad5e294fbe1640ee6e13fe8fa&Expires=1735689599&Signature=cGIN2qsmDjP2yEnYH3WDufaqyBzXT0iYjJmk0cDdxwoz4ASl~it9iXzCXoQMF7v-cZJnp9~ZGLgr~S5xi6WcLUz5YXCmJZ6oXoWP9qnN0MTLBg~FcgvLKiDCGUuH5dQCeNvsmYNZtE~D-J7Ws3nm4dZbGV1HIqlRq8Xq6VAilzs_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2014/3月號 第296期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5306c8c4966f6/300/1421881528.webp?BscSignature=8fb5e0d426f374dcd3ebbf4acd1eade858cb3cf7c33a8ebd9aad197303c73a7e&Expires=1735689599&Signature=dvKxfyaQ6~kP3iJWd7w8go5ajapwhm7MAOW3qSx4R~REKLJ-dP~~Gch-C3Dkljuoj9HGYr1OXOpm9gXM1-56YkKYVa0ekGHXl~WJ340CGLSp7qHRnaVxIk8dm3AkXWZCq2uLgYDwcE~ktwO4z0Tl1gfyyCtqjSuvSpsDoXYoUaY_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2014/2月號 第295期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/52dd1ac337b30/300/1421864202.webp?BscSignature=ef40a69a8584d457ae7bb36e185f33d45894af27cf161f43586370c2d7556798&Expires=1735689599&Signature=DLx9oTnNXfuCXi7Ea5xDMf9T7JFembdXpK2ndW1SZVVEOdogz6P3s7Tn1U60xosCccV-vJSHqYjVR6a0oZ0Zp6cegRiv6COkO7fLfvFu2DHFckswGUAYcJ5~Dl0hqozjOmMOlyAoEa~N3zWKFjFByU4Fm~Mejy7rxP-FkZhv-oA_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2014/1月號 第293期</h3>
          </div>
        </div>
      </div>
      <div className='magazine-wrap'>
        <h2 className='issue-year'>2013</h2>
        <hr className='issue-line' />
        <div className='issues-wrap'>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/52abdc5e3473f/300/1421878589.webp?BscSignature=331811d27d6b32fe3bbab1bbb82a0aa762acbb6979fa02fc2e0369cd5584be68&Expires=1735689599&Signature=QMu5vANSNAOCAuMQg-HirRkdX9mEP3BP01I5sdYBkUhUmuIGnljRlEycYVaWbZ~37gBkrP5qq7JZWYwvShJuGCFMqygP2tz~zpQNhdWoZcDM1I2ra-tiN~6kT3xjn7hXo5qgiffr~lZ5HF2HLOqPkt2W7DaDFg7G7pogdd6JQx8_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/12月號 第293期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/529c85c643b97/300/1421890416.webp?BscSignature=64b2d3c89dceac61fb86d6f36c4fd4311b4979ce565a57528ab86d15da5bb7de&Expires=1735689599&Signature=O-6UGEUABv3IKBFO3Uo14kJNaaeSuLLljT5J7R~1fqjG0FGJWJFdjzZ6EHMYooDsJV3e1lmrvM04TIZXS0wz4xCej8AwMKM7p5eb~MTfGdm5Gf11Olsza3TJ6DuSGLVrZjPwtlzK77lyv62NX4CWiXigFMRyaffF8XDOtJg1IMA_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/11月號 第292期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5255818ac1d74/300/1421860655.webp?BscSignature=4922dbfa146e8a463eb9703aa8a607e11e4ecb846f3657503b69dddd8c588fed&Expires=1735689599&Signature=K5-EVtie1lcESVb0dgR9tOjo5gCYrXianoAS-w2rUfnJB0xNwiMk40qxPx6nAe06hFkxX7xxjpMsjGx0k1zgkKYCsWwuHfnF5hEM73wy934feGfMP6evP9NLYT~1NAyAZZk4koVh2~LU5n3UR8zXtBi6E4Ow1xkB9hIKpR5Lzgs_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/10月號 第291期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5248633a5f20a/300/1421870491.webp?BscSignature=caed8893a13df0f6e0e9a0d691a699c9bc3e535d663427bf84d586ab6ce317ee&Expires=1735689599&Signature=UOLFCt6pMdfnRcE8LkOo7izz0tI3sZJDaJJbCrLytebU8ZfFIErxvKvB~FDF68OVHHlx4aREm7zB0PdgS546uYGRJEc3ZgwiUqvmzZTrkog9qzJc4SGqI3CQ3K5-jVmv2-U~hDZJBzRxF8JGlfAavF4relnIM3SVkTBVeO1YJr4_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/9月號 第290期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5207937059bcd/300/1421880803.webp?BscSignature=184fc8235fc7108a808039c8325faa18f5aab056bbd32bccc7583a9109104271&Expires=1735689599&Signature=OQPcDzu00pcWTD6XiU2aC8PqSxQtLaPYtiMJqNEuiwSb0litSugZG84k7Ds7QUimU2IlJjNi7~qCwrhWJtyFh6XnllC8mFTA3P5CK4-gzAaOubW6boCScZPaQcqq1cZbhJkGRDmxenE7nBa879nGq2HOg~zhYFonmW0aSTuO8hM_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/8月號 第289期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/51dacbca4454b/300/1421866073.webp?BscSignature=463e29d20315d4efc5106ba053ebc662cce1e7b26eb2c9597d3b16dde50913bc&Expires=1735689599&Signature=SN11V17MOkQ~8w1pzISuLaxE2Gw4aEVjSYqQciRRCcSe3yLboUTgj9YhSbXSfwdcQWxrMTlOW6zffoEMgsZpVwx3lGm8uUnyD0wW4PuhiYqglphE5C9MODSsvveB5TI9weTtF1fe51P5zYfC6W0bTWRLk-5MORe8gwXvVqOi1n4_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/7月號 第288期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/51b8a086178f4/300/1421869784.webp?BscSignature=056955605f4d61eb7983eeaf3736e8f3b931d853d30135e21d92cbced4a890d6&Expires=1735689599&Signature=f2D3Gu~QtN86KtdE4CrIGFd3TSpD~tus6vzvBLQBvccoeL0x7gpltKbd9fK2s6RWHHdBqv2VsURt~h18~S-lQv6aj2N4Vi7WuZKYeN0W5qH6i4mKL8IhUIa2pWJ9~7bqHeXE3i-UEjespIKxB9Qtb4AqPcvi-fX1lmEPs4jPvqA_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/6月號 第287期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5190926a55ac4/300/1421896409.webp?BscSignature=1ad8dff70bf7fbf8d15ad9d90c59fc302bf253945cc06bc4f37e191e8f381180&Expires=1735689599&Signature=WQNCXKaf4fFXy2IJWQLZ8gPN7MYIGfBoco6jp9Gvrg7c-zkuqqWDXgZ0FJsM1M8hZ10~3w5vRoyZ5nyqokPY4OhwcoKIxZBVBv36A2T8fuIzArSPSymSlcUXE1Z-lZGC98KWXIIlAE~~oM6BlTJJ1Y9gW8xX1t6n5MhBtOsmgY0_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/5月號 第286期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/515d26e97feae/300/1421865022.webp?BscSignature=c0196b32fc4473be169e620a5527b028b560e7e3ddac17019c01ff2139bda317&Expires=1735689599&Signature=SALkPv0byBJZ7vcEG8ktD3F3wz-ZDzIZeE1h99f5WWVWIQbV3t0f2iLV4E~9peCWOCQ87SerbBOHyGrnoZJTYVeIIeesm3nFlPdnaKI5-WVSS5qvf16-KmsyGsHK5BU51S0M72EQqfPNiG9xpVmUfqyHJw5QEy20DAJ07H2d8-A_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/4月號 第285期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5142ab36011a8/300/1421881759.webp?BscSignature=0e2387dab1ee42845d8285a661fca0793895c9bb9b41873313c2cb50006ca0c0&Expires=1735689599&Signature=bfrD4JiuowiXSXeo0vBGdCbM5-i1tzj9zcbTctXCq1h1h~J7n4wQNc2~Di3PQBxrCn0AVMsrOxhaEk5m3BlaUGV3JR7Az31RzkgAH5dQ0scnd2yCkY37xmB52~7PoOZ1px-5Ysg6A9Vov3yh8qJ9LK~Qlcly-gDqg9KBpPLZFtw_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/3月號 第284期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5120511e28286/300/1421893116.webp?BscSignature=190bbc3884b7d4cda29c833846e0a4bda77a6a47b889b3f90aca44ac6672e666&Expires=1735689599&Signature=e0uVvSSo5kUiIyYmeEPr9Dssjy5JKzTdtYq1MPoedISKvAvpbsmJuIwmA0rrFJzY4brx9F~0Xpv-OwCe60B1X3bf3FQFrvNdSB9zxmpMObT1v2F3q95oQ~UT1Ej3YzAITH3CsR8cDHBqmCKoeXs5ItDhbwxxlw2-TLH2SBK2zgg_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/2月號 第283期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/50eb8b3561908/300/1421880125.webp?BscSignature=3aedfb923da731f80467427ccd5f0d76564d7cd3f0a0186ef3051636ac612523&Expires=1735689599&Signature=X~0YWpXE8lihLpVq3pS8X2zRd-t1B~lLoDD5DnY2Pho6cU00oKuQMR-lVe0IvkfE9TFJm5NjJ24JX65lmBFUZi~DgPOoP5IgrSROZyBCAqy1bW3LqcxYrS5MY3qgun11rTPbuvGAMyYvfsVlqOKeDwyGiZGG6TG7hJmUylKzPHw_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2013/1月號 第282期</h3>
          </div>
        </div>
      </div>
      <div className='magazine-wrap'>
        <h2 className='issue-year'>2012</h2>
        <hr className='issue-line' />
        <div className='issues-wrap'>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/50ce98f7ce2ca/300/1421875696.webp?BscSignature=51fd8fddf2f73e9b0194cf6864d3f25eda395313dd580dda0a0b5344f8f95bb3&Expires=1735689599&Signature=TK00fLDlpyqkJD-1Q04HmpaUwdfsHLf5Hi098UeDEk4rzeMnOff7AGz31b25iAv3o5mNVlpf17GNAfpqOyqd5YkN8drwPe8G6AnGhTIixPOqzfyFmqJ~EL3DPJ6Cq65-lWU7Fi~IwRhqx-UTkxd77vtuf8AVr3OG2TVnHGfkzlg_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/12月號 第281期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5099241933b9c/300/1422111247.webp?BscSignature=020a340eed8412691b63bb8b6f2264ca3e8d4d8c67f33730a77711ae9e95d80e&Expires=1735689599&Signature=O4aLwl8lwAjk26PpTA6lD9W8dPy~uypccl7J-Iyudtt4-o5dRGJpleq-7IHyF2Co~IyjAmtZCI1xCM4TVmgfWXRPCRAt-VZCl2Z9hSHTpv8hSEUBqTT9rc2dcQxx06U3RWndpZRxVyu1KOjTfPhT4qalick8lG2iXuOE6gf5B6c_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/11月號 第280期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/506bffed05e47/300/1421878023.webp?BscSignature=d34b583d8ce8982b24cab9d6c3e933d411d94044d9832c43bc000b7e00f2fff5&Expires=1735689599&Signature=SwENpVhAMAG~hnPuZNKgWdxKvvsfZvGBKNPo6LrMnNm1LApdKohbur~DInTWkktt~xKmL25jGfCmo4jiLVkOVjD9OyNkNdOSfzB1se8nMda7KEOlAK0qLc5KRWE1s50~xEwBBO5xSOdDD~UNTipb493ChwHwpRObzBjNzjhRKzk_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/10月號 第279期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5045ec8d5e214/300/1421878579.webp?BscSignature=52b14665e4c8c6a2009ae34266a65565d64bea1c61540c5b2091a819edd99f78&Expires=1735689599&Signature=aAeuGpfHKP8Wk8r2qYTgCALLWMDSBtgag5p5bKrysidhkGavYJRxgdYST4B04~5YF3JEwFNsp8hmTZKkbWF9xp-2yBap2Hw4FodITs2ai65Lx~aoqUhaU1nunIfLmSB95LaPu5tJHLwNnAjuDmhhDA4vrRq0YS6vW~9-gyK7bBY_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/9月號 第278期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/5020f45e00767/300/1421869983.webp?BscSignature=85b763a1fb2c645bd1f401a0fe2efb0a1fbcf4b6d210e258c0e4735677326ecf&Expires=1735689599&Signature=eEG5WsVjQcDDBbUz0T8VNAKjxFi9hFXJnigWVlFAyIGeGfbzXdb499aQo9-mLaZDuhZ-NSeHxR7yzfEBu4~o7LjgiVBt9Vq2gor1JSqVmYgtfeRRIotUFThji8ywzfW3qVYU279rGy17ad2uzdCoH6uenbzgYjI6YhuFrt8zLWI_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/8月號 第277期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/4ffeb9070798f/300/1421862078.webp?BscSignature=f23d8a2b9a22cb1b2540bb26069e91aef91d5e7ed86377a054de6eba59b75307&Expires=1735689599&Signature=FALPX9pg8WsKyuZawSFtIYUWnHFnfUR0HfUYBHIUIciJDzwXQ~MGapdUf08a1qncVGS9cIBvNtPc02jKnLO1mR-I~HcH5grU9RRlVSe5G~D1QZy5o7IRKpxeBAtYg7u-aHp8uQoO2haanc9FE31hgOPW~EK~IKTMrT0pMgcez5c_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/7月號 第276期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/4fcdcd4473e16/300/1421877343.webp?BscSignature=84427904fc468e1d050dff166a769fff7a62491b1ceb2cb76078a3d8ed9e77d4&Expires=1735689599&Signature=Nx9LLuBJB5dGapzvNaAl-Tw7SRsaQnOGoc1TNLxhyJhDQb4Wuy5UflqaJCfdONJNOLTublaKLDbPjcq2A1Y-gSFlnOf1WDrmWHc4Kcu25Eqls7RKfxZr3VYOfDkxjjFDO41hlofFvsg1legYK5Fqnfft4uXXpE18aBePfZH7G5I_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/6月號 第275期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/4fa4e91e5cf34/300/1421867879.webp?BscSignature=300922de916ff78f03eac2dc8a50f0ddb96857998063163c8d02f25708338474&Expires=1735689599&Signature=PQV4As-6vMoBR2BnQZNrGfZAq2bzuCCqiBQrcJdY0sQtJ5MZcpvedKInGfFhS1zeAEAxnvQHe6gQsptV28VV8P01WzcM0-DJ9T1ley8AczmeHfM9PKBFDnqTyv~4LXmNRw01B5hgsLddIjAwJH0uTTlxkmi13Vgth~aNciSsDFo_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/5月號 第274期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/4f88faeccdffc/300/1421877396.webp?BscSignature=b194c800a95c309b864b744f51ea185f9cefb3408ed39cde6923089d28f12bb4&Expires=1735689599&Signature=RKCQWukBgYtou6CvUallQ7LvXzBubD5aQPv31ieArML2dZu70bSstVCLWMhNVAu5G8TX1oH2qtCICcw5kmxp2Ar6v6gISKAK4Dk0LFhijB4FKaiV~s8-4ww-8gz~aRsVQ1xLPaLPLFcO-~DOrfVoNEnHQwYmLRXutNY0ZhDYqrw_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/4月號 第273期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/4f56ec0f7fc1e/300/1421877154.webp?BscSignature=8f10d28fc427bbc51be6dfbf6aa8bcfea240f95055623af51cd28b3714465867&Expires=1735689599&Signature=SFEfX8NtykFq6xxtAh7bfKYSQAW~FUNtpAEwuOLU15NJ8DwM7FVRlxyXpEXCuldQTPpwWZz0eXpn-9UzAUxofsCYXC76M~LJbGLskQKfqI7~2CqH9U0VzV1YnFQ1-aEM4nTOgauhMACliiN5FvXEaQXwy6stEfRImbvXZwKBhSY_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/3月號 第272期</h3>
          </div>
          <div className='issue'>
            <img
              className='issue-cover'
              src='https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/4f4f47df4f040/300/1421893433.webp?BscSignature=7b1e54ebc804403b1e9e2dceaaf8fade304d2cfbb6a071b8a37aa2296756beca&Expires=1735689599&Signature=dskWD8tsP~BrIe312bOleSVdejhLAWezzH5Eg8ucnfKbe4mivF61n~FdtnmxpG5YuOfxiK8TISEvxZfYEA-S3bWr5nJ9Wj-uZnc-xieVlVa0ubAybRB5lcrUAS5SgRCLCNfJUF45hA~bkWTifOLRQygJBn4AWX3GUbaDsT8ioy4_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA'
              alt='issue-cover'
            />
            <h3 className='issue-title'>2012/2月號 第271期</h3>
          </div>
        </div>
      </div>
    </div>
  );
  */
}

export default Magazine;
