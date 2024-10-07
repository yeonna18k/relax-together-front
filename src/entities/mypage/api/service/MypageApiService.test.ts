import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';

const context = describe;

describe('MypageApiService', () => {
  context('서버에 회원 정보 수정 api를 accessToken 없이 호출하면', () => {
    it('401 status code를 전달 받는다.', async () => {
      const response = await mypageApiService.updateUser({
        companyName: 'test',
        profileImage: '/assets/default-user.svg',
      });
      console.log('🚀 ~ it ~ response:', response);
    });
  });
  // context('서버에 fetchProducts에 categoryId 없이 호출하면', () => {
  //   it('products 전체 데이터를 전달 받을 수 있다.', async () => {
  //     const products = await apiService.fetchProducts();

  //     expect(products).toEqual(productSummaries);
  //   });
  // });
  // context('서버에 fetchProducts에 categoryId를 포함해서 호출하면', () => {
  //   it('products 해당 카테고리 데이터만 전달 받을 수 있다.', async () => {
  //     const categoryId = 'category-02';
  //     const products = await apiService.fetchProducts({ categoryId });

  //     expect(products).toEqual(productSummaries
  //       .filter((product) => product.category.id === categoryId));
  //   });
  // });
  // context('서버에 fetchProduct를 productId를 호출하면', () => {
  //   it('product 해당 카테고리 데이터만 전달 받을 수 있다.', async () => {
  //     const productId = 'product-01';
  //     const products = await apiService.fetchProduct({ productId });

  //     expect(products).toEqual(fixtures.products.find((i) => i.id === productId));
  //   });
  // });
});
