import { createRouter, createWebHistory } from 'vue-router'
import UserSettings from '../views/UserSettings.vue'
import UserEmailsSubscriptions from '../views/UserEmailsSubscriptions.vue'
import UserProfile from '../views/UserProfile.vue'
import UserProfilePreview from '../views/UserProfilePreview.vue'
import HelloWorld from '../views/HelloWorld.vue'
import NotFound from '../views/NotFound.vue'

import SamplesPage from '../views/SamplesPage.vue'

import ComponentWithSlotPage from '../views/ComponentWithSlotPage.vue'
import CounterPage from '@/views/CounterPage.vue'
import FormPage from '@/views/FormPage.vue'

import FullNamePage from '@/views/FullNamePage.vue'
import ModelBindPage from '@/views/ModelBindPage.vue'
import TemplateRefsPage from '@/views/TemplateRefsPage.vue'
import ProvideAndInjectPage from '@/views/ProvideAndInjectPage.vue'
import IterationPage from '@/views/IterationPage.vue'
import MainPage from '@/views/MainPage.vue'
import SingleRecord from '@/views/SingleRecord.vue'
import SingleRecordWithProps from '@/views/SingleRecordWithProps.vue'
import SingleRecordWithQuery from '@/views/SingleRecordWithQuery.vue'

import NotAuthorizedPage from '@/views/NotAuthorizedPage.vue'
import AuthForm from '@/views/AuthForm.vue'
import LoginFailed from '@/views/LoginFailed.vue'
import LoginSucceed from '@/views/LoginSucceed.vue'
import HttpFetchPage from '@/views/httpFetchPage.vue'
import HttpAxiosPage from '@/views/httpAxiosPage.vue'
import LocalStoragePage from '@/views/LocalStoragePage.vue'
import VuexStorePage from '@/views/VuexStorePage.vue'
import PiniaStorePage from '@/views/PiniaStorePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      // component: MainPage,
      components: {
        default: MainPage,
        header: LoginSucceed,
        footer: AuthForm
      }
    },
    {
      name: 'samples',
      path: '/samples',
      component: SamplesPage
    },
    {
      name: 'componentWithSlot',
      path: '/componentWithSlot',
      component: ComponentWithSlotPage
    },
    {
      name: 'counterPage',
      path: '/counterPage',
      component: CounterPage
    },
    {
      name: 'formPage',
      path: '/formPage',
      component: FormPage
    },
    {
      name: 'fullNamePage',
      path: '/fullNamePage',
      component: FullNamePage
    },
    {
      name: 'modelBindPage',
      path: '/modelBindPage',
      component: ModelBindPage
    },
    {
      name: 'templateRefPage',
      path: '/templateRefPage',
      component: TemplateRefsPage
    },
    {
      name: 'provideAndInjectPage',
      path: '/provideAndInjectPage',
      component: ProvideAndInjectPage
    },
    {
      name: 'iterationPage',
      path: '/iterationPage',
      component: IterationPage
    },
    {
      name: 'helloWorld',
      path: '/hello-world',
      component: HelloWorld
    },
    {
      path: '/settings',
      // You could also have named views at tho top
      component: UserSettings,
      children: [
        {
          path: 'emails',
          component: UserEmailsSubscriptions,
        },
        {
          path: 'profile',
          components: {
            default: UserProfile,
            helper: UserProfilePreview,
          },
        },
      ],
    },
    {
      path: '/lazyPage',
      name: 'lazyPage',
      // lazy load of module
      component: () => import('../views/lazyPage')
    },
    {
      path: '/helloWorld',
      redirect: '/hello-world'
    },
    {
      path: '/helloworld',
      redirect: '/hello-world'
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/singleRecord/:id',
      name: 'singleRecord',
      component: SingleRecord
    },
    {
      path: '/singleRecordWithProp/:id',
      name: 'singleRecordWithProp',
      component: SingleRecordWithProps,
      // handle these as props
      props: true
    },
    {
      path: '/singleRecordWithQuery/:id',
      name: 'singleRecordWithQuery',
      component: SingleRecordWithQuery,
      // handle these as props
      props: true
    },
    {
      path: '/notAuthorizedPage',
      name: 'notAuthorizedPage',
      component: NotAuthorizedPage,
      children: [
        {
          path: 'form',
          name: 'authForm',
          component: AuthForm
        },
        {
          path: 'loginFailed',
          name: 'loginFailed',
          component: LoginFailed
        },
        {
          path: 'loginSucceed',
          name: 'loginSucceed',
          component: LoginSucceed
        }
      ]
    },
    {
      path: '/http_fetch',
      name: 'httpFetch',
      component: HttpFetchPage
    },
    {
      path: '/http_axios',
      name: 'httpAxios',
      component: HttpAxiosPage
    },
    {
      path: '/local_storage',
      name: 'localStorage',
      component: LocalStoragePage
    },
    {
      path: '/vuexStore',
      name: 'vuexStore',
      component: VuexStorePage
    },
    {
      path: '/piniaStore',
      name: 'piniaStore',
      component: PiniaStorePage
    }
  ],
})

export default router