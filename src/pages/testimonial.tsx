import React from 'react';
import Image from 'next/image';
import bgQoutation from './images/bg-pattern-quotation.svg';
import imageDaniel from './images/image-daniel.jpg';
import imageJonathan from './images/image-jonathan.jpg';
import imageKira from './images/image-kira.jpg';
import imageJeanette from './images/image-jeanette.jpg';
import imagePatrick from './images/image-patrick.jpg';

type Props = {};

const testimonial = (props: Props) => {
  return (
    <div className="bg-gray-200 min-h-screen grid gap-6 grid-cols-1 md:grid-cols-4">
      <div className="container mx-auto p-2 max-w-7xl md:col-span-2">
        <div className="text-white md:h-full ">
          <div className="relative p-10 rounded-xl bg-purple-700 md:h-full">
            <Image
              src={bgQoutation}
              alt="bg-quotation"
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            <div className="flex z-10 space-x-4">
              <Image
                src={imageDaniel}
                alt="daniel"
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Daniel</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            <p className="relative z-10 mt-6 text-xl">
              “ I received a job offer mid-course, and the subjects I learned
              were current, if not more so, in the company I joined. I honestly
            </p>
            <p className="mt-6 opacity-50">
              feel I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              have heard some people who had an amazing experience here. I
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-2 max-w-7xl md:col-span-1 md:row-span-1">
        <div className="text-white">
          <div className="relative p-10 rounded-xl bg-gray-600">
            <div className="flex z-10 space-x-4">
              <Image
                src={imageJonathan}
                alt="daniel"
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jonathan</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            <p className="relative z-10 mt-6 text-xl">
              “ I received a job offer mid-course, and the subjects I learned
              were current, if not more so, in the company I joined. I honestly
            </p>
            <p className="mt-6 opacity-50">
              feel I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              have heard some people who had an amazing experience here. I
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto p-2 max-w-7xl hidden md:block md:row-span-2">
        <div className="text-white">
          <div className="relative p-10 rounded-xl bg-white text-gray-900 md:row-span-2">
            <div className="flex z-10 space-x-4">
              <Image
                src={imageKira}
                alt="daniel"
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Kira</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            <p className="relative z-10 mt-6 text-xl">
              “ I received a job offer mid-course, and the subjects I learned
              were current, if not more so, in the company I joined. I honestly
            </p>
            <p className="mt-6 opacity-50">
              feel I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              hfffeel I got every penny’s worth. I was an EMT for many years
              before I joined the bootcamp. I’ve been looking to make a
              transition and have heard some people who had an amazinog
              experience here. I eel I got every penny’s worth. I was an EMT for
              many years before I joined the bootcamp. I’ve been looking to make
              a transition and have heard some people who had an amazinog
              experience here. I eel I got every penny’s worth. I was an EMT for
              many years before I joined the bootcamp. I’ve been looking to make
              a transition and have heard some people who had an amazinog
              experience here. I ave heard some people who had an amazinog
              experience here. I
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-2 max-w-7xl md:row-span-1">
        <div className="text-white">
          <div className="relative p-10 rounded-xl bg-white text-gray-900">
            <div className="flex z-10 space-x-4">
              <Image
                src={imageJeanette}
                alt="daniel"
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jeanette</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            <p className="relative z-10 mt-6 text-xl">
              “ vvvI received a job offer mid-course, and the subjects I learned
              werI received a job offer mid-course, and the subjects I learned
              werI received a job offer mid-course, and the subjects I learned
              were current, if not more so, in the company I joined. I honestly
            </p>
            <p className="mt-6 opacity-50">
              feel I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              have I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              have I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              have I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              have heard some people who had an amazing experience here. I
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-2 max-w-7xl md:col-span-2">
        <div className="text-white">
          <div className="relative p-10 rounded-xl bg-gray-900">
            <Image
              src={bgQoutation}
              alt="bg-quotation"
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            <div className="flex z-10 space-x-4">
              <Image
                src={imagePatrick}
                alt="daniel"
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Pattrick</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            <p className="relative z-10 mt-6 text-xl">
              “ I received a job offer mid-course, and the subjects I learned
              were current, if not more so, in the company I joined. I honestly
            </p>
            <p className="mt-6 opacity-50">
              feel I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              have heard some people who had an amazing experience here. I
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-2 max-w-7xl md:hidden">
        <div className="text-white">
          <div className="relative p-10 rounded-xl bg-white text-gray-900">
            <div className="flex z-10 space-x-4">
              <Image
                src={imageKira}
                alt="daniel"
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Kira</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            <p className="relative z-10 mt-6 text-xl">
              “ I received a job offer mid-course, and the subjects I learned
              were current, if not more so, in the company I joined. I honestly
            </p>
            <p className="mt-6 opacity-50">
              feel I got every penny’s worth. I was an EMT for many years before
              I joined the bootcamp. I’ve been looking to make a transition and
              hfffeel I got every penny’s worth. I was an EMT for many years
              before I joined the bootcamp. I’ve been looking to make a
              transition and have heard some people who had an amazinog
              experience here. I eel I got every penny’s worth. I was an EMT for
              many years before I joined the bootcamp. I’ve been looking to make
              a transition and have heard some people who had an amazinog
              experience here. I eel I got every penny’s worth. I was an EMT for
              many years before I joined the bootcamp. I’ve been looking to make
              a transition and have heard some people who had an amazinog
              experience here. I ave heard some people who had an amazinog
              experience here. I
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
